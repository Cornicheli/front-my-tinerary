import axios from 'axios';
import './NewComment.css'
import { React } from 'react';
import { BASE_URL } from '../../api/url';
import { useRef } from 'react';
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux';
import commentAction from '../../redux/actions/commentAction';
import './NewComment.css'

export default function NewComments(prop) {
    const { id } = prop
    const commentRef = useRef()
    const dateRef = useRef(new Date())
    const showIdRef = useRef(id)
    const formRef = useRef()
    let dispatch = useDispatch();
    let { getCommentss } = commentAction;
    let token = useSelector((store) => store.loginReducer.token)

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
            console.log(dataComment)
            try{
                let res = await axios.post(`${BASE_URL}/api/comments/`, dataComment, {headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                })  
                if(res.data.success){
                    formRef.current.reset()
                    dispatch(getCommentss(id));
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
            {token.logged ?
            <form ref={formRef}  onSubmit={submit}>
                <h2 className='text-center'>Add a new comment</h2>
                <textarea className='textarea' cols="30" rows="10" placeholder='Write a review...' ref={commentRef}></textarea>
                <div className='btns-textarea'>
                <button className='btn-newCom' type="reset"><img className="img-delete-newcomment" src="https://cdn.icon-icons.com/icons2/1367/PNG/512/32officeicons-3_89720.png" alt=""/></button>
                <button className='btn-newCom'><img className="img-send-newcomment" src="https://cdn.icon-icons.com/icons2/2018/PNG/512/friends_link_send_share_icon_123609.png" alt="" /></button>
                </div>
            </form> : null }
            
        </div>
    ) 
    }