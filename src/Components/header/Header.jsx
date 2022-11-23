import React from "react"
import '../../Styles/header.css'
import {ButtonNav} from '../buttonNav/ButtonNav'
import {ButtonNav1} from '../buttonNav/ButtonNav1'
import {ButtonNav2} from '../buttonNav/ButtonNav2'

function Header() {
        return(
        <>
        <header className="main-nav-header">
                <div className="buton-nav-header">
                    <h2 className="title">Pages</h2>
                    <ButtonNav1 n4="Hotels" n5="Home"/>
                </div>
                <div className="buton-nav-header">
                    <h2 className="title">Add a new City or Hotel !</h2>
                    <ButtonNav2 n7="New Hotel" n9="My Hotels" />
                </div>
                <div className="buton-nav-header">
                    <h2 className="title">Login - Register</h2>
                    <ButtonNav n1="Sign In" n2="Sign Up"/>
                </div>
        </header>
        </>
        )
}
export { Header }