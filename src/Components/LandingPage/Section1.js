import React from "react";
import { useNavigate } from "react-router-dom";
import lock from "../../Assets/Img/LandingPage/locknew.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export const Section1 = () => {
  const navigate = useNavigate();
  return (
    <div className="landingPage_section1">
      <Container>
        <Row>
          <Col>
            <div className="lock_img_block">
              <a href="#0">
                <img src={lock} alt="lock" />
              </a>
            </div>
          </Col>
          <Col>
            <div className="text_block">
              <p>
                This competition is locked for members of MVHQ only. You must be
                a member ofthe server and have the “Member” role.
              </p>
            </div>
          </Col>
          <Col>
            <div className="LandingPagebtn">
              <button onClick={() => navigate("/myapp/userpage")}>
                <span>
                  <svg
                    width="101"
                    height="93"
                    viewBox="0 0 101 93"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="50.8067"
                      cy="42.7311"
                      r="23.9152"
                      fill="white"
                      fillOpacity="0.06"
                    />
                    <g filter="url(#filter0_d_95_1534)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M45.4094 30.6301C43.7374 30.9798 42.074 31.4927 40.5057 32.142L39.6171 32.51L39.1739 33.2047C36.7317 37.0332 35.3136 41.0056 34.8483 45.3223C34.7318 46.4023 34.6965 48.983 34.782 50.1648L34.835 50.8984L35.5051 51.3654C37.5311 52.7771 39.818 53.9343 42.1386 54.7221C42.5825 54.8728 42.9581 54.9961 42.9731 54.9961C43.0233 54.9961 44.0498 53.4 44.3456 52.862C44.5061 52.5701 44.6293 52.2931 44.6193 52.2463C44.6094 52.1995 44.3042 52.0334 43.941 51.8771C43.0626 51.4992 42.0546 50.9615 42.0546 50.871C42.0546 50.8309 42.1827 50.6932 42.3393 50.5649L42.624 50.3315L43.2983 50.6136C48.1518 52.6441 53.3062 52.669 58.1032 50.6853C58.8521 50.3756 58.9421 50.3519 59.0598 50.4332C59.3827 50.6559 59.5528 50.8303 59.5118 50.8965C59.4406 51.0117 58.4372 51.5367 57.6524 51.8692C57.2529 52.0385 56.9156 52.1874 56.9029 52.2001C56.8375 52.2654 58.4166 54.856 58.5855 54.9604C58.6166 54.9796 59.02 54.8659 59.4819 54.7078C61.9874 53.8498 63.9881 52.8186 66.4349 51.1239C66.5808 51.0229 66.7142 50.8978 66.7314 50.8459C66.7486 50.794 66.795 50.1998 66.8344 49.5254C67.1494 44.1525 65.7756 38.7137 62.9159 34.0114C61.9824 32.4766 62.0499 32.5489 61.231 32.2033C59.4984 31.472 57.193 30.7824 55.5578 30.5062L55.3213 30.4663L54.9027 31.3182C54.5512 32.0338 54.4617 32.1701 54.3435 32.1701C54.2661 32.1701 53.8251 32.1232 53.3635 32.0659C52.1951 31.9208 49.3827 31.9203 48.2267 32.065C47.7652 32.1228 47.3242 32.1701 47.2468 32.1701C47.1286 32.1701 47.0392 32.0341 46.689 31.3212C46.4596 30.8543 46.2356 30.4748 46.1912 30.4778C46.1468 30.4809 45.795 30.5494 45.4094 30.6301ZM46.6039 40.967C47.3796 41.3406 48.0164 42.1365 48.2465 43.0198C48.2994 43.2231 48.3427 43.6322 48.3427 43.9289C48.3427 44.8576 48.0654 45.6209 47.505 46.2346C46.857 46.9443 46.1834 47.2332 45.2869 47.1862C44.8454 47.163 44.6949 47.1236 44.2974 46.9271C42.1116 45.8468 41.9615 42.4642 44.0401 41.1262C44.5309 40.8103 44.8875 40.721 45.5759 40.7417C46.1023 40.7575 46.2246 40.7844 46.6039 40.967ZM57.2938 40.967C58.0635 41.3378 58.6768 42.0993 58.9401 43.0115C59.0935 43.5428 59.0444 44.6947 58.8465 45.2079C58.3492 46.4979 57.2563 47.2534 55.9839 47.1866C55.2895 47.1501 54.7573 46.8978 54.2159 46.3486C52.5293 44.6373 53.1519 41.6173 55.3532 40.8316C55.5932 40.7459 55.8111 40.7239 56.2658 40.7393C56.7892 40.7571 56.9165 40.7854 57.2938 40.967Z"
                        fill="#F5E6BD"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_95_1534"
                        x="0.73468"
                        y="0.466309"
                        width="100.144"
                        height="92.5298"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="17" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.960784 0 0 0 0 0.901961 0 0 0 0 0.741176 0 0 0 0.2 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_95_1534"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_95_1534"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </span>
                <p>Login with Discord</p>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
