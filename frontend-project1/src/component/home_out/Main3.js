import React from "react";
import "../../css/home_out/Main3.css";

const Main3 = () => {
  return (
    <div id="main3">
      <span className="main3-text">
        Subscribe to our newsletter to get the latest updates and healthcare
        tips.
      </span>
      <form>
        <div className="form-group">
          <input type="text" placeholder="Last Name" id="lastname" />
          <input type="text" placeholder="First Name" id="firstname" />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email" id="email" />
        </div>
        <div className="form-group">
          <textarea placeholder="Message" id="message"></textarea>  
        </div>
        <button type="submit" className="btn-submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Main3;
