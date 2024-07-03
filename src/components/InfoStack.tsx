import {
  Paper,
  Container,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import { useSelector } from "react-redux";
import { RootState } from "../store";

function InfoStack() {
  const width = useSelector((state: RootState) => state.windowSize.width);
  const normalMode = width > 725;
  const elevation = 3;

  return (
    <Container
      sx={{
        mt: "1rem",
        display: "flex",
        flexDirection: normalMode ? "row" : "column",
      }}
    >
      <Paper
        sx={{ width: normalMode ? "50%" : "100%", my: "1rem", mx: "auto" }}
        elevation={elevation}
      >
        <Typography variant="h4" sx={{ mt: "1rem" }}>
          Education
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <SchoolIcon sx={{ mx: "auto", mb: "1rem" }} />
            </ListItemIcon>
            <Container>
              <Typography variant="body1">
                Bachelor of Computer Science, May 2025
              </Typography>
              <Typography color="textSecondary" variant="subtitle1">
                <i>University of British Columbia</i>
              </Typography>
            </Container>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SchoolIcon sx={{ mx: "auto", mb: "1rem" }} />
            </ListItemIcon>
            <Container>
              <Typography variant="body1">
                BSc in Honours Physics, May 2023
              </Typography>
              <Typography color="textSecondary" variant="subtitle1">
                <i>University of British Columbia</i>
              </Typography>
            </Container>
          </ListItem>
        </List>
      </Paper>
      <Paper
        sx={{ width: normalMode ? "40%" : "100%", my: "1rem", mx: "auto" }}
        elevation={elevation}
        id="experience"
      >
        <Typography variant="h4" sx={{ mt: "1rem" }}>
          Interests
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <StarIcon sx={{ mx: "auto" }} />
            </ListItemIcon>
            <Typography variant="body1">Machine Learning & GenAI</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <StarIcon sx={{ mx: "auto" }} />
            </ListItemIcon>
            <Typography variant="body1">Software Engineering</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <StarIcon sx={{ mx: "auto" }} />
            </ListItemIcon>
            <Typography variant="body1">Custom keyboards</Typography>
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
}

export default InfoStack;
