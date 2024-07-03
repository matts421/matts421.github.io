import "./App.css";
import Navbar from "./components/Navbar.tsx";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { getThemeOptions } from "./Theme";
import { useSelector } from "react-redux";
import { RootState } from "./store.ts";
import { Container } from "@mui/material";
import AboutMe from "./components/AboutMe.tsx";
import { useDispatch } from "react-redux";
import { updateSize } from "./features/windowSize/windowSizeSlice.ts";
import InfoStack from "./components/InfoStack.tsx";
import ExperienceTimeline from "./components/ExperienceTimeline.tsx";
import ProjectsMasonry from "./components/ProjectsMasonry.tsx";

function App() {
  const mode = useSelector((state: RootState) => state.mode.mode);
  const theme = createTheme(getThemeOptions(mode));
  const dispatch = useDispatch();

  window.addEventListener("resize", () => {
    dispatch(updateSize(window.innerWidth));
  });

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
        <AboutMe />
        <InfoStack />
        <ExperienceTimeline />
        <ProjectsMasonry />
      </Container>
    </ThemeProvider>
  );
}

export default App;
