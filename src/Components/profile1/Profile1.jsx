import React from "react";
import { useSelector } from "react-redux";
import "../../Styles/profile.css";

export default function Profile1() {
  let userProfile = useSelector((state) => state.loginReducer);

  let { photo, name } = userProfile.token;
  return (
    <div className="cont-main-profile">
      <div className="cont-title">
        <h5 className="name-profiel">{name}</h5>
        <div className="cont-img-profile">
          <img className="img-profiel" src={photo} alt={name} />
        </div>
      </div>
    </div>
  );
}
