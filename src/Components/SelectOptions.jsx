import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";

export default function SelectOptions({ type, menuItems, data, setData }) {
  const [filters, setFilters] = useState([]);
  useEffect(() => {
    setData(filters);
  }, [filters]);
  return (
    <Autocomplete
      onChange={(event, newValue) => setFilters(newValue)}
      sx={{
        margin: "5px",
      }}
      autoHighlight={true}
      size="small"
      multiple
      id="tags-outlined"
      options={menuItems}
      groupBy={(option) => option.group}
      getOptionLabel={(option) => option.title}
      filterSelectedOptions
      renderInput={(params) => <TextField {...params} label={type} />}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            label={option.title}
            onDelete={(e) => {
              setFilters((filters) =>
                filters.filter((f) => f.title !== e.title)
              );
            }}
            {...getTagProps({ index })}
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              borderRadius: "2px",
              color: "rgb(51, 51, 51)",
              fontSize: "12px",
              padding: "3px 3px 3px 0px",
              boxSizing: "border-box",
              textTransform: "capitalize",
              bgcolor: "rgb(230, 230, 230)",
            }}
          />
        ))
      }
    />
  );
}
