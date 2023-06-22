import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "..";
import axios from "axios";
import { UNSPLASH_API_URL } from "../../utils/constants";
import { UnsplashImages } from "../../interface/Types";
import { parseData } from "../../utils/parsedData";

const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;

export const getSearchedImages = createAsyncThunk(
  "galleryApp/searchedImages",
  async (_, { getState }) => {
    const {
      galleryApp: { pageNumber, images, searchTerm },
    } = getState() as RootState;
    const { data } = await axios.get(
      `${UNSPLASH_API_URL}search/photos?page=${pageNumber}&query=${searchTerm}&per_page=12&client_id=${API_KEY}`
    );

    const parsedData: UnsplashImages[] = await parseData(data.results);
    return { parsedData: [...images, ...parsedData] };
  }
);
