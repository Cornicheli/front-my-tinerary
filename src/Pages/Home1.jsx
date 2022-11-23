import React from 'react'
import '../Styles/home1.css';
import { Link as NavLink } from "react-router-dom";


export default function Home1() {
return (
    <>
        <main className="body-home1-forro-del-orto">
            <div>
                <h1>Turisfront</h1>
            </div>
            <div className='box-botom'>
                <NavLink to='/hotels'>
                    <button className='botom-home1'>Hotel</button>
                </NavLink>
            </div>
        </main>
    </>
)
}
