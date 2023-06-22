import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState, UnsplashImages } from "../Types";
import { getUnsplashImages } from "./getUnsplashImages";
import { getSearchedImages } from "./getSearchedImages";
import { useAppSelector } from "../../store/reducers/hooks";

const initialState: InitialState = {
  images: [],
  searchTerm: "",
  pageNumber: "1",
  selectedImage: {
    id: "",
    description: "",
    url: "",
    likes: 0,
    userId: "",
    username: "",
    userFullName: "",
    createdAt: 0,
  },
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
    changeSelectedImage: (
      state,
      action: PayloadAction<{ id: string; images: UnsplashImages[] }>
    ) => {
      const selectedId = action.payload.id;
      const imagesData = action.payload.images;
      state.selectedImage = imagesData.filter((x) => x.id === selectedId)[0];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUnsplashImages.fulfilled, (state, action) => {
      state.images = action.payload.parsedData;
      state.pageNumber += 1;
    });
    builder.addCase(getSearchedImages.fulfilled, (state, action) => {
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

export const {
  clearImages,
  changeSearchTerm,
  clearSearchTerm,
  changeSelectedImage,
} = unsplashSplice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
