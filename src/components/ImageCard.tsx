import { UnsplashImages } from "../store/Types";
import { format } from "date-fns";

export default function ImageCard({ data }: { data: UnsplashImages }) {
  return (
    <>
      <div className="p-5 rounded-3xl shadow-md bg-white">
        <article key={data.id} className="rounded-3xl">
          <img
            src={data.url}
            alt={data.username}
            className="h-52 object-fit object-cover w-full lg:h-80 rounded-3xl"
          />

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
      </div>
    </>
  );
}
