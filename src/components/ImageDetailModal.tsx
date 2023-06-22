import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { format } from "date-fns";
import { UnsplashImages } from "../interface/Types";

export default function ImageDetailModal({
  isOpen,
  closeModal,
  data,
}: {
  isOpen: boolean;
  closeModal: () => void;
  data: UnsplashImages;
}) {
  console.log("data: ", data);
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <article key={data.id} className="rounded-3xl">
                    <div className="flex justify-center">
                      <img
                        src={data.url}
                        alt={data.username}
                        className=" h-72 rounded-3xl"
                      />
                    </div>

                    <div className="p-5 pb-0 flex flex-col md:flex-row items-start md:items-center justify-between">
                      <article className="flex items-center justify-start">
                        <ul>
                          <li className="text-slate-800 font-bold">
                            {data.userFullName}
                          </li>
                          <li className="text-sm text-slate-800 opacity-75">
                            {format(new Date(data.createdAt), "dd MMMM yyyy")}
                          </li>
                        </ul>
                      </article>

                      <article className="mt-5 md:mt-0">
                        <small className="text-slate-800 opacity-75 block">
                          {data.likes} Likes
                        </small>
                      </article>
                    </div>
                  </article>

                  <div className="mt-4 flex justify-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => closeModal()}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
