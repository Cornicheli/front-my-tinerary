import React from "react";
import { Link } from "react-router-dom";

export const CardHotel = ({
      img,
      imgAlt,
      keyImg,
      title,
      keyTitle,
      keyLink,
      toLink,
      titleLink,
}) => {
      return (
            <div className="relative flex w-[400px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                  <figure className="relative mx-4 my-2 h-52 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-gray-500 to-gray-600">
                        <img
                              key={keyImg}
                              className="rounded-t-lg w-full h-full"
                              src={img}
                              alt={imgAlt}
                        />
                  </figure>
                  <div className="px-4">
                        <h5 className="block h-10 font-sans text-lg font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
                              key={keyTitle}
                        >
                              {title}
                        </h5>
                  </div>
                  <div className="p-4 pt-0">
                        <Link
                              data-ripple-light="true"
                              type="button"
                              className="select-none w-40 rounded-xl bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                              key={keyLink}
                              to={toLink}
                        >
                              {titleLink}
                        </Link>
                  </div>
            </div>
      );
};
