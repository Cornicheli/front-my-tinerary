import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../Styles/detailsHotel.css";
import axios from "axios";

export default function DetailsHotel() {
  let [hotel, setHotel] = useState([]);
  let [shows, setShows] = useState([]);

  let { idh } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/hotels/${idh}`)
      .then((res) => setHotel(res.data.data))
      .catch((error) => console.log(error));

    axios
      .get(`http://localhost:8000/api/shows?hotelId=${idh}`)
      .then((res) => setShows(res.data.response))
      .catch((error) => console.log(error));
  }, [idh]);
  console.log(shows);
  if (hotel.length !== 0) {
    return (
      <>
        <div className="cont-card-hotel">
          <div className="cont-hotel-card">
            <div className="cont-text-hotel">
              <div className="text-hotel">{hotel.name}</div>
            </div>

            <div className="cont-img-hotel">
              <img className="img-hotel" src={hotel.photo[1]} alt="" />
            </div>

            <div className="cont-text-hotel">
              <div className="text-hotel">Capacity: {hotel.capacity}</div>
            </div>
          </div>
        </div>
        {shows.map((e) => {
          return (
            <div className="cont-card-hotel">
              <div className="cont-hotel-card">
                <div className="cont-text-hotel">
                  <div className="text-hotel">{e.name}</div>
                </div>

                <div className="cont-img-hotel">
                  <img className="img-hotel" src={e.photo} alt={e.name} />
                </div>

                <div className="cont-text-hotel">
                  <div className="text-hotel">Show: {e.description}</div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
