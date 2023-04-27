import { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import ListIcon from "@mui/icons-material/List";
import "./filter.scss";

function Filter() {
  const [value, setValue] = useState("Active");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{ width: 720, backgroundColor: "#c5796047" }}
      value={value}
      onChange={handleChange}
    >
      {/* Filter buttons: */}
      <BottomNavigationAction label="All" value="All" icon={<ListIcon />} />
      <BottomNavigationAction
        label="Complete"
        value="Complete"
        icon={<DoneOutlineIcon />}
      />
      <BottomNavigationAction
        label="Active"
        value="Active"
        icon={<AccessTimeIcon />}
      />
    </BottomNavigation>
  );
}

export default Filter;
