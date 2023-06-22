import React from "react";
import { Link } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function HamburgerMenu({
  isMenuOpen,
  menuToggle,
}: {
  isMenuOpen: boolean;
  menuToggle: (isMenuOpen: boolean) => void;
}) {
  return (
    <>
      {/* Dialog for mobile menu start */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={isMenuOpen}
        onClose={menuToggle}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
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
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => menuToggle(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">Hello</div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      {/* Dialog for mobile menu end */}
    </>
  );
}
