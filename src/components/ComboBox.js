import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box } from "@mui/system";
import DoneIcon from "@mui/icons-material/Done";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./comboBox.css";

export default function ComboBox() {
  const [selectedValue, setSelectedValue] = useState("");
  console.log("selected value", selectedValue);

  return (
    <Autocomplete
      id="combo-box-demo"
      popupIcon={<KeyboardArrowDownIcon />}
      options={top100Films}
      noOptionsText={"Your Customized No Options Text"}
      defaultValue={top100Films.find((v) => v.label[0])}
      disableClearable
      sx={{ width: 300 }}
      onInputChange={(e, value) => setSelectedValue(value)}
      onChange={(e, value) => console.log(value)}
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          <div>
            <DoneIcon
              style={
                selectedValue === props.key
                  ? { color: "#17BAE0" }
                  : { color: "#fff" }
              }
              className="done-icon"
            />
          </div>
          <p className="option-label">{option.label}</p>
        </Box>
      )}
      renderInput={(params) => <TextField {...params} />}
    />
  );
}

const top100Films = [
  { label: "All", year: 2000 },
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
];
