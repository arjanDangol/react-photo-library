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
          <div className="flex items-center justify-between divide-y divide-gray-500/10">
            <Link to="/">
              <div className="flex -m-1.5 p-1.5 justify-center align-middle">
                <img
                  className=" h-8 w-auto"
                  src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=1380&t=st=1687472763~exp=1687473363~hmac=0f8eb2784a7e99c866c4bc53794a4f1cc20b6b7511af35c9846b7dc5caa97038"
                  alt=""
                />
                <span className="flex text-lg font-bold">
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
            <div className="-my-6">
              <div className="space-y-2 py-6 font-medium text-lg">
                This is a gallery app.
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      {/* Dialog for mobile menu end */}
    </>
  );
}
