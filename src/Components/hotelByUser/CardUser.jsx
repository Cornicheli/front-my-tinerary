import React, { useState } from "react";
import { EditCard } from "./EditCard";
import '../../Styles/myHotels.css'

export default function Cards({ name, photo, description, id }) {
  let [push, setPush] = useState(false);

  return (
  <div className="cont-main-myhotels">
    <div className="main-myhotels">
      <div className="cont-card-myhotels">
        <img className="photo-myhotels" src={photo} alt={name} height="250" />
        <article className="cont-text-myhotels">
          <h4 className="text-title">{name}</h4>
          <p className="text-title">capacity : {description}</p>
          <div className="">
            <button className="button-edit-myhotels" value={id} onClick={() => setPush(!push)}>
              Edit
            </button>
            <button className="button-edit-myhotels">Delete</button>
          </div>
        </article>
      </div>
      {push ? <EditCard id={id} /> : ""}
    </div>
  </div>
  );
}
