import { configureStore, createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../Types";
import { getUnsplashImages } from "./getUnsplashImages";

const initialState: InitialState = {
  images: [],
  searchTerm: "",
};

const unsplashSplice = createSlice({
  name: "galleryApp",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUnsplashImages.fulfilled, (state, action) => {
      state.images = action.payload.parsedData;
    });
  },
});

export const store = configureStore({
  reducer: {
    galleryApp: unsplashSplice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
