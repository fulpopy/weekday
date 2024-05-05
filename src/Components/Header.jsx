import React from "react";

const Header = ({ toggleSerachJobs, searchJobs }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "10vh",
        fontSize: "17px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          margin: "0 10px",
          padding: "10px 10px 5px 10px",
          borderBottom: !searchJobs && "1px solid #3522e2",
          cursor: "pointer",
        }}
        onClick={() => toggleSerachJobs(false)}
      >
        Applied Jobs
      </div>
      <div
        style={{
          margin: "0 10px",
          padding: "10px 10px 5px 10px",
          borderBottom: searchJobs && "1px solid #3522e2",
          cursor: "pointer",
        }}
        onClick={() => toggleSerachJobs(true)}
      >
        Serach Jobs
      </div>
    </div>
  );
};

export default Header;
