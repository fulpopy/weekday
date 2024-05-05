import React, { useState } from "react";
import JobCard from "./JobCard";
import { useEffect, useContext } from "react";
import { FiltersContext } from "../Context/FiltersProvider";
import { CircularProgress, styled } from "@mui/material";
import { getJobs } from "../server/api";

const StyledImage = styled("img")({
  height: "180px",
});

const JobCardArea = () => {
  const [jobs, setJobs] = useState([]);
  const [jobData, setJobData] = useState([]);
  const [offset, setOffset] = useState(0);
  const getJobData = async () => {
    let res = await getJobs();
    setJobData((prev) => [...prev, ...res]);
    setJobs((prev) => [...prev, ...res]);
  };
  console.log(jobData);
  useEffect(() => {
    getJobData(offset);
  }, [offset]);
  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setOffset((prevPage) => prevPage + 10);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const {
    roles,
    numOfEmployees,
    experienceYear,
    workingMode,
    minimumPay,
    companyName,
  } = useContext(FiltersContext);
  // useEffect(() => {
  //   console.log("useEffect");
  //   const filterJobHelper = () => {
  //     const r = roles.map((ele) => ele.title.toLowerCase());
  //     const filteredJobs = jobData.filter((ele, index) => {
  //       for (let i = 0; i < r.length; i++) {
  //         if (r[i] !== jobData[index].jobRole.toLowerCase()) return false;
  //       }
  //       return true;
  //     });
  //     setJobs(filteredJobs);
  //     // console.log(filteredJobs);
  //   };
  //   filterJobHelper();
  // }, [
  //   roles,
  //   numOfEmployees,
  //   experienceYear,
  //   workingMode,
  //   minimumPay,
  //   companyName,
  // ]);
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          margin: "80px 80px 50px 80px",
        }}
      >
        {jobs.map((e) => (
          <div style={{ margin: "15px" }}>
            <JobCard job={e} />
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "50px",
        }}
      >
        <CircularProgress />
      </div>
      {jobs.length === 0 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            //   backgroundColor: "pink",
            height: "40vh",
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
      )}
    </>
  );
};

export default JobCardArea;
