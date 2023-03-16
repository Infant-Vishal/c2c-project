import React from "react";

const EmailTemplate2 = () => {
  return (
    <div style={{ width: "1200px", border: "1px solid #A3A9B7" }}>
      <div style={{ backgroundColor: "#17BAE0", height: "30px" }}></div>
      <div
        style={{
          padding: "32px",
          font: "normal normal normal 16px/30px Rubik, sans-serif",
          textAlign: "left",
          color: "#1B2027",
        }}
      >
        <span style={{ marginBottom: "44px" }}>Hi, </span>
        <p>
          <span style={{ marginBottom: "44px" }}></span>
          You can find latest Medical News and Journal Updates on Connect2Clinic
          now.
          <br />
          Check update on A new model to predict incidence of lymph node mets in
          PTC cases with T2DM.
        </p>
        <p>
          Click here:{" "}
          <span>
            <a href="https://c2cl.in/w12jnmq">https://c2cl.in/w12jnmq</a>
          </span>
        </p>
        <p>Dr. Demo DoctorA</p>
      </div>
      <div style={{ backgroundColor: "#17BAE0", height: "60px" }}></div>
    </div>
  );
};

export default EmailTemplate2;
