import { Button } from "@mui/material";
import { useState } from "react";
import { Menu } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, MenuItem } from "@mui/material";

function NavigationHub() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (location: string) => {
    setAnchorEl(null);
    window.location.replace(location);
  };

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <>
      {windowWidth > 825 && (
        <Box sx={{ flexGrow: 1 }}>
          <Button color="secondary" href="#about">
            About
          </Button>
          <Button color="secondary" href="#experience">
            Experience
          </Button>
          <Button color="secondary" href="#projects">
            Projects
          </Button>
          <Button color="secondary" href="#blog">
            Blog
          </Button>
        </Box>
      )}
      {windowWidth <= 825 && (
        <>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mx: "1.5rem" }}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={() => handleClose("#about")}>About</MenuItem>
            <MenuItem onClick={() => handleClose("#experience")}>
              Experience
            </MenuItem>
            <MenuItem onClick={() => handleClose("#projects")}>
              Projects
            </MenuItem>
            <MenuItem onClick={() => handleClose("#blog")}>Blog</MenuItem>
          </Menu>
          <Box sx={{ flexGrow: 1 }}></Box>
        </>
      )}
    </>
  );
}

export default NavigationHub;