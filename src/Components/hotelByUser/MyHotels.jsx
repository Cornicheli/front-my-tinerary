import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../api/url";
import Carduser from "./CardUser";
import Swal from "sweetalert2";
import '../../Styles/myHotels.css'
import myHotelAction from "../../redux/actions/myHotelAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


export default function MyHotels() {
  let [hotel, setHotel] = useState([]);
  let token = useSelector((store) => store.loginReducer.token)
  useEffect(() => {
      console.log(hotel);
      axios
          .get(`${BASE_URL}/api/myhotels?${token.id}`) //=userId=
          .then((res) => setHotel(res.data.response))
          .catch((err) => err.message);
  }, []);

  const dispatch = useDispatch()
  function Delete(e) {
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
        )
      }
    })
}

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