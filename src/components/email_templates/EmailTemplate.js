import React from "react";

const EmailTemplate = () => {
  return (
    <div
      style={{ width: "600px", border: "1px solid #A3A9B7" }}
    >
      <div style={{ backgroundColor: "#17BAE0", height: "30px" }}></div>
      <div>
        <div style={{ margin: "30px 22px" }}>
          <img
            src={require("../../assets/C2C-Logo.png")}
            alt="c2c-image"
            width="194px"
            height="50px"
          />
        </div>
        <div
          style={{
            marginLeft: "30px",
            font: "'Quicksand', sans-serif;",
            textAlign: "left",
            color: "#1B2027",
            opacity: 1,
          }}
        >
          <p>Dear Admin</p>
          <p>
            Dr Jaya Ram Prasad (id: 686984) has requested for the following
            article.
          </p>
          <p>
            <span style={{ color: "#A3A9B7" }}>Article Name: </span>
            What you need to know about the new covid virus if you have asthma.
          </p>
          <p>
            <span style={{ color: "#A3A9B7" }}>Published Date and time: </span>
            June 06, 2022, 12:56 PM
          </p>
          <p>
            <span style={{ color: "#A3A9B7" }}>Journal Specialization: </span>
            Neurology
          </p>
          <p>
            <span style={{ color: "#A3A9B7" }}>Journal Name: </span>
            BMC India
          </p>
          <p>
            <span style={{ color: "#A3A9B7" }}>Doctor Specialization: </span>
            Cardiology
          </p>
          <p>
            <span style={{ color: "#A3A9B7" }}>Doctor Contact: </span>
            +91 78596769797
          </p>
          <p>
            <span style={{ color: "#A3A9B7" }}>Doctor Email Id: </span>
            drjaya@gmail.com
          </p>
          <p>
            <span style={{ color: "#A3A9B7" }}>Requested date and time: </span>
            June 20, 2022, 11:39 AM
          </p>
          <p style={{ marginTop: "32px" }}>Best Regards,</p>
          <p style={{ marginTop: "0px" }}>Team Connect2Clinic</p>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#17BAE0",
          height: "30px",
          marginTop: "24px",
        }}
      ></div>
    </div>
  );
};

export default EmailTemplate;
