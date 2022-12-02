import React, { useEffect } from "react";
import { useState } from "react";
import './Comments.css'
import axios from "axios";

export default function Comments({idShow}) {
let [mostrarOcultar, setMostrarOcultar] = useState(false);
let hide = () => {
    setMostrarOcultar(!mostrarOcultar);
};
console.log(idShow)
let [getComments, setGetComments] = useState([])
console.log(getComments)
useEffect(()=>{
    axios
    .get(`http://localhost:8000/api/comments?showId=${idShow}`)
    .then((res) => setGetComments(res.data.response))
    .catch((error) => console.log(error));
},[idShow])

return (
    <div className="cont-main-comments">
        {mostrarOcultar ? (
            <>
        {getComments.map((e) => {
        return (
            <div className="cont-coment-1">
                <div className="buttom-see">
                    <h3 onClick={hide}>See less comments</h3>
                </div>
                <div className="cont-coment-2">
                    <div className="coment-img">
                        <img className="photo-comment"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Kho8pBqY0yP1iudgMp6_2YHvRMv79PvoMg&usqp=CAU"alt="logo-profile"/>
                    </div>

                    <div className="cont-info-comment">
                        <h4 className="comment">{e.showId}</h4>
                        <p className="comment">{e.comment}</p>
                    </div>

                    <div className="cont-date-comment">
                        <p>{e.date}</p>
                    </div>
                </div>
            </div>
            )
        })
        }
            </>
        ) : (
            <div className="buttom-see">
                <h3 onClick={hide}>See More Comments</h3>
            </div>
        )}
    </div>
    );
}
