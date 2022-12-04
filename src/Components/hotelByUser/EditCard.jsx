import React from "react";
import { BASE_URL } from "../../api/url";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";


export function EditCard({ id }) {
  const [name, setName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [photo, setPhoto] = useState("");
  let submit = (e) => {
    e.preventDefault();
    let editHotel = {
      name: name,
      capacity: capacity,
      photo: photo,
    };

    axios.patch(`${BASE_URL}/api/hotels/${id}`, editHotel, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      if (res.data.success) {
        Swal.fire({
          title: "Success",
          text: "The Hotel was updated succesfully",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="">
      <form className="formMyHotel" onSubmit={submit}>
        <label className="">
          <p>Hotel Name</p>
          <input
            className=""
            type="text"
            name="name"
            onChange={(e) => (setName(e.target.value))}
            min="3"
            placeholder="New Name"
          />
        </label>
        <label className="">
          <p>Hotel Capacity</p>
          <input
            className=""
            type="number"
            name="capacity"
            onChange={(e) => (setCapacity(e.target.value))}
            min="1"
            placeholder="New Capacity"
          />
        </label>
        <label className="">
          <p>Urls Photos</p>
          <input className="" onChange={e=> setPhoto(e.target.value)} type="url" name="photo" placeholder="New Image" />
        </label>
        <div className="">
          <input className="btn-update" type="submit" value="Update Hotel" />
        </div>
      </form>
    </div>
  );
}