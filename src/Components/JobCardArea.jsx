import React from "react";
import JobCard from "./JobCard";
import { useEffect, useContext } from "react";
import { FiltersContext } from "../Context/FiltersProvider";

const JobCardArea = ({ jobData }) => {
  const {
    roles,
    numOfEmployees,
    experienceYear,
    workingMode,
    minimumPay,
    companyName,
  } = useContext(FiltersContext);
  useEffect(() => {
    console.log("useEffect called");
  }, [
    roles,
    numOfEmployees,
    experienceYear,
    workingMode,
    minimumPay,
    companyName,
  ]);
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
        {jobData.map((e) => (
          <div style={{ margin: "15px" }}>
            <JobCard job={e} />
          </div>
        ))}
      </div>
    </>
  );
};

export default JobCardArea;
