import React from "react";
import popup_frame from "../../Assets/Img/Popup/1232.png";
import line from "../../Assets/Img/Popup/Line.png";
import level_1 from "../../Assets/Img/Popup/1.png";
import level_2 from "../../Assets/Img/Popup/2.png";
import level_3 from "../../Assets/Img/Popup/3.png";
import level_4 from "../../Assets/Img/Popup/4.png";

export const Popup = () => {
  return (
    <>
      <div className="Popup_block">
        <div className="popup_content">
          <h2 className="popup_content_head">HOW IT WORKS</h2>
          <div className="How_work_block">
            <div className="level_1 level">
              <div className="level_img">
                <img src={level_1} alt="level_img" />
              </div>
              <div className="text_level level_1_text">
                <p>
                  Play the chosen game of the competition by hitting “Play
                  Now!”. The competition may have restrictions on the amount of
                  games you play
                </p>
              </div>
            </div>
            <div className="level_2 level">
              <div className="text_level level_2_text">
                <p>
                  Once your game ends your score will be saved and added to the
                  leaderboard. You can track how you’re doing on the leaderboard
                  at any time by checking out the home page.
                </p>
              </div>
              <div className="level_img">
                <img src={level_2} alt="level_img" />
              </div>
            </div>
            <div className="level_3 level">
              <div className="level_img">
                <img src={level_3} alt="level_img" />
              </div>
              <div className="text_level level_3_text">
                <p>
                  Once the competition is over, the prizes will be distributed
                  amongst the winners.
                </p>
              </div>
            </div>

            <div className="level_4 level">
              <div className="text_level level_4_text">
                <p>Enjoy your prize!</p>
              </div>
              <div className="level_img">
                <img src={level_4} alt="level_img" />
              </div>
            </div>

            <div className="line">
              <img src={line} alt="line" />
            </div>
          </div>
          <div className="popup_frame">
            <img src={popup_frame} alt="popup_frame" />
          </div>
        </div>
      </div>
    </>
  );
};
