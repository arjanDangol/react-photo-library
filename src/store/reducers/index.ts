import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "../Types";
import { getUnsplashImages } from "./getUnsplashImages";

const initialState: InitialState = {
  images: [],
  searchTerm: "",
  pageNumber: "1",
};

const unsplashSplice = createSlice({
  name: "galleryApp",
  initialState,
  reducers: {
    clearImages: (state) => {
      state.images = [];
      state.pageNumber = "1";
    },
    changeSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    clearSearchTerm: (state) => {
      state.searchTerm = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUnsplashImages.fulfilled, (state, action) => {
      state.images = action.payload.parsedData;
      state.pageNumber += 1;
    });
  },
});

export const store = configureStore({
  reducer: {
    galleryApp: unsplashSplice.reducer,
  },
});

export const { clearImages, changeSearchTerm, clearSearchTerm } =
  unsplashSplice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
