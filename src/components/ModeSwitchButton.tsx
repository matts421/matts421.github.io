import { toggleMode } from "../features/mode/modeSlice";
import { useDispatch } from "react-redux";
import { Switch } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Box } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function ModeSwitchButton() {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.mode.mode);
  return (
    <Box display="flex">
      <Switch color="secondary" onChange={() => dispatch(toggleMode())} />
      <Box sx={{ pt: 0.8 }}>
        {mode === "dark" && <DarkModeIcon />}
        {mode === "light" && <LightModeIcon />}
      </Box>
    </Box>
  );
}

export default ModeSwitchButton;
