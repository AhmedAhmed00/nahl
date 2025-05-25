import React from "react";

const Unauthorized = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>403 - Access Denied</h1>
      <p>You do not have permission to view this page.</p>
      <a href="/">Go to Home</a>
    </div>
  );
};

export default Unauthorized;
