import React from 'react';
import axios from 'axios';
import { BASE_URL } from '../../api/url'
import { useRef } from 'react';
import Swal from 'sweetalert2'
import '../../Styles/NewHotel.css'

export default function NewHotel() {
    const nameRef = useRef()
    const capacityRef = useRef()
    const photoRef = useRef()
    const userIdRef = useRef()
    const citiIdRef = useRef()

    async function submit(e){
        e.preventDefault();
        const dataHotel ={
            name: nameRef.current.value,
            capacity: capacityRef.current.value,
            photo: photoRef.current.value,
            userId: userIdRef.current.value,
            citiId: citiIdRef.current.value
        }
        try{
            let res = await axios.post(`${BASE_URL}/api/hotels`, dataHotel)
            let res2 = await axios.get(`${BASE_URL}/api/hotels`)
            let hotelCreated = res2.data.response
            if(res.data.success){
                let timerInterval
                Swal.fire({
                  title: 'Hotel was Created succesfully!',
                  html: 'Redirecting to that page in <b></b> miliseconds.',
                  timer: 1500,
                  timerProgressBar: true,
                  didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                      b.textContent = Swal.getTimerLeft()
                    }, 100)
                  },
                  willClose: () => {
                    clearInterval(timerInterval)
                    hotelCreated.filter(e => e.name === dataHotel.name).map(e => window.location.href = `/detailshotels/${e._id}`)
                  }
                }).then((result) => {
                  /* Read more about handling dismissals below */
                  if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                  }
                })
            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'We found an error...',
                    text: `Errors: ${res.data.message.join(', ')}`,
                  })
            }
        }catch(err){
            if(err.response.data.message === `hotels validation failed: userId: Cast to ObjectId failed for value "${dataHotel.userId}" (type string) at path "userId" because of "BSONTypeError"`){
                Swal.fire({
                    icon: 'error',
                    title: 'Error 404',
                    text: 'User ID is invalid. Please try again!',
                  })
            }else if(err.response.data.message === `hotels validation failed: citiId: Cast to ObjectId failed for value "${dataHotel.citiId}" (type string) at path "citiId" because of "BSONTypeError"`){
                Swal.fire({
                    icon: 'error',
                    title: 'Error 404',
                    text: 'City ID is invalid. Please try again!',
                  })
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Error 404',
                    text: 'User ID and City ID are invalid. Please try again!',
                  })
            }
        }
    }
    return (
          <div className='generalContainForm'>
            <div className='formHotel'>
              <form className="formCity" onSubmit={submit}>
                  <div className="form-Citybody">
                      <h1 className='Citytitle'>New Hotel</h1>
                      <h2 className='Citytitle'>Create your hotel card</h2>
                      <input
                          type="text"
                          placeholder="Hotel Name"
                          className='form_input'
                          ref={nameRef}
                      />
                      <input
                          type="text"
                          placeholder="Photo (URL)"
                          className='form_input'
                          ref={photoRef}
                      />
                      <input
                          type="text"
                          placeholder="Capacity"
                          className='form_input'
                          ref={capacityRef}
                      />
                      <input
                          type="text"
                          placeholder="City ID"
                          className='form_input'
                          ref={citiIdRef}
                          />
                      <input
                          type="text"
                          placeholder="Your User ID"
                          className='form_input'
                          ref={userIdRef}
                      />
                      <div className="submit">
                          <button className='submit-newHotel'>Create</button>
                      </div>
                  </div>
              </form>
            </div>
          </div>
    );
};