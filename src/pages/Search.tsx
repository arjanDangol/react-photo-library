import React from "react";
import Navbar from "../components/Navbar";

export default function Search() {
  return (
    <>
      <Navbar />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="py-16 sm:py-24 lg:py-32">Search</div>
      </div>
    </>
  );
}
