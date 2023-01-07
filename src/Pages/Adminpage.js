import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import score_poster1 from "../Assets/Img/AdminPage/1.png";
import score_poster2 from "../Assets/Img/AdminPage/2.png";
import score_poster3 from "../Assets/Img/AdminPage/3.png";
import score_poster4 from "../Assets/Img/AdminPage/4.png";
import score_poster5 from "../Assets/Img/AdminPage/5.png";
import Score_table_frame from "../Assets/Img/AdminPage/Score_table_frame.png";
import SimpleBar from "simplebar-react";
export const Score = ({ Data }) => {
  return (
    <>
      <div className="score_content">
        <div className="score_poster">
          <img src={Data.bgimg} alt="score_poster" />
          <p>{Data.score}</p>
        </div>
        <h3 className="score_title">{Data.scoreText}</h3>
      </div>
    </>
  );
};

export const AdminTable = ({ Data }) => {
  return (
    <>
      <tr>
        <td>
          <span>
            {Data.Rank}
            <sup>{Data.Sup}</sup>
          </span>
        </td>
        <td>{Data.user}</td>
        <td>{Data.value}</td>
      </tr>
    </>
  );
};

export const HeadBtn = ({ Text }) => {
  return (
    <>
      <button className="Card_top_block_btn">
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
              <stop stop-color="#EBCC75" />
              <stop offset="0.421875" stopColor="#EBCC75" stopOpacity="0.7" />
              <stop offset="0.661458" stopColor="#F29B9B" stopOpacity="0.67" />
              <stop offset="0.953125" stopColor="#F29B9B" />
            </linearGradient>
          </defs>
        </svg>
        <p>{Text}</p>
      </button>
    </>
  );
};

export const Adminpage = () => {
  const ScoreData = [
    {
      id: 1,
      bgimg: score_poster1,
      score: 5100,
      scoreText: "HIGHEST SCORE",
    },
    {
      id: 2,
      bgimg: score_poster2,
      score: 150,
      scoreText: "LOWER SCORE",
    },
    {
      id: 3,
      bgimg: score_poster3,
      score: 2345,
      scoreText: "AVERAGE SCORE",
    },
    {
      id: 4,
      bgimg: score_poster4,
      score: 340,
      scoreText: "# PLAYS",
    },
    {
      id: 5,
      bgimg: score_poster5,
      score: 75,
      scoreText: "# PLAYERS",
    },
  ];

  var tableData = [
    {
      Rank: 1,
      Sup: "th",
      value: 5000,
      user: "Bendav371#0001",
    },
    {
      Rank: 2,
      Sup: "nd",
      value: 4999,
      user: "Bendav371#0001",
    },
    {
      Rank: 3,
      Sup: "rd",
      value: 4000,
      user: "Bendav371#0001",
    },
    {
      Rank: 4,
      Sup: "th",
      value: 2500,
      user: "Bendav371#0001",
    },
    {
      Rank: 5,
      Sup: "th",
      value: 2500,
      user: "Bendav371#0001",
    },
    {
      Rank: 6,
      Sup: "th",
      value: 2467,
      user: "Bendav371#0001",
    },
    {
      Rank: 7,
      Sup: "th",
      value: 2100,
      user: "Bendav371#0001",
    },
    {
      Rank: 8,
      Sup: "th",
      value: 2200,
      user: "Bendav371#0001",
    },
  ];

  return (
    <>
      <div className="main_content Adminpage_content">
        <div className="Adminpage_sectio1">
          <Container>
            <div className="title_for_page title_for_page_mobile">
              <h1>Admin Page</h1>
            </div>
            <div className="Score_block">
              <Row className="Adminpage_sectio1_first_row">
                {ScoreData.map((Data) => {
                  return (
                    <>
                      <div className="Score_Col">
                        <Score Data={Data} key={Data.id} />
                      </div>
                    </>
                  );
                })}
              </Row>
            </div>
            <div className="score_table_Row">
              <div className="score_table_block">
                <SimpleBar className="admin_table">
                  <table>
                    <tbody>
                      {tableData.map((Data) => {
                        return (
                          <>
                            <AdminTable Data={Data} />
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </SimpleBar>
                <div className="Score_tbl_frame">
                  <img src={Score_table_frame} alt="Score_table_frame" />
                </div>
                <div className="Card_top_block">
                  <HeadBtn Text={"POSITION"} />
                  <HeadBtn Text={"USER"} />
                  <HeadBtn Text={"SCORE"} />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};
