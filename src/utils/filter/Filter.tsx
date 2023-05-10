import { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import ListIcon from "@mui/icons-material/List";
import "./filter.scss";

interface FilterProps {
  handleClick: (value: string) => void;
}

function Filter({ handleClick }: FilterProps) {
  const [value, setValue] = useState("Active");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    handleClick(newValue); // Sends filter "value" to parent component(Main)
  };

  return (
    <BottomNavigation
      sx={{ width: 720, backgroundColor: "#c5796047" }}
      value={value}
      onChange={handleChange}
    >
      {/* Filter buttons: */}
      <BottomNavigationAction
        label="All"
        value="All"
        icon={<ListIcon />}
        sx={{
          "&.Mui-selected": { color: "#837108" },
        }}
      />
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
