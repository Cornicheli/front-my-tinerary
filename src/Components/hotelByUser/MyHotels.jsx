import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../api/url";
import Carduser from "./CardUser";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import '../../Styles/myHotels.css'

export default function MyHotels() {
  let [hotel, setHotel] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    console.log(hotel);
    axios
      .get(`${BASE_URL}/api/myhotels?userId=636f1edc14f79b76f5e442ba`)
      .then((res) => setHotel(res.data.response))
      .catch((err) => err.message);
  }, []);

  let Delete = (e) => {
    let id = e.target.value;
    Swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        Swal("!has been deleted!", {
          icon: "success",
        });
        axios
          .delete(`${BASE_URL}/api/hotels/${id}`)
          .then((res) => setHotel(res.data.response))
          .catch((err) => err.message);
      } else {
        Swal("Your hotel is safe!");
      }
      navigate("/myhotels");
    });
  };
  return (
    <div className="cont-my-hotels">
      <div className="text-title-myhotels">
        <h1>My hotels</h1>
      </div>
      <div className="cont-card-hotels">
        {hotel.length > 0 ? (
          hotel.map((item) => (
            <Carduser
              name={item.name}
              erase={Delete}
              photo={item.photo}
              key={item._id}
              id={item._id}
              description={item.capacity}
            />
          ))
        ) : (
          <h2>Hotels not found</h2>
        )}
      </div>
    </div>
  );
}
