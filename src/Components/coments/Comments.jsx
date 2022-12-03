import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useSelector} from "react-redux";
import './Comments.css'
import '../newComment/NewComment.css'
import axios from "axios";
import { BASE_URL } from '../../api/url';
import Swal from 'sweetalert2'



function EditComment(prop) {
    const { id } = prop
    const commentRef = useRef()
    const dateRef = useRef(new Date())
    const showIdRef = useRef(id)
    const formRef = useRef()

    async function submit(e) {
        e.preventDefault();
            Swal.fire({
                title: '¿Publish comment?',
                showDenyButton: false,
                showCancelButton: true,
                confirmButtonText: 'Yes, publish it.',
                denyButtonText: `No, i miss something...`,
            }).then((result) => {
                if (result.isConfirmed) {
                    publishComment()
                }
            })
        }
        async function publishComment(){
            const dataComment = {
                showId: id,
                comment: commentRef.current.value,  
                date: new Date(),
            }
            console.log(localStorage.getItem("token"))
            try{
                let res = await axios.put(`${BASE_URL}/api/comments/${id}`, dataComment, {headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                })  
                if(res.data.success){
                    formRef.current.reset()
                return( 
                    Swal.fire('Comment published!', '', 'success')
                    )
                }
                else{
                    Swal.fire(`Errors: ${res.data.message.join(", ")}`)
                }
            }catch(err){
                Swal.fire(`Error. You must be logged in.`)
            }
        }

    return (
        <div className='text-center'>
            <form ref={formRef}  onSubmit={submit}>
                <h2 className='text-center'>Add a new comment</h2>
                <textarea className='textarea' cols="30" rows="10" placeholder='Write a review...' ref={commentRef}></textarea>
                <div className='btns-textarea'>
                <button className='btn-newCom' type="reset">Clean</button>
                <button className='btn-newCom'>Send</button>
                </div>
            </form>
        </div>
    ) 
    }


export default function Comments({idShow}) {
const deleteComments = async (id) =>{            try{
    let res = await axios.delete(`${BASE_URL}/api/comments/${id}`, {headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    })  
    if(res.data.success){
        console.log("succes")
    return( 
        Swal.fire('Comment published!', '', 'success')
        )
    }
    else{
        Swal.fire(`Errors: ${res.data.message.join(", ")}`)
    }
}catch(err){
    Swal.fire(`Error. You must be logged in.`)
}}
let userData = useSelector((state) => state.loginReducer);
console.log(userData.token.id, '<=======')
let [mostrarOcultar, setMostrarOcultar] = useState(false);
let hide = () => {
    setMostrarOcultar(!mostrarOcultar);
};
console.log(idShow)
let [getComments, setGetComments] = useState([])
console.log(getComments, "<======")
useEffect(()=>{
    axios
    .get(`http://localhost:8000/api/comments?showId=${idShow}`)
    .then((res) => setGetComments(res.data.response))
    .catch((error) => console.log(error));
},[idShow])

return (
    <div className="cont-main-comments ">
        {mostrarOcultar ? (
            <>
        {getComments.map((e) => {
            const isMyUser = e.userId === userData.token.id
            console.log(e, '<==')
        return (
            <div className={ isMyUser ? 'cont-coment-1 myuser-comment' : 'cont-coment-1'}>
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
                {isMyUser &&  <EditComment id={e._id}/>}      
                { isMyUser && <button onClick={() => deleteComments(e._id)}>Delete</button> }
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
