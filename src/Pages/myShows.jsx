import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../api/url";
import Cards from "../Components/MyShows/ShowCards";
import '../Styles/myShows.css'
import { useSelector } from 'react-redux';

export default function MyShows() {
  let [show, setShow] = useState([]);
  let token = useSelector((store) => store.loginReducer.token)
  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/myshows?${token.id}`)
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
