import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../api/url";
import Cards from "../Components/MyShows/ShowCards";
import '../Styles/myShows.css'

export default function MyShows() {
  let [show, setShow] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/myshows?userId=636f39a6a1681cf2906114a5`)
      .then((res) => setShow(res.data.response))
      .catch((err) => err.message);
  }, []);

  return (
      <>
      <div className="body-show">
      <div className="title-show">
        <h1>My Shows</h1>
      </div>
      <div className="cards-shows">
      {show.length > 0 ? (
        show.map(iteracion => (
          <Cards
            name={iteracion.name}
            photo={iteracion.photo}
            description={iteracion.description}
            id={iteracion._id}
          />
        ))
      ) : (
        <h2 className="title2">Shows not found</h2>
      )}
      </div>
      </div>
    </>
  );
}
