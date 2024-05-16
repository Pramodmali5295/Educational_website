import React from "react";
import msg_icon from "../../Assets/msg_icon.png";
import mail_icon from "../../Assets/mail_icon.png";
import phone_icon from "../../Assets/phone_icon.png";
import add_icon from "../../Assets/add_icon.png";

import "./Contact.css";
function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fe1ba4ea-74a9-4d9d-aebc-12b6f822fd78");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="msg-icon" />
        </h3>
        <p>
          Fell free to reach out through contact form or find our contact
          information below.Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="mail-icon" />
            pramodm200@gmail.com
          </li>
          <li>
            {" "}
            <img src={phone_icon} alt="phone-icon" />
            +91 9503035935
          </li>
          <li>
            {" "}
            <img src={add_icon} alt="add-icon" />
            bavdhan, pune
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Mobile"
            required
          />
          <label>Enter Your Message Here</label>
          <textarea name="message" rows="6" placeholder="Enter Your Message" />
          <button type="submit" className="btn dark-btn">
            Submit Now
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default Contact;
