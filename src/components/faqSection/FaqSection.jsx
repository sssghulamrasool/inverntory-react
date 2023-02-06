import React from "react";
import "./FaqSection.css";
const FaqSection = () => {
  return (
    <>
      <div className="FAq_wrapper">
        <div className="question_heading">
          <h2>Questions & FeedBack</h2>
        </div>
        <div className="text_section">
          <p>Questions or Feedback</p>

          <input className="form-control" />
        </div>
        <div className="submit_button">
          <button>Submit</button>
        </div>
      </div>
    </>
  );
};

export default FaqSection;
