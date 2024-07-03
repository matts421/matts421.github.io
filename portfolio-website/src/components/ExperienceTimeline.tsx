import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import { useState } from "react";
import {
  Container,
  Card,
  CardContent,
  IconButton,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import amazon from "../assets/amazon-corgi.gif";
import lisa from "../assets/lisa-logo.jpg";
import bccancer from "../assets/bc-cancer-logo.png";
import physsoc from "../assets/physsoc.png";
import LaunchIcon from "@mui/icons-material/Launch";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import ExperienceModal from "./ExperienceModal";

function ExperienceTimeline() {
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const width = useSelector((state: RootState) => state.windowSize.width);
  const normalMode = width > 825;

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "1px", transform: "scale(1.5)" }}
    >
      •
    </Box>
  );

  const jobs = [
    {
      start: "May 2024",
      end: "Sep 2024",
      title: "Software Dev Engineer Intern",
      company: "Amazon Web Services",
      photo: amazon,
      descriptions: [
        "Developed a GenAI-centered internal application for the CloudWatch Logs organization.",
        "Crafted a simple and intuitive UI using Streamlit and React to ensure ease-of-use and adoptability.",
        "Designed and implemented a robust RESTful API using Java, leveraged by the front-end and adjacent tooling.",
        "Modelled the infrastructure using a variety of services including S3, Lambda, ECS, and Fargate to carefully balance the cost, scaling, and security capabilities of the application.",
        "Worked closely with key stakeholders to ensure the application's longevity and usefulness, eventually resulting in over 80% team adoption and hundreds of developer work-hours saved.",
      ],
    },
    {
      start: "Sep 2022",
      end: "May 2023",
      title: "LISA Data Scientist",
      company: "LISA Consortium",
      photo: lisa,
      descriptions: [
        "Developed statistical techniques to detect artefacts in the Laser Interferometer Space Antenna (LISA) time-series gravitational wave data in Python.",
        "Performed maximum-likelihood gridsearch and Monte Carlo Markov Chain sampling to improve parameter prediction accuracy by over 200%.",
        "Documented my findings in a 50 page thesis in collaboration with NASA and the LISA Consortium.",
      ],
    },
    {
      start: "May 2022",
      end: "Sep 2022",
      title: "Deep Learning Research Assistant",
      company: "BC Cancer",
      photo: bccancer,
      descriptions: [
        "Developed, evaluated, and curated training data for a sequential UNet tasked with nuclei segmentation.",
        "Evaluated different model architectures for a cancer-cell classification task in epithelial microscopy slides.",
        "Utilized SolidWorks and KiCad to design an LED multispectral condenser for microscopy applications.",
        "Secured over $10,000 in funding from the Terry Fox Research Institute for the continuation of the project.",
      ],
    },
    {
      start: "Sep 2020",
      end: "May 2023",
      title: "Physics Society President",
      company: "UBC",
      photo: physsoc,
      descriptions: [
        "Coordinated with the Department to implement various quality-of-life changes for the betterment of the physics undergraduate community.",
        "Spearheaded various initiatives including: a lecture series, a physics podcast, and Python and LaTeX workshops",
      ],
    },
  ];

  return (
    <Container sx={{ display: "flex", mt: "5rem" }}>
      {normalMode && (
        <>
          <Timeline
            sx={{
              [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.2,
              },
            }}
            id="experience"
          >
            {jobs.map((job, i) => {
              return (
                <TimelineItem>
                  <TimelineOppositeContent color="textSecondary">
                    {job.start}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <IconButton
                      onClick={() => setCurrentJobIndex(i)}
                      color={currentJobIndex == i ? "primary" : "default"}
                    >
                      {currentJobIndex == i && <RadioButtonCheckedIcon />}
                      {currentJobIndex != i && <RadioButtonUncheckedIcon />}
                    </IconButton>
                    {i != jobs.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent>{job.title}</TimelineContent>
                </TimelineItem>
              );
            })}
          </Timeline>
          <Card sx={{ width: "50%", ml: "1rem" }} elevation={20}>
            <CardContent>
              <Typography variant="h6">
                {jobs[currentJobIndex].title}
              </Typography>
              <Typography color="primary" variant="subtitle1">
                {jobs[currentJobIndex].company} {bull}{" "}
                {jobs[currentJobIndex].start} - {jobs[currentJobIndex].end}
              </Typography>
              <Avatar
                src={jobs[currentJobIndex].photo}
                sx={{
                  width: 175,
                  height: 175,
                  mx: "auto",
                  my: "1rem",
                  boxShadow: 20,
                }}
              />
              <ExperienceModal
                job={jobs[currentJobIndex]}
                icon={<LaunchIcon />}
                isIconButton={false}
              />
            </CardContent>
          </Card>
        </>
      )}
      {!normalMode && (
        <Container id="experience">
          <Timeline position="alternate">
            {jobs.map((job, i) => {
              return (
                <TimelineItem>
                  <TimelineSeparator>
                    {i == 0 && <TimelineConnector />}
                    <ExperienceModal
                      job={job}
                      icon={<RadioButtonUncheckedIcon />}
                      isIconButton={true}
                    />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent color="primary">
                    <b>{job.start}</b>
                  </TimelineContent>
                </TimelineItem>
              );
            })}
          </Timeline>
        </Container>
      )}
    </Container>
  );
}

export default ExperienceTimeline;
