import React from "react";
import { Link } from "react-router-dom";
import Headerlogo from "../../Assets/Img/common/header.png";
import { useLocation } from "react-router-dom";

export const LandingPageHeader = () => {
  let location = useLocation();
  if (location.pathname === "/") {
    return (
      <>
        <div className="header_wrapper">
          <header className="landingPage_Header">
            <div className="Headerlogo">
              <Link to="/">
                <img src={Headerlogo} alt="Headerlogo" />
              </Link>
            </div>
          </header>
        </div>
      </>
    );
  } else {
    return null;
  }
};
