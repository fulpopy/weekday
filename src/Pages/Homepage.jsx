import React, { useState } from "react";
import Header from "../Components/Header";
import FilterBar from "../Components/FilterBar";
import SearchJobs from "./SearchJobs";
import AppliedJobs from "./AppliedJobs";

const Homepage = () => {
  const [searchJobs, toggleSerachJobs] = useState(true);
  return (
    <>
      <Header toggleSerachJobs={toggleSerachJobs} searchJobs={searchJobs} />
      {searchJobs ? (
        <SearchJobs />
      ) : (
        <AppliedJobs toggleSerachJobs={toggleSerachJobs} />
      )}
    </>
  );
};

export default Homepage;
