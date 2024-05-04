import React, { useState, useContext, useEffect } from "react";
import SelectOptions from "./SelectOptions";
import { TextField } from "@mui/material";
import {
  role,
  numberOfEmployees,
  experience,
  remote,
  minPay,
} from "../constants/DropdownData";
import { FiltersContext } from "../Context/FiltersProvider";

const FilterBar = () => {
  const {
    roles,
    setRoles,
    numOfEmployees,
    setNumOfEmployees,
    experienceYear,
    setExperienceYear,
    workingMode,
    setWorkingMode,
    minimumPay,
    setMinimumPay,
    companyName,
    setCompanyName,
  } = useContext(FiltersContext);
  const [company, setCompany] = useState("");
  useEffect(() => {
    setCompanyName(company);
  }, [company]);
  return (
    <div
      style={{
        fontFamily: "__LexendFont_7838d2, __LexendFont_Fallback_7838d2",
        margin: "5px 100px 0 100px",
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <div style={{ minWidth: "200px" }}>
        <SelectOptions
          type="Roles"
          menuItems={role}
          setData={setRoles}
          data={roles}
        />
      </div>
      <div style={{ minWidth: "250px" }}>
        <SelectOptions
          type="Number of Employees"
          menuItems={numberOfEmployees}
          setData={setNumOfEmployees}
          data={numOfEmployees}
        />
      </div>
      <div style={{ minWidth: "150px" }}>
        <SelectOptions
          type="Experience"
          menuItems={experience}
          setData={setExperienceYear}
          data={experienceYear}
        />
      </div>
      <div style={{ minWidth: "120px" }}>
        <SelectOptions
          type="Remote"
          menuItems={remote}
          setData={setWorkingMode}
          data={workingMode}
        />
      </div>
      <div style={{ minWidth: "250px" }}>
        <SelectOptions
          type="Minimum Base Pay Salary"
          menuItems={minPay}
          setData={setMinimumPay}
          data={minimumPay}
        />
      </div>
      <div style={{ margin: "5px" }}>
        <TextField
          sx={{ width: "200px" }}
          placeholder="Search Company Name"
          size="small"
          onChange={(e) => {
            setCompany(e.target.value);
          }}
          value={company}
        />
      </div>
    </div>
  );
};

export default FilterBar;
