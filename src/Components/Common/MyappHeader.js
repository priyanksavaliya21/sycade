import React from "react";
import { Link } from "react-router-dom";
import Headerlogo from "../../Assets/Img/common/header.png";
import Headerlogo_mobile from "../../Assets/Img/UserPage/Logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";

export const MyappHeader = () => {
  let location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === "/") {
    return null;
  } else {
    return (
      <div className="header_wrapper">
        <header className="MyappHeader">
          <Container className="MyappHeader_container">
            <div className="MyappHeader_logo">
              <Link to="/myapp/userpage">
                <img src={Headerlogo} alt="MyappHeader_logo" />
              </Link>
            </div>
            <div className="MyappHeader_logo_mobile">
              <Link to="/myapp/userpage">
                <img src={Headerlogo_mobile} alt="MyappHeader_logo_mobile" />
              </Link>
            </div>
            {location.pathname === "/myapp/adminpage" ? (
              <>
                <div className="title_for_page show_hide">
                  <h1>Admin Page</h1>
                </div>
              </>
            ) : null}
            <div className="right_block_Header">
              <button className="logout_btn" onClick={() => navigate("/")}>
                LOG OUT
              </button>
            </div>
          </Container>
        </header>
      </div>
    );
  }
};
