import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import PACADEbg from "../Assets/Img/UserPage/frame.png";
import prize_block_frame from "../Assets/Img/UserPage/prize.png";
import rocket from "../Assets/Img/UserPage/rocket.png";
import transpertLogo from "../Assets/Img/UserPage/transpertLogo.png";
import status_block_frame from "../Assets/Img/UserPage/status_block_frame.png";
import ProgressBar from "react-customizable-progressbar";
import logoleft1 from "../Assets/Img/UserPage/1.svg";
import logoleft2 from "../Assets/Img/UserPage/2.svg";
import logoleft3 from "../Assets/Img/UserPage/3.svg";
import logoleft4 from "../Assets/Img/UserPage/4.svg";
import Leaderboard_block_frame from "../Assets/Img/UserPage/Leaderboard.png";
import { useNavigate } from "react-router-dom";
import SimpleBar from "simplebar-react";

const Status = ({ Data }) => {
  return (
    <>
      <div className="Col_status">
        <div className="progressbar">
          <ProgressBar
            steps={Data.steps}
            className="status"
            progress={Data.progress}
            radius={100}
            initialAnimation={true}
            initialAnimationDelay={1}
            strokeWidth={4}
            pointerStrokeWidth={4}
            trackStrokeWidth={4}
            strokeColor={"#EBCC75"}
            trackStrokeColor={"#393939"}
            strokeLinecap="round"
            transition="1s ease"
            trackTransition="0.1s ease"
          />
          <p>{Data.progress}</p>
        </div>
        <h4>{Data.text}</h4>
      </div>
    </>
  );
};

const PrizeCard = ({ logoleft, TH, sup }) => {
  return (
    <>
      <div className="prizeCard">
        <div className="prizeCard_cover">
          <div className="prize_content">
            <div className="logoleft">
              <img src={logoleft} alt="logoleft1" />
            </div>
            <div className="prize_text">
              <h3>
                {TH}
                <sup>{sup}</sup>
              </h3>
              <p>Sycade Whitelist</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TableRow = ({ Data }) => {
  return (
    <>
      <tr>
        <td>
          {Data.Rank}
          <sup>{Data.Sup}</sup>
        </td>
        <td>{Data.value}</td>
      </tr>
    </>
  );
};

export const Userpage = () => {
  const navigate = useNavigate();
  const sup = (
    <span>
      2 <sup>Nd</sup>Best Score
    </span>
  );

  var tableData = [
    {
      Rank: 1,
      Sup: "th",
      value: 5000,
    },
    {
      Rank: 2,
      Sup: "nd",
      value: 4500,
    },
    {
      Rank: 3,
      Sup: "rd",
      value: 3500,
    },
    {
      Rank: 4,
      Sup: "th",
      value: 3400,
    },
    {
      Rank: 5,
      Sup: "th",
      value: 0,
    },
    {
      Rank: 6,
      Sup: "th",
      value: 0,
    },
    {
      Rank: 7,
      Sup: "th",
      value: 0,
    },
    {
      Rank: 8,
      Sup: "th",
      value: 0,
    },
  ];

  const ProgressBarData = [
    {
      steps: 5000,
      progress: 5000,
      text: "Best Score",
    },
    {
      steps: 5000,
      progress: 4500,
      text: sup,
    },
    {
      steps: 5000,
      progress: 2500,
      text: "Average Score",
    },
    {
      steps: 2000,
      progress: 1000,
      text: "Worst Score",
    },
    {
      steps: 100,
      progress: 30,
      text: "# of Attempts",
    },
  ];

  const [Total, SetTotal] = React.useState(0);
  const Open = () => {
    document.querySelector(".outer_layer").classList.add("active");
    document.querySelector(".Popup_block ").classList.add("active");
    document.documentElement.classList.add("cm-overflow");
  };

  React.useEffect(() => {
    var base = 0;
    const TotaltableData = tableData.map((e) => (base += e.value));
    const TotaltableDataVal = TotaltableData[TotaltableData.length - 1];
    SetTotal(TotaltableDataVal);
  }, [Total, tableData]);
  return (
    <>
      <div className="main_content Userpage_content">
        <div className="Userpage_sectio1">
          <Container>
            <div className="welcome_text">
              <p>
                Welcome to the Sycade x MVHQ competition room! We have joined
                forces to give you the chance to win Whitelist spots for the
                Sycade Genesis collection by playing the game below!
              </p>
            </div>
            <Row className="Userpage_sectio1_first_row">
              <div className="first_row_left">
                <div className="PAC_ADE">
                  <div className="left_textplay">
                    <h2>PLAY THE PAC-ADE BETA NOW!</h2>
                    <p className="Maximum_Entries">
                      Maximum Entries: Unlimited
                    </p>
                    <p className="Competition_Closing">
                      Competition Closing: 31/07/2022
                    </p>
                    <div className="btn_play_block">
                      <span
                        className="play_now_btn_cover"
                        onClick={() => navigate("/myapp/adminpage")}
                      >
                        <button className="play_now_btn">Play Now</button>
                      </span>
                      <button className="Help_btn" onClick={Open}>
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 51 52"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.2">
                            <path
                              d="M25.4998 4.71462C21.2969 4.71462 17.1884 5.96091 13.6939 8.29589C10.1994 10.6309 7.47569 13.9497 5.86733 17.8326C4.25896 21.7155 3.83814 25.9882 4.65808 30.1103C5.47801 34.2324 7.50188 38.0188 10.4737 40.9906C13.4456 43.9625 17.232 45.9864 21.3541 46.8063C25.4762 47.6263 29.7489 47.2054 33.6318 45.5971C37.5147 43.9887 40.8335 41.265 43.1685 37.7705C45.5035 34.2759 46.7498 30.1675 46.7498 25.9646C46.7498 23.174 46.2001 20.4108 45.1322 17.8326C44.0643 15.2544 42.499 12.9118 40.5258 10.9386C38.5525 8.96536 36.21 7.4001 33.6318 6.33218C31.0536 5.26427 28.2904 4.71462 25.4998 4.71462ZM25.4998 42.9646C22.1375 42.9646 18.8507 41.9676 16.0551 40.0996C13.2594 38.2316 11.0805 35.5766 9.79381 32.4702C8.50712 29.3639 8.17047 25.9458 8.82642 22.6481C9.48237 19.3504 11.1015 16.3213 13.4789 13.9438C15.8564 11.5663 18.8856 9.94722 22.1832 9.29127C25.4809 8.63532 28.899 8.97198 32.0054 10.2587C35.1117 11.5454 37.7668 13.7243 39.6347 16.5199C41.5027 19.3156 42.4998 22.6023 42.4998 25.9646C42.4998 30.4733 40.7087 34.7973 37.5206 37.9854C34.3325 41.1736 30.0084 42.9646 25.4998 42.9646Z"
                              fill="white"
                            />
                            <path
                              d="M25.4998 13.2146C23.5272 13.2146 21.6355 13.9982 20.2406 15.393C18.8458 16.7878 18.0623 18.6796 18.0623 20.6521C18.0623 21.2157 18.2861 21.7562 18.6847 22.1547C19.0832 22.5532 19.6237 22.7771 20.1873 22.7771C20.7508 22.7771 21.2913 22.5532 21.6899 22.1547C22.0884 21.7562 22.3123 21.2157 22.3123 20.6521C22.3123 20.0217 22.4992 19.4054 22.8494 18.8812C23.1997 18.3571 23.6975 17.9485 24.28 17.7073C24.8624 17.466 25.5033 17.4029 26.1216 17.5259C26.7399 17.6489 27.3079 17.9524 27.7537 18.3982C28.1994 18.844 28.503 19.412 28.626 20.0303C28.749 20.6486 28.6859 21.2895 28.4446 21.8719C28.2034 22.4544 27.7948 22.9522 27.2706 23.3024C26.7465 23.6527 26.1302 23.8396 25.4998 23.8396C24.9362 23.8396 24.3957 24.0635 23.9972 24.462C23.5986 24.8605 23.3748 25.401 23.3748 25.9646V30.2146C23.3748 30.7782 23.5986 31.3187 23.9972 31.7172C24.3957 32.1157 24.9362 32.3396 25.4998 32.3396C26.0633 32.3396 26.6038 32.1157 27.0024 31.7172C27.4009 31.3187 27.6248 30.7782 27.6248 30.2146V27.7496C29.342 27.2481 30.82 26.1428 31.7865 24.6374C32.753 23.132 33.1428 21.328 32.884 19.5579C32.6252 17.7878 31.7353 16.1708 30.3783 15.0051C29.0213 13.8394 27.2887 13.2035 25.4998 13.2146Z"
                              fill="white"
                            />
                            <path
                              d="M25.4998 38.7146C26.6734 38.7146 27.6248 37.7632 27.6248 36.5896C27.6248 35.416 26.6734 34.4646 25.4998 34.4646C24.3262 34.4646 23.3748 35.416 23.3748 36.5896C23.3748 37.7632 24.3262 38.7146 25.4998 38.7146Z"
                              fill="white"
                            />
                          </g>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="right_logoplay">
                    <img src={rocket} alt="right_logoplay" />
                  </div>
                  <div className="pac_btn_block">
                    <button className="pac_btn">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 247 82"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M224.877 80.5153H21.8388L0.871094 59.5081V21.5224L21.8388 0.515259H224.877L245.871 21.5153V59.5153L224.877 80.5153Z"
                          fill="#2C1019"
                          stroke="url(#paint0_linear_1_1918)"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_1_1918"
                            x1="0.248691"
                            y1="89.697"
                            x2="154.41"
                            y2="89.697"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#EBCC75" />
                            <stop
                              offset="0.421875"
                              stopColor="#EBCC75"
                              stopOpacity="0.7"
                            />
                            <stop
                              offset="0.661458"
                              stopColor="#F29B9B"
                              stopOpacity="0.67"
                            />
                            <stop offset="0.953125" stopColor="#F29B9B" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <p>Pac-Ade</p>
                    </button>
                  </div>
                  <div className="background_PAC_ADE">
                    <img src={PACADEbg} alt="background_PAC_ADE" />
                  </div>
                  <img
                    src={transpertLogo}
                    className="transpertLogo"
                    alt="transpertLogo"
                  />
                </div>
              </div>
              <div className="first_row_right">
                <div className="status_block">
                  <div className="status_head">
                    <h2>Your Stats</h2>
                  </div>
                  <div className="Row_Ststus">
                    {ProgressBarData.map((Data) => (
                      <Status Data={Data} key={Data.progress} />
                    ))}
                  </div>
                  <div className="status_block_frame">
                    <img src={status_block_frame} alt="status_block_frame" />
                  </div>
                </div>
              </div>
            </Row>
            <Row className="Userpage_sectio1_second_row">
              <div className="second_row_left">
                <div className="prize_block">
                  <h3 className="prize_block_head">Prize</h3>
                  <SimpleBar className="prize_slide">
                    <div className="prize_slide_row">
                      <PrizeCard logoleft={logoleft1} TH={1} sup={"TH"} />
                      <PrizeCard logoleft={logoleft2} TH={2} sup={"ND"} />
                      <PrizeCard logoleft={logoleft3} TH={3} sup={"RD"} />
                      <PrizeCard logoleft={logoleft4} TH={4} sup={"TH"} />
                    </div>
                  </SimpleBar>
                  <div className="prize_block_frame">
                    <img src={prize_block_frame} alt="prize_block" />
                  </div>
                </div>
              </div>
              <div className="second_row_right">
                <div className="Leaderboard_block">
                  <div className="Leaderboard_block_head_block">
                    <h3 className="Leaderboard_block_head">Leaderboard</h3>
                  </div>
                  <div className="Leaderboard_table_parent">
                    <SimpleBar className="Leaderboard_table">
                      <table>
                        <tbody>
                          {tableData.map((Data) => {
                            return (
                              <>
                                <TableRow key={Data.value} Data={Data} />
                              </>
                            );
                          })}
                        </tbody>
                      </table>
                    </SimpleBar>
                    <div className="your_score_block">
                      <div className="your_score_Data">Your Score</div>
                      <div className="your_score_Data">{Total}</div>
                    </div>
                  </div>
                  <div className="Leaderboard_block_frame">
                    <img
                      src={Leaderboard_block_frame}
                      alt="Leaderboard_block_frame"
                    />
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};
