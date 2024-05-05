import React from "react";
import FilterBar from "../Components/FilterBar";
import { styled } from "@mui/material";
import JobCard from "../Components/JobCard";

const StyledImage = styled("img")({
  height: "180px",
});

const SearchJobs = () => {
  return (
    <div>
      <FilterBar />
      <JobCard />
      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          //   backgroundColor: "pink",
          height: "80vh",
        }}
      >
        
        <StyledImage
          src="https://jobs.weekday.works/_next/static/media/nothing-found.4d8f334c.png"
          alt="no jobs found"
        />
        <div
          style={{
            margin: "20px 0px 0px",
            fontSize: "1.2rem",
            lineHeight: "1.5",
            fontWeight: "700",
          }}
        >
          No Jobs available for this category at the moment
        </div>
      </div> */}
    </div>
  );
};

export default SearchJobs;
