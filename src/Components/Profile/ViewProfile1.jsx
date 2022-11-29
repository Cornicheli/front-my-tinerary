import SeeProfile from './components/SeeProfile';
import { NavLink } from 'react-router-dom'
import './style/ViewProfile1.css'
import { useState } from 'react';
import axios from 'axios';
import {BASE_URL} from '../../api/url'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function ViewProfile1() {
    const [user, setUser] = useState([])
    let token = useSelector((store) => store.loginReducer.token)
    console.log(token)
    useEffect(() => {
        return async function fetchdata() {
            await axios.get(`${BASE_URL}/api/auth/me/${token.id}`).then(res => {
                let userdata = res.data.response
                setUser(userdata)
            })
        }
    }, [])
    return (
        <div className='main-profile'>
            <div className="profile-card">
                <div className="col-1-pc">
                    <div className="col-1-profile">
                        <div>
                            <img className="profile-pic" src={`${user.photo}`} alt="profile-pic" />
                        </div>
                        <div className="profile-name">
                            <h2>{`${user.name}`}</h2>
                        </div>
                        <div className="col-1-links">
                            <NavLink to={"./"}>Profile</NavLink>
                            <hr width="65" />
                            <NavLink to={"./edit"}>Edit Profile</NavLink>
                        </div>
                    </div>
                </div>
                <div className="col-2-pc">
                    <SeeProfile />
                </div>
            </div>
        </div>
    );
}