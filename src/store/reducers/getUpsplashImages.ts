import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from ".";
import axios from "axios";
import { UPSPLASH_API_URL } from "../../utils/constants";
import { UpsplashImages } from "../Types";
import { parseData } from "../../utils/parsedData";

const API_KEY = process.env.REACT_APP_UPSPLASH_API_KEY;

export const getUplplashImages = createAsyncThunk(
  "galleryApp/uplplashImages",
  async (isNext: boolean, { getState }) => {
    const {
      galleryApp: { images },
    } = getState() as RootState;
    const { data } = await axios.get(
      `${UPSPLASH_API_URL}?page=1&per_page=10&client_id=${API_KEY}`
    );
    console.log("Items", data);

    const parsedData: UpsplashImages[] = await parseData(data);
    return { parsedData: [...images, ...parsedData] };
  }
);
