import React from "react";
import "./Campus.css";
import gallary_1 from "../../Assets/gallary_1.png";
import gallary_2 from "../../Assets/gallary_2.png";
import gallary_3 from "../../Assets/gallary_3.png";
import gallary_4 from "../../Assets/gallary_4.png";
import arrow_forword from "../../Assets/arrow-forword.png";
function Campus() {
  return (
    <div className="campus">
      <div className="gallary">
        <img src={gallary_1} alt="gallary 1" />
        <img src={gallary_2} alt="gallary 2" />
        <img src={gallary_3} alt="gallary 3" />
        <img src={gallary_4} alt="gallary 4" />
      </div>
      <button className="btn dark-btn">
        See more here <img src={arrow_forword} alt="white arrow" />
      </button>
    </div>
  );
}

export default Campus;
