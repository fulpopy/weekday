import React, { useEffect, useState, useContext } from "react";
import FilterBar from "../Components/FilterBar";
import { styled } from "@mui/material";
import JobCard from "../Components/JobCard";
import { getJobs } from "../server/api";
import JobCardArea from "../Components/JobCardArea";
import { FiltersContext } from "../Context/FiltersProvider";

const StyledImage = styled("img")({
  height: "180px",
});

const SearchJobs = () => {
  const [jobData, setJobData] = useState([]);
  console.log(jobData);
  useEffect(() => {
    let res;
    const getJobData = async () => {
      res = await getJobs();
      setJobData([...jobData, ...res]);
    };
    getJobData();
  }, []);
  return (
    <div>
      <FilterBar />
      {/* <JobCard /> */}
      {jobData.length === 0 ? (
        <div
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
        </div>
      ) : (
        <JobCardArea jobData={jobData} />
      )}
    </div>
  );
};

export default SearchJobs;
