import AppBar from "@mui/material/AppBar";
import "../App.css";
import Toolbar from "@mui/material/Toolbar";
import ModeSwitchButton from "./ModeSwitchButton";
import { Box } from "@mui/material";
import NavigationHub from "./NavigationHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

//TODO: add blog tab

function Navbar() {
  return (
    <AppBar sx={{ top: 0 }}>
      <Toolbar>
        <a href="#">Matthew Smith</a>
        <NavigationHub />
        <Box sx={{ m: 1, pt: 0.6 }}>
          <a
            href="https://www.linkedin.com/in/matthew-ag-smith/"
            target="_blank"
            rel="noopener"
          >
            <LinkedInIcon />
          </a>
        </Box>
        <Box sx={{ mr: 2, pt: 0.6 }}>
          <a href="https://github.com/matts421" target="_blank" rel="noopener">
            <GitHubIcon />
          </a>
        </Box>
        <Box>
          <ModeSwitchButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
