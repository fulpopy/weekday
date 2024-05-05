import React, { useState } from "react";
import Header from "../Components/Header";
import FilterBar from "../Components/FilterBar";
import SearchJobs from "./SearchJobs";
import AppliedJobs from "./AppliedJobs";
import { AppBar, Toolbar, Typography, styled } from "@mui/material";

const StyledAppBar = styled(AppBar)`
  background-color: #fff;
`;

const Homepage = () => {
  const [searchJobs, toggleSerachJobs] = useState(true);
  return (
    <>
      <StyledAppBar>
        <Toolbar>
          <Typography
            style={{ fontSize: "20px", fontWeight: "500", color: "black" }}
          >
            👋 ABC XYZ
          </Typography>
        </Toolbar>
      </StyledAppBar>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            marginTop: "90px",
            padding: "10px 20px",
            backgroundColor: "rgb(217, 254, 211)",
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px 0px",
            borderRadius: "20px",
            width: "60%",
          }}
        >
          <Typography
            sx={{
              height: "fit-content",
              textWrap: "wrap",
              fontSize: "14px",
              fontWeight: "200",
            }}
          >
            {" "}
            We, at Weekday, are creating a go-to hub for uncovering the real
            issues candidates should be aware of before joining a company.{" "}
            <a
              style={{ color: "black", fontWeight: "700" }}
              href="https://www.weekday.works/companies-work-culture-database"
            >
              Access 150+ company reviews here
            </a>
          </Typography>
        </div>
      </div>

      <div>
        <Header toggleSerachJobs={toggleSerachJobs} searchJobs={searchJobs} />
      </div>

      {searchJobs ? (
        <SearchJobs />
      ) : (
        <AppliedJobs toggleSerachJobs={toggleSerachJobs} />
      )}
    </>
  );
};

export default Homepage;
