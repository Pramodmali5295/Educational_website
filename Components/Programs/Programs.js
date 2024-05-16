import React from "react";
import "./Program.css";
import program_1 from "../../Assets/program_1.png";
//import program_2 from "../../Assets/program_2.png";
//import program_3 from "../../Assets/program_3.png";
import program_icon1 from "../../Assets/program_icon1.png";
import program_icon2 from "../../Assets/program_icon2.png";
import program_icon3 from "../../Assets/program_icon3.png";

function Programs() {
  return (
    <div className="programs ">
      <div className="program">
        <img src={program_1} alt="progarm_1" />
        <div className="caption">
          <img src={program_icon1} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>

      <div className="program">
        <img src={program_1} alt="program_2" />
        <div className="caption">
          <img src={program_icon2} alt="" />
          <p>Master Degree</p>
        </div>
      </div>

      <div className="program">
        <img src={program_1} alt="program_3" />
        <div className="caption">
          <img src={program_icon3} alt="" />
          <p>Post-Graduation Degree</p>
        </div>
      </div>
    </div>
  );
}

export default Programs;
