import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "..";
import axios from "axios";
import { UNSPLASH_API_URL } from "../../utils/constants";
import { UnsplashImages } from "../../interface/Types";
import { parseData } from "../../utils/parsedData";

const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;

export const getUnsplashImages = createAsyncThunk(
  "galleryApp/uplplashImages",
  async (_, { getState }) => {
    const {
      galleryApp: { pageNumber, images },
    } = getState() as RootState;
    const { data } = await axios.get(
      `${UNSPLASH_API_URL}photos?page=${pageNumber}&per_page=12&client_id=${API_KEY}`
    );
    console.log("Items", data);

    const parsedData: UnsplashImages[] = await parseData(data);
    return { parsedData: [...images, ...parsedData] };
  }
);
