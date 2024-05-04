import { Button } from "@mui/material";
import React from "react";

const AppliedJobs = ({ toggleSerachJobs }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          //   backgroundColor: "pink",
          height: "90vh",
        }}
      >
        <div style={{ fontSize: "1.5rem", color: "#015368", padding: ".5em" }}>
          You have not applied for any jobs yet.
        </div>
        <div style={{ marginTop: "15px" }}>
          <img
            src="https://jobs.weekday.works/_next/static/media/404.4e876391.png"
            alt="no jobs applied"
          />
        </div>
        <Button
          onClick={() => toggleSerachJobs(true)}
          sx={{ marginTop: "25px", fontSize: "16px" }}
          variant="outlined"
        >
          Apply For Jobs
        </Button>
      </div>
    </>
  );
};

export default AppliedJobs;
