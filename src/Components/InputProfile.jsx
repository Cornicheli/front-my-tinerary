import React from "react";

export const InputProfile = ({ title, value, type }) => {
      return (
            <label className="font-semibold text-sm text-gray-400 pb-1 flex items-center flex-col w-60 m-1.5 hover:none">
                  {title}
                  <input
                        className="border rounded-lg px-4 py-3 mt-1 mb-1.5 text-sm w-full bg-gray-800 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 hover:none"
                        type="text" value={value} />
            </label>
      )
}