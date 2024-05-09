import React, { useState } from "react";
import { EditCard } from "./EditShowCard";
import { useDispatch } from "react-redux";
import myShowAction from "../../redux/actions/myShowAction";
import "../../Styles/myShows.css";
import Swal from "sweetalert2";

export default function Cards({ name, photo, description, id }) {
  let [push, setPush] = useState(false);

  const dispatch = useDispatch();
  function deleteIt(e) {
    Swal.fire({
      title: "Are you sure?",
      text: "This action can't be undone",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#ffff9",
      confirmButtonText: "Yes, delete it.",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Deleted!",
          dispatch(myShowAction.deleteShows(e)),
          "Your file has been deleted."
        );
      }
    });
  }
  return (
    <div className="cont-show">
      <div className="cont-img-show">
        <img className="photo-show" src={photo} alt={name} height="250" />
      </div>
      <article className="flex flex-col items-center justify-between">
        <h4 className="text-title">{name}</h4>
        <p className="text-title">Capacity: {description}</p>
        <div className="grid grid-cols-2 gap-3">
          <button
            value={id} onClick={() => setPush(!push)}
            className="select-none w-40 rounded-xl bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            Edit
          </button>
          <button
            value={id} onClick={(e) => deleteIt(id)}
            className="select-none w-40 rounded-xl bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            Delete
          </button>
        </div>
      </article>
      {push ? <EditCard id={id} /> : undefined}
    </div>
  );
}
