import React from "react";

export const ModalDetailsCard = ({ hotelId, handleCloseModal, hotelTitle, hotelImage, hotelCapacity }) => {
      console.log('=>>>', hotelImage)

      return (
            <div
                  className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            >
                  <div
                        className="w-2/6 bg-slate-800 z-50 relative rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                        key={hotelId}
                  >
                        <div
                              className="absolute right-1 top-1 h-7 w-7 cursor-pointer select-none rounded-full bg-black text-center font-sans text-xs font-bold uppercase text-white shadow-md hover:shadow-lg"
                              onClick={handleCloseModal}
                        >
                              X
                        </div>
                        <section className="w-full">
                              <figure className=" w-full h-96 rounded-t-lg">
                                    <img
                                          className="w-full h-full rounded-t-lg"
                                          src={hotelImage}
                                          alt="photo hotel"
                                    />
                              </figure>
                              <p className="text-white text-center h-20 text-lg">{hotelTitle}</p>
                        </section>

                  </div>
            </div>
      )
}