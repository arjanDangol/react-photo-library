import React from "react";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/reducers/hooks";
import InfiniteScroll from "react-infinite-scroll-component";
import Navbar from "../components/Navbar";
import ImageCard from "../components/ImageCard";
import Spinner from "../components/Spinner";
import { getUnsplashImages } from "../store/reducers/getUnsplashImages";
import { UnsplashImages } from "../store/Types";
import { clearImages } from "../store/reducers";
export default function Home() {
  const dispatch = useAppDispatch();
  const images = useAppSelector((state) => state.galleryApp.images);
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
  useEffect(() => {
    if (!isImageLoaded) {
      dispatch(getUnsplashImages(false));
      setIsImageLoaded(true);
    }
    console.log("Images: ", images);
  }, [images]);

  useEffect(() => {
    return () => {
      dispatch(clearImages());
    };
  }, [dispatch]);

  return (
    <div className="bg-white">
      <Navbar />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="py-16 sm:py-24 lg:py-32">
          {/* Photo gallery grid area start */}
          {images.length ? (
            <InfiniteScroll
              dataLength={images.length}
              next={() => dispatch(getUnsplashImages(true))}
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
          {/* Photo gallery grid area end */}
        </div>
      </div>
    </div>
  );
}
