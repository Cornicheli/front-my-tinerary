import React, { useState } from "react";
import "../../Styles/ButtonNav.css";

function ButtonNav3(props) {
    const {onClick} = props
    let [mostrarOcultar, setMostrarOcultar] = useState(false);
    let hide = () => {
    setMostrarOcultar(!mostrarOcultar);
};

return (
    <div>
    {mostrarOcultar ? (
    <>
        <img
            className="img"
            onClick={hide}
            src="https://cdn-icons-png.flaticon.com/512/3240/3240696.png"
            width="40"
            height="30"
            alt="-"
        />
        <ul className="ul">
        <button onClick = {onClick} className="button-singout">
            SignOut
        </button>
        </ul>
    </>
        ) : (
        <img
            className="img"
            onClick={hide}
            src="https://cdn-icons-png.flaticon.com/512/3240/3240694.png"
            width="40"
            height="30"
            alt="-"
        />
    )}
    </div>
    );
}

export { ButtonNav3 };
