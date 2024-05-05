import React, { useState, useEffect, useContext } from "react";
import JobCard from "./JobCard";
import { CircularProgress, styled } from "@mui/material";
import { getJobs } from "../server/api";
import { FiltersContext } from "../Context/FiltersProvider";

const StyledImage = styled("img")({
  height: "180px",
});

const JobCardArea = () => {
  const [jobs, setJobs] = useState([]);
  const [jobData, setJobData] = useState([]);
  const [offset, setOffset] = useState(0);
  const {
    roles,
    numOfEmployees,
    experienceYear,
    workingMode,
    minimumPay,
    companyName,
  } = useContext(FiltersContext);

  const getJobData = async (offset) => {
    let res = await getJobs(offset);
    setJobData((prev) => [...prev, ...res]);
  };

  useEffect(() => {
    getJobData(offset);
  }, [offset]);

  useEffect(() => {
    const filteredJobs = jobData.filter(filterJobs);
    setJobs(filteredJobs);
  }, [jobData, roles, experienceYear, workingMode, minimumPay, companyName]);

  function filterJobs(job) {
    if (
      roles.length > 0 &&
      !roles.some(
        (role) => role.title.toLowerCase() === job.jobRole.toLowerCase()
      )
    ) {
      return false;
    }
    if (
      experienceYear.length > 0 &&
      !experienceYear.some((year) => parseInt(year.title) <= job.minExp)
    ) {
      return false;
    }
    if (
      workingMode.length > 0 &&
      !workingMode.some(
        (mode) => mode.title.toLowerCase() === job.location.toLowerCase()
      )
    ) {
      return false;
    }
    if (
      minimumPay.length > 0 &&
      !minimumPay.some((pay) => parseInt(pay.title) <= job.minJdSalary)
    ) {
      return false;
    }
    if (
      companyName &&
      companyName.toLowerCase() !== job.companyName.toLowerCase()
    ) {
      return false;
    }
    return true;
  }

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

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "90%",
            display: "flex",
            flexWrap: "wrap",
            margin: "60px 50px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {jobs.map((job) => (
            <div style={{ margin: "15px" }} key={job.id}>
              <JobCard job={job} />
            </div>
          ))}
        </div>
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
