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
      <article className="cont-info-show">
        <h4 className="text-title">{name}</h4>
        <p className="text-title">Capacity: {description}</p>
        <div>
          <button
            className="button-edit-myhotels"
            value={id}
            onClick={() => setPush(!push)}
          >
            Edit
          </button>
          <button
            className="button-edit-myhotels"
            value={id}
            onClick={(e) => deleteIt(id)}
          >
            Delete
          </button>
        </div>
      </article>
      {push ? <EditCard id={id} /> : undefined}
    </div>
  );
}
