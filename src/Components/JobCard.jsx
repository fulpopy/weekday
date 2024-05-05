import { Button, Card, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import MoreInfoDrawer from "./MoreInfoDrawer";

const StyledCard = styled(Card)`
  height: 100px;
  background-color: rgb(255, 255, 255);
  width: 360px;
  height: 540px;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 15px;
  overflow: hidden;
  max-width: 360px;
  padding: 10px 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px 0px;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  // align-items: center;
  transition: transform 0.15s ease-in-out;
  &:hover {
    transform: scale3d(1.01, 1.01, 1.01);
  }
`;

const ColorButton = styled(Button)`
  background-color: rgb(85, 239, 196);
  color: black;
  width: 95%;
  height: 100%;
  font-weight: 500;
  text-transform: none;
  font-size: 16px;
  border-radius: 10px;
  &:hover {
    background-color: rgb(85, 239, 196);
  }
`;

const StyledLink = styled("a")(`
  text-decoration: none;
  font-size: 15px;
  text-Transform: uppercase;
  font-weight: 650;
  letter-spacing: 1.5px;
  color: rgba(0, 0, 0, 0.5);
  &:hover {
    text-decoration: underline;
  }
`);

const JobCard = ({ job }) => {
  const [open, setOpen] = useState(false);
  const {
    jdUid,
    jdLink,
    jobDetailsFromCompany,
    maxJdSalary,
    minJdSalary,
    salaryCurrencyCode,
    location,
    minExp,
    maxExp,
    jobRole,
    companyName,
    logoUrl,
  } = job;
  return (
    <>
      <StyledCard>
        <div style={{ margin: "10px 15px" }}>
          <div
            style={{
              margin: "5px 0",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              width: "fit-content",
              height: "fit-content",
              borderRadius: "50px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography style={{ fontSize: "10px", padding: "3px" }}>
              ⏳ Posted 4 days ago
            </Typography>
          </div>
          <div
            style={{ display: "flex", height: "70px", margin: "20px 0 0 0" }}
          >
            <div style={{ height: "50px", width: "50px" }}>
              <img
                style={{ width: "100%", marginTop: "5px" }}
                src={logoUrl}
                alt="logo"
              />
            </div>
            <div
              style={{
                margin: "0 10px",
                // backgroundColor: "pink",
                padding: "0 5px",
              }}
            >
              <div>
                <StyledLink href="xyz.com">
                  {companyName ? companyName : "Company Name Missing"}
                </StyledLink>
              </div>
              <div>
                <Typography
                  style={{
                    fontSize: "15px",
                    fontWeight: "100",
                    textTransform: "capitalize",
                  }}
                >
                  {jobRole ? jobRole : "Not Provided"} (Full Time, {location})
                </Typography>
              </div>
              <div>
                <Typography
                  style={{
                    fontSize: "12px",
                    fontWeight: "500",
                    textTransform: "capitalize",
                  }}
                >
                  {location}
                </Typography>
              </div>
            </div>
          </div>
          <div style={{ height: "20px", fontSize: "15px" }}>
            {/* Estimated Salary: {salaryCurrencyCode === "USD" ? "$" : "₹"} */}
            Estimated Salary: ₹{minJdSalary && `${minJdSalary}L`}
            {maxJdSalary && minJdSalary && " -"}{" "}
            {maxJdSalary && `${maxJdSalary}L`}
            {!maxJdSalary && !minJdSalary && "Salary Not Provide"} ⚠️
          </div>
          <div
            style={{
              height: "260px",
              margin: "10px 0 0 0",
            }}
          >
            <div>
              <Typography style={{ fontWeight: "550" }}>
                About Company:
              </Typography>
            </div>
            <div>
              <div
                style={{
                  height: "195px",
                  overflow: "hidden",
                }}
              >
                <div></div>
                <Typography
                  style={{
                    fontSize: "15px",
                  }}
                >
                  {jobDetailsFromCompany
                    ? jobDetailsFromCompany
                    : "Not Provided"}
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="text"
                  sx={{ textTransform: "none" }}
                  onClick={() => setOpen(true)}
                >
                  Show More
                </Button>
                <MoreInfoDrawer
                  jobDetailsFromCompany={
                    jobDetailsFromCompany
                      ? jobDetailsFromCompany
                      : "Not Provided"
                  }
                  open={open}
                  setOpen={setOpen}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "70px",
            }}
          >
            <Typography
              style={{
                color: "rgba(0, 0, 0, 0.7)",
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Minimum Experience
            </Typography>
            <Typography>
              {minExp ? `${minExp} years` : "Not Provided"}
            </Typography>
          </div>
          <div
            style={{
              width: "100%",
              // margin: "0px 5px",
              height: "50px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ColorButton variant="contained">
              <a
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                href={jdLink}
              >
                ⚡ Easy Apply
              </a>
            </ColorButton>
          </div>
        </div>
      </StyledCard>
    </>
  );
};

export default JobCard;
