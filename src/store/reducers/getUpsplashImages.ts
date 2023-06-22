import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from ".";
import axios from "axios";
import { UNSPLASH_API_URL } from "../../utils/constants";
import { UnsplashImages } from "../Types";
import { parseData } from "../../utils/parsedData";

const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;

export const getUplplashImages = createAsyncThunk(
  "galleryApp/uplplashImages",
  async (isNext: boolean, { getState }) => {
    const {
      galleryApp: { images },
    } = getState() as RootState;
    const { data } = await axios.get(
      `${UNSPLASH_API_URL}?page=1&per_page=10&client_id=${API_KEY}`
    );
    console.log("Items", data);

    const parsedData: UnsplashImages[] = await parseData(data);
    return { parsedData: [...images, ...parsedData] };
  }
);
