import { configureStore, createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../Types";
import { getUplplashImages } from "./getUpsplashImages";

const initialState: InitialState = {
  images: [],
  searchTerm: "",
};

const upsplashSlice = createSlice({
  name: "galleryApp",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUplplashImages.fulfilled, (state, action) => {
      state.images = action.payload.parsedData;
    });
  },
});

export const store = configureStore({
  reducer: {
    galleryApp: upsplashSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
