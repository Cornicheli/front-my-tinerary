import React,{useState} from 'react'
import {EditCard} from './EditCard'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import myHotelAction from "../../redux/actions/myHotelAction";
import Swal from "sweetalert2";



export default function Cards({name, photo, description,id, erase}) {
    
  let [push, setPush] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  function deleteIt(e) {
  Swal.fire({
      title: 'Are you sure?',
      text: "This action can't be undone",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#ffff9',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
            'Deleted!',
            dispatch(myHotelAction.deleteHotels(e)),
          'Your file has been deleted.',
          navigate("/myhotels")
        )
      }
    })
}

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
            <button className="button-edit-myhotels" value={id} onClick={e=> deleteIt(id)}>Delete</button>
          </div>
        </article>
      </div>
      {push ? <EditCard id={id} /> : ""}
    </div>
  </div>
  );
}

