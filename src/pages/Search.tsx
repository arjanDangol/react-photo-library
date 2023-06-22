import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Navbar from "../components/Navbar";
import ImageCard from "../components/ImageCard";
import Spinner from "../components/Spinner";
import { clearImages } from "../store/reducers";
import { getSearchedImages } from "../store/reducers/getSearchedImages";
import { UnsplashImages } from "../store/Types";
import { useAppDispatch, useAppSelector } from "../store/reducers/hooks";

export default function Search() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const images = useAppSelector((state) => state.galleryApp.images);
  const searchTerm = useAppSelector((state) => state.galleryApp.searchTerm);

  useEffect(() => {
    dispatch(clearImages());
    if (searchTerm === "") navigate("/");
    else {
      dispatch(getSearchedImages());
    }
  }, [dispatch, navigate, searchTerm]);
  return (
    <>
      <Navbar />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="py-16 sm:py-24 lg:py-32">
          <div className=" font-bold text-4xl mb-8">
            Images for {searchTerm}
          </div>
          {images.length ? (
            <InfiniteScroll
              dataLength={images.length}
              next={() => dispatch(getSearchedImages())}
              hasMore={images.length < 60}
              loader={<Spinner />}
              height={550}
            >
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
                {images.map((item: UnsplashImages) => (
                  <ImageCard data={item} key={item.id} />
                ))}
              </div>
            </InfiniteScroll>
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </>
  );
}
