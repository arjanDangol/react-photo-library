import React, { SyntheticEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/reducers/hooks";
import {
  changeSearchTerm,
  clearSearchTerm,
  clearImages,
} from "../store/reducers";
import { XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { getSearchedImages } from "../store/reducers/getSearchedImages";

export default function SearchBox() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.galleryApp.searchTerm);
  const handleSearch = () => {
    if (location.pathname !== "/search") navigate("/search");
    else {
      dispatch(clearImages());
      dispatch(getSearchedImages());
    }
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };
  return (
    <>
      {/* Search area start */}
      <div className="relative mt-2.5">
        <div className="absolute inset-y-0 left-2 flex items-center">
          <MagnifyingGlassIcon
            className="right-3 top-0 h-full w-5 text-gray-400 cursor-pointer"
            aria-hidden="true"
            onClick={() => handleSearch()}
          />
        </div>
        <input
          type="text"
          name="searchTerm"
          id="searchTerm"
          value={searchTerm}
          onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
          onKeyDown={(e) => handleKeyPress(e)}
          className="block w-full rounded-full border-0 px-3.5 py-2 pl-12 pr-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
          <XMarkIcon
            className={`left-3 top-0 h-full w-5 text-gray-400 cursor-pointer ${
              !searchTerm ? "invisible" : "visible"
            }`}
            onClick={() => dispatch(clearSearchTerm())}
            aria-hidden="true"
          />
        </div>
      </div>
      {/* Search area end */}
    </>
  );
}
