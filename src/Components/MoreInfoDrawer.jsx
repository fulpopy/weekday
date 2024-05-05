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

const MoreInfoDrawer = ({ open, setOpen }) => {
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
        We are a registered Salesforce partner and ISO 27001 certified company
        specializing in Salesforce consultation, implementation, and AppExchange
        product development. Our expertise includes Sales Cloud, Service Cloud,
        Marketing Cloud, Commerce Cloud, Community Cloud, and Vlocity. We also
        offer staff augmentation and recruitment services to help businesses
        build high-performing teams. Our goal is to deliver affordable solutions
        of the highest quality.ur expertise includes Sales Cloud, Service Cloud,
        Marketing Cloud, Commerce Cloud, Community Cloud, and Vlocity. We also
        offer staff augmentation and recruitment services to help businesses
        build high-performing teams. Our goal is to deliver affordable solutions
        of the highest quality. We are a registered Salesforce partner and ISO
        27001 certified company specializing in Salesforce consultation,
        implementation, and AppExchange product development. Our expertise
        includes Sales Cloud, Service Cloud, Marketing Cloud, Commerce Cloud,
        Community Cloud, and Vlocity. We also offer staff augmentation and
        recruitment services to help businesses build high-performing teams. Our
        goal is to deliver affordable solutions of the highest quality.ur
        expertise includes Sales Cloud, Service Cloud, Marketing Cloud, Commerce
        Cloud, Community Cloud, and Vlocity. We also offer staff augmentation
        and recruitment services to help businesses build high-performing teams.
        Our goal is to deliver affordable solutions of the highest quality. We
        are a registered Salesforce partner and ISO 27001 certified company
        specializing in Salesforce consultation, implementation, and AppExchange
        product development. Our expertise includes Sales Cloud, Service Cloud,
        Marketing Cloud, Commerce Cloud, Community Cloud, and Vlocity. We also
        offer staff augmentation and recruitment services to help businesses
        build high-performing teams. Our goal is to deliver affordable solutions
        of the highest quality.ur expertise includes Sales Cloud, Service Cloud,
        Marketing Cloud, Commerce Cloud, Community Cloud, and Vlocity. We also
        offer staff augmentation and recruitment services to help businesses
        build high-performing teams. Our goal is to deliver affordable solutions
        of the highest quality. We are a registered Salesforce partner and ISO
        27001 certified company specializing in Salesforce consultation,
        implementation, and AppExchange product development. Our expertise
        includes Sales Cloud, Service Cloud, Marketing Cloud, Commerce Cloud,
        Community Cloud, and Vlocity. We also offer staff augmentation and
        recruitment services to help businesses build high-performing teams. Our
        goal is to deliver affordable solutions of the highest quality.ur
        expertise includes Sales Cloud, Service Cloud, Marketing Cloud, Commerce
        Cloud, Community Cloud, and Vlocity. We also offer staff augmentation
        and recruitment services to help businesses build high-performing teams.
        Our goal is to deliver affordable solutions of the highest quality.
      </Typography>
    </Drawer>
  );
};

export default MoreInfoDrawer;
