import "./App.css";
import Navbar from "./components/Navbar.tsx";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { getThemeOptions } from "./Theme";
import { useSelector } from "react-redux";
import { RootState } from "./store.ts";
import { Container } from "@mui/material";
import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { Alert } from "@mui/material";
import { Avatar } from "@mui/material";
import avatar from "./assets/profile.png";

function App() {
  const mode = useSelector((state: RootState) => state.mode.mode);
  const theme = createTheme(getThemeOptions(mode));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container
        sx={{
          my: "5rem",
          mx: "auto",
          display: "block",
        }}
      >
        <Container
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Paper elevation={20} square={false}>
            <Typography id="about" variant="h3" align="left" sx={{ m: "1rem" }}>
              About Me
            </Typography>
            <Typography variant="body1" align="left" sx={{ m: "1rem" }}>
              Welcome to my website! My name is Matthew Smith and I'm a senior
              Computer Science student at the University of British Columbia
              (UBC) with a passion for Machine Learning and Software
              Engineering.
            </Typography>
            <Typography variant="body1" align="left" sx={{ m: "1rem" }}>
              In the past I studied Physics, in which I obtained my first
              Bachelor's degree. During this time I worked in machine learning
              at the <u>BC Cancer Research Centre</u> and data analysis at the{" "}
              <u>LISA Consortium</u>.
            </Typography>
            <Typography variant="body1" align="left" sx={{ m: "1rem" }}>
              More recently, during my Computer Science degree, I interned at{" "}
              <u>AWS</u>. Here I mainly focussed on developing GenAI-based
              applications.
            </Typography>

            <Alert
              sx={{
                mx: "auto",
                my: "2rem",
                width: "80%",
              }}
              variant="outlined"
              severity="info"
              color="success"
            >
              Currently seeking full-time roles (Starting May 2025)
            </Alert>
          </Paper>
          <Avatar
            alt="Matthew"
            src={avatar}
            sx={{
              width: 300,
              height: 300,
              mx: "2rem",
              boxShadow: 20,
            }}
          />
        </Container>
        <p>thats me baby</p>
        <p>thats me baby</p>
        <p>thats me baby</p>
        <p>thats me baby</p>
        <p>thats me baby</p>
        <p>thats me baby</p>
        <p>thats me baby</p>
        <p>thats me baby</p>
        <p>thats me baby</p>
        <p>thats me baby</p>
        <p>thats me baby</p>
        <p>thats me baby</p>
        <p>thats me baby</p>
        <p>thats me baby</p>
        <p>thats me baby</p>
        <p id="blog">thats me baby</p>
        <p>thats me baby</p>
      </Container>
    </ThemeProvider>
  );
}

export default App;
