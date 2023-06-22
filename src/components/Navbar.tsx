import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
import SearchBox from "./SearchBox";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-md shadow-blue-100">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/">
            <div className="flex -m-1.5 p-1.5 justify-center align-middle">
              <img
                className="h-8 w-auto"
                src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_4f2153ce7e0ebcddea8a5d6dc9787757/unsplash.png"
                alt=""
              />
              <span className="hidden lg:flex align-middle justify-center text-lg font-bold">
                Photo Gallery App
              </span>
            </div>
          </Link>
        </div>
        <SearchBox />
        {/* Icon for mobile menu start */}
        <Bars3Icon
          className="lg:hidden h-6 w-6 -m-2.5 inline-flex items-center justify-center rounded-md cursor-pointer"
          aria-hidden="true"
          onClick={() => setMobileMenuOpen(true)}
        />
        {/* Icon for mobile menu end */}

        <div className="hidden lg:flex lg:gap-x-12"></div>
      </nav>
      <HamburgerMenu
        isMenuOpen={mobileMenuOpen}
        menuToggle={setMobileMenuOpen}
      />
    </header>
  );
}
