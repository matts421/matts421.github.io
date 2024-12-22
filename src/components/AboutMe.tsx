import { Box, Container, Paper, Typography, Avatar } from "@mui/material";
import avatar from "../assets/profile.png";
import { useSelector } from "react-redux";
import { RootState } from "../store";

function AboutMe() {
  const width = useSelector((state: RootState) => state.windowSize.width);
  return (
    <Container
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        flexDirection: width > 1000 ? "row" : "column",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", mx: "2rem" }}>
        <Avatar
          alt="Matthew"
          src={avatar}
          sx={{
            width: 300,
            height: 300,
            boxShadow: 20,
            mb: "1rem",
          }}
        />
        <Typography variant="h5">Matthew Smith</Typography>
        <Typography color="primary" variant="subtitle1" sx={{ mb: "2rem" }}>
          Software Engineer
        </Typography>
      </Box>
      <Paper elevation={20} square={false}>
        <Typography variant="h3" align="left" sx={{ m: "1rem" }}>
          About Me
        </Typography>
        <Typography variant="body1" align="left" sx={{ m: "1rem" }}>
          Welcome to my website! My name is Matthew Smith and I'm a senior
          Computer Science student at the University of British Columbia (UBC)
          with a passion for Machine Learning and Software Engineering.
        </Typography>
        <Typography variant="body1" align="left" sx={{ m: "1rem" }}>
          In the past I studied Physics, in which I obtained my first Bachelor's
          degree. During this time I worked in machine learning at the{" "}
          <u>BC Cancer Research Centre</u> and data analysis at the{" "}
          <u>LISA Consortium</u>.
        </Typography>
        <Typography variant="body1" align="left" sx={{ m: "1rem", mb: "2rem" }}>
          More recently, during my Computer Science degree, I interned at{" "}
          <u>AWS</u>. Here I mainly focused on developing GenAI-based
          applications.
        </Typography>
      </Paper>
    </Container>
  );
}

export default AboutMe;
