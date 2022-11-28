import React from "react";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../api/url";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import '../../Styles/newShows.css'

export default function NewShowsC() {
  let token = useSelector((store) => store.loginReducer.token);
  const hotelId = useRef();
  const name = useRef();
  const description = useRef();
  const photo = useRef();
  const price = useRef();
  const date = useRef();
  const userId = useRef(token.id);
  const formRef = useRef();
  const [hotelList, setHotelList] = useState([]);

  useEffect(() => {
    return async function fetchdata() {
      await axios.get(`${BASE_URL}/api/myhotels`).then((res) => {
        let data = res.data.response;
        setHotelList(data);
      });
    };
  }, []);

  async function submit(e) {
    e.preventDefault();

    const dataShow = {
      hotelId: hotelId.current.value,
      name: name.current.value,
      description: description.current.value,
      photo: photo.current.value,
      price: price.current.value,
      date: date.current.value,
      userId: userId.current,
    };
    try {
      let res = await axios.post(`${BASE_URL}/api/myshows`, dataShow);
      if (res.data.success) {
        Swal.fire({
          title: "Show was Created succesfully!",
          timer: 1500,
          timerProgressBar: true,
        });
        formRef.current.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "We found an error...",
          text: `Errors: ${res.data.message}`,
        });
      }
    } catch (err) {
      if (
        err.response.data.message ===
        `shows validation failed: hotelId: Cast to ObjectId failed for value "" (type string) at path "hotelId" because of "BSONTypeError"`
      ) {
        Swal.fire({
          icon: "error",
          title: "¡You must select a hotel!",
        });
      }
    }
  }

  return (
    <div class="contenedor-form-shows">
      <form ref={formRef} className="form-new-shows" onSubmit={submit}>
      <label >
        Show name:
        <input className='inputin-show' type='text' id='nameInput' ref={name} />
      </label>
      <label >
        Description:
        <input className='inputin-show' type='text' id='descriptionInput' ref={description}  />
      </label>
      <label >
        Photo:
        <input className='inputin-show' type='number' id='photoInput' ref={photo}  />
      </label>
      <label >
        Price:
        <input className='inputin-show' type='number' id='priceInput' ref={price}  />
      </label>
      <label >
        Date:
        <input className='inputin-show' type='date' id='emailInput' ref={date}  />
      </label>
      <select
                    type="text"
                    placeholder="Hotel ID"
                    className='form__input_show'
                    ref={hotelId}
                >
                <option value="">Choose an Hotel</option>
                    {hotelList.map((hotel) => {
                        return (
                            <option value={hotel._id}>{hotel.name}</option>
                        )
                    })}
                </select>
      <div className='container-submit-show'>
      <input onClick={submit} className="submit-show" type='submit'/>
      </div>
      </form>
    </div>
  );
}