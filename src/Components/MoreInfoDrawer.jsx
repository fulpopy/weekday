import { Drawer, Typography } from "@mui/material";
import React from "react";

const drawerStyle = {
  left: "25%",
  top: "10%",
  height: "80%",
  width: "50%",
  boxShadow: "none",
  borderRadius: "10px",
  padding: "15px 15px 0 15px",
  overflowY: "scroll",
};

const MoreInfoDrawer = ({ open, setOpen, jobDetailsFromCompany }) => {
  return (
    <Drawer
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      PaperProps={{ sx: drawerStyle }}
      style={{ zIndex: 1500 }}
      anchor="top"
    >
      <Typography
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          fontSize: "18px",
          marginBottom: "15px",
          fontWeight: "700",
        }}
      >
        Job Description
      </Typography>
      <Typography
        style={{ fontSize: "15px", fontWeight: "200", padding: "0 20px" }}
      >
        {jobDetailsFromCompany}
      </Typography>
    </Drawer>
  );
};

export default MoreInfoDrawer;
