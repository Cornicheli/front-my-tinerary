import React from "react";
import { BASE_URL } from "../../api/url";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import "../../Styles/myShows.css";

export function EditCard({ id }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  let submit = (e) => {
    e.preventDefault();
    let editShow = {
      name: name,
      description: description,
      photo: photo,
    };

    axios.patch(`${BASE_URL}/api/shows/${id}`, editShow).then((res) => {
      if (res.data.success) {
        Swal.fire({
          title: "Success",
          text: "The Show was updated succesfully",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <form className="form-shows" onSubmit={submit}>
        <label>
          <p>Show Name</p>
          <input
            className=""
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            min="3"
            placeholder="New Name"
          />
        </label>
        <label className="">
          <p>Show Description</p>
          <input
            type="text"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            min="3"
            placeholder="New Description"
          />
        </label>
        <label>
          <p>Url Photos</p>
          <input
            className=""
            onChange={(e) => setPhoto(e.target.value)}
            type="url"
            name="photo"
            placeholder="New Image"
          />
        </label>
        <div className="">
          <input className="btn-update" type="submit" value="Update Show" />
        </div>
      </form>
    </div>
  );
}
