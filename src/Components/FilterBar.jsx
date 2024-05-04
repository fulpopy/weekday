import React from "react";
import SelectOptions from "./SelectOptions";
import { TextField } from "@mui/material";
import {
  role,
  numberOfEmployees,
  experience,
  remote,
  minPay,
} from "../constants/DropdownData";

const FilterBar = () => {
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
        <SelectOptions type="Roles" menuItems={role} />
      </div>
      <div style={{ minWidth: "250px" }}>
        <SelectOptions
          type="Number of Employees"
          menuItems={numberOfEmployees}
        />
      </div>
      <div style={{ minWidth: "150px" }}>
        <SelectOptions type="Experience" menuItems={experience} />
      </div>
      <div style={{ minWidth: "120px" }}>
        <SelectOptions type="Remote" menuItems={remote} />
      </div>
      <div style={{ minWidth: "250px" }}>
        <SelectOptions type="Minimum Base Pay Salary" menuItems={minPay} />
      </div>
      <div style={{ margin: "5px" }}>
        <TextField
          sx={{ width: "200px" }}
          placeholder="Search Company Name"
          size="small"
        />
      </div>
    </div>
  );
};

export default FilterBar;
