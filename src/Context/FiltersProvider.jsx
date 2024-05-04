import { createContext, useState } from "react";

export const FiltersContext = createContext(null);

const FiltersProvider = ({ children }) => {
  const [roles, setRoles] = useState([]);
  const [numOfEmployees, setNumOfEmployees] = useState([]);
  const [experienceYear, setExperienceYear] = useState([]);
  const [workingMode, setWorkingMode] = useState([]);
  const [minimumPay, setMinimumPay] = useState([]);
  const [companyName, setCompanyName] = useState("");
  return (
    <FiltersContext.Provider
      value={{
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
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersProvider;
