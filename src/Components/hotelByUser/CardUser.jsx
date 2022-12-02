import React,{useState} from 'react'
import {EditCard} from './EditCard'

export default function Cards({name, photo, description,id, erase}) {
    
let [push,setPush]= useState(false)

return (
  <div className="cont-main-myhotels">
    <div className="main-myhotels">
      <div className="cont-card-myhotels">
        <img className="photo-myhotels" src={photo} alt={name} height="250" />
        <article className="cont-text-myhotels">
          <h4 className="text-title">{name}</h4>
          <p className="text-title">capacity : {description}</p>
          <div>
            <button className="button-edit-myhotels" value={id} onClick={() => setPush(!push)}>
              Edit
            </button>
            <button onClick={erase} className="button-edit-myhotels">Delete</button>
          </div>
        </article>
      </div>
      {push ? <EditCard id={id} /> : ""}
    </div>
  </div>
  );
}

