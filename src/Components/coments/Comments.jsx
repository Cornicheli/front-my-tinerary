import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import './Comments.css'
import '../newComment/NewComment.css'
import axios from "axios";
import { BASE_URL } from '../../api/url';
import Swal from 'sweetalert2'
import commentAction from "../../redux/actions/commentAction";



function EditComment(prop) {
    const { id, idShow } = prop
    const commentRef = useRef()
    const dateRef = useRef(new Date())
    const showIdRef = useRef(id)
    const formRef = useRef()
    let dispatch = useDispatch()
    let { getCommentss } = commentAction;

    let [mostrarOcultar, setMostrarOcultar] = useState(false);
    let hide = () => {setMostrarOcultar(!mostrarOcultar);};

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
                showId: idShow,
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
                    dispatch(getCommentss(idShow))
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
            {mostrarOcultar ? ( 
            <>
            <img
            className="img"
            onClick={hide}
            src="https://cdn.icon-icons.com/icons2/1129/PNG/512/morecircularbuttoninterfacesymbolofthreehorizontaldots_79906.png"
            width="45"
            height="30"
            alt="-"
            />
            <form className="form-new-comment" ref={formRef}  onSubmit={submit}>
                <h2 className='text-center-newcomment'>Modify comment</h2>
                <textarea className='textarea' cols="30" rows="10" placeholder='Write a review...' ref={commentRef}></textarea>
                <div className='btns-textarea'>
                <button className='btn-newCom' type="reset"><img className="img-delete-newcomment" src="https://cdn.icon-icons.com/icons2/1367/PNG/512/32officeicons-3_89720.png" alt="" /></button>
                <button className='btn-newCom'><img className="img-send-newcomment" src="https://cdn.icon-icons.com/icons2/2018/PNG/512/friends_link_send_share_icon_123609.png" alt="" /></button>
                </div>
            </form>
        </>
        ) : (
            <img
            className="img"
            onClick={hide}
            src="https://cdn.icon-icons.com/icons2/1129/PNG/512/morecircularbuttoninterfacesymbolofthreehorizontaldots_79906.png"
            width="45"
            height="30"
            alt="-"
            />
        )}
        </div>
    ) 
}


export default function Comments({idShow}) {
    let dispatch = useDispatch()
    let { getCommentss } = commentAction;
    const deleteComments = async (id) =>{            try{
    let res = await axios.delete(`${BASE_URL}/api/comments/${id}`, {headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    })  
    if(res.data.success){
        console.log("succes")
        dispatch(getCommentss(idShow))
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
let commentsData = useSelector((state) => state.commentReducer);
let [mostrarOcultar, setMostrarOcultar] = useState(false);
let hide = () => {
    setMostrarOcultar(!mostrarOcultar);
};
console.log(idShow)
let [getComments, setGetComments] = useState([])
useEffect(() => {
    // console.log("entra en comments ", idShow);
    dispatch(getCommentss(idShow));
}, [getCommentss, idShow]);

return (
    <div className="cont-main-comments ">
        {mostrarOcultar ? (
            <>
        {commentsData[idShow].map((e) => {
            const isMyUser = e.userId === userData.token.id

        return (
            <div className={ isMyUser ? 'cont-coment-1 myuser-comment' : 'cont-coment-1'}>
                <div className="buttom-see">
                    <h3 onClick={hide}>See less comments</h3>
                </div>
                <div className="cont-coment-2">
                    <div className="coment-img">
                        <img className="photo-comment"src="https://avatars.githubusercontent.com/u/107517584?v=4" alt="logo-profile"/>
                    </div>

                    <div className="cont-info-comment">
                        <h4 className="comment-title">Gabriel</h4>
                        <p className="comment">{e.comment}</p>
                    </div>

                    <div className="cont-date-comment">
                        <p>{e.date}</p>
                    </div>
                </div>
                {isMyUser &&  <EditComment id={e._id} idShow={idShow}/>}      
                { isMyUser && <button className="btn-comment-delete" onClick={() => deleteComments(e._id)}>Delete</button> }
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