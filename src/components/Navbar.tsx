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
                src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=1380&t=st=1687472763~exp=1687473363~hmac=0f8eb2784a7e99c866c4bc53794a4f1cc20b6b7511af35c9846b7dc5caa97038"
                alt=""
              />
              <span className="hidden md:flex text-lg font-bold">
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
