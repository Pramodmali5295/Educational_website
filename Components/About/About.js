import React from "react";
import "./About.css";
import about_img from "../../Assets/about.png";
import play_icon from "../../Assets/play_icon.png";

function About({ setPlay }) {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="about-img" className="about-img" />
        <img
          src={play_icon}
          alt="play-icon"
          className="play-icon"
          onClick={() => {
            {
              setPlay(true);
            }
          }}
        />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          A university is an institution of higher (or tertiary) education and
          research which awards academic degrees in several academic
          disciplines.
        </p>
        <p>
          University can help students to build their self-confidence and
          independence. Students will have plenty of opportunities to make new
          friends from different countries and backgrounds.{" "}
        </p>
        <p>
          A university, on the other hand, is home to various departments and
          faculties that provide students with all major degrees including
          undergraduate and postgraduate degrees leading to a master's degree or
          a PhD.
        </p>
      </div>
    </div>
  );
}

export default About;
