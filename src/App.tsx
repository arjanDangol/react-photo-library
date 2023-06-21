import { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

interface PhotoDataInterface {
  id: string;
  imgUrl: string;
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const photoData = [
    {
      id: "1",
      imgUrl:
        "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_4f2153ce7e0ebcddea8a5d6dc9787757/unsplash.png",
    },
    {
      id: "2",
      imgUrl:
        "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_4f2153ce7e0ebcddea8a5d6dc9787757/unsplash.png",
    },
    {
      id: "3",
      imgUrl:
        "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_4f2153ce7e0ebcddea8a5d6dc9787757/unsplash.png",
    },
    {
      id: "4",
      imgUrl:
        "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_4f2153ce7e0ebcddea8a5d6dc9787757/unsplash.png",
    },
    {
      id: "5",
      imgUrl:
        "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_4f2153ce7e0ebcddea8a5d6dc9787757/unsplash.png",
    },
    {
      id: "6",
      imgUrl:
        "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_4f2153ce7e0ebcddea8a5d6dc9787757/unsplash.png",
    },
  ];
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-white">
      <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-md shadow-blue-100">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a
              href="#"
              className="flex -m-1.5 p-1.5 justify-center align-middle"
            >
              <img
                className="h-8 w-auto"
                src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_4f2153ce7e0ebcddea8a5d6dc9787757/unsplash.png"
                alt=""
              />
              <span className="hidden lg:flex align-middle justify-center text-lg font-bold">
                Photo Gallery App
              </span>
            </a>
          </div>

          {/* Search area start */}
          <div className="relative mt-2.5">
            <div className="absolute inset-y-0 left-2 flex items-center">
              <MagnifyingGlassIcon
                className="pointer-events-none right-3 top-0 h-full w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <input
              type="text"
              name="searchQuery"
              id="searchQuery"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="block w-full rounded-full border-0 px-3.5 py-2 pl-12 pr-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
              <XMarkIcon
                className="pointer-events-none left-3 top-0 h-full w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
          </div>
          {/* Search area end */}

          {/* Icon for mobile menu start */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          {/* Icon for mobile menu end */}

          <div className="hidden lg:flex lg:gap-x-12"></div>
        </nav>

        {/* Dialog for mobile menu start */}
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a
                href="#"
                className="flex -m-1.5 p-1.5 justify-center align-middle"
              >
                <img
                  className="h-8 w-auto"
                  src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_4f2153ce7e0ebcddea8a5d6dc9787757/unsplash.png"
                  alt=""
                />
                <span className="flex align-middle justify-center text-lg font-bold">
                  Photo Gallery App
                </span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
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
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="py-16 sm:py-24 lg:py-32">
          {/* Photo gallery grid area start */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
            {photoData.map((item: PhotoDataInterface) => (
              <div
                key={item.id}
                className="flex justify-center align-middle h-32"
              >
                <img className="w-auto" src={item.imgUrl} alt="" />
              </div>
            ))}
          </div>
          {/* Photo gallery grid area end */}
        </div>
      </div>
    </div>
  );
}
