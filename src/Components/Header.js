import React, { useEffect, useState } from "react";
import nytLogo from "../assets/NewYorkTimes.png";
import dateTime from "../Js/date";
import "./Header.css";
import weatherChannel from "../Js/Weathertemp";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        {dateTime()}
        <p>Today's Paper</p>
      </div>
      <div className="logo">
        <img src={nytLogo} alt="NytLogo" />
      </div>
      <div className="header__right">{weatherChannel()}</div>
    </div>
  );
}

export default Header;
