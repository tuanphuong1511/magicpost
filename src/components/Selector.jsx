import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const AppSelector = (props) => {
  const [area, setArea] = useState("");

  const handleChange = (event) => {
    setArea(event.target.value);
  };
  const { title = "Title" } = props;
  return (
    <FormControl sx={{ m: 1, minWidth: 180 }} size="small">
      <InputLabel id="demo-select-small-label">{title}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={area}
        label={title}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>Miền Bắc</MenuItem>
        <MenuItem value={2}>Miền Trung</MenuItem>
        <MenuItem value={3}>Miền Nam</MenuItem>
      </Select>
    </FormControl>
  );
};

export default AppSelector;
