import { styled } from "@mui/material/styles";
import Masonry from "@mui/lab/Masonry";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import glitch from "../assets/projects/wizard.webp";
import record from "../assets/projects/record.jpg";
import { useState } from "react";

const Label = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

function ProjectsMasonry() {
  const width = useSelector((state: RootState) => state.windowSize.width);
  const [hoverIndex, setHoverIndex] = useState(-1);

  const normalMode = width > 825;
  const projects = [
    {
      name: "Bonehead Discord Bot",
      technologies: ["Python", "Discord", "Raspberry Pi"],
      photo:
        "https://graphicsprings.com/wp-content/uploads/2023/08/image-29.png",
      link: "https://github.com/matts421/Bonehead",
    },
    {
      name: "G1!tch Game",
      technologies: ["Java", "Swing", "JUnit"],
      photo: glitch,
      link: "https://github.com/matts421/Glitch-Game-Project",
    },
    {
      name: "MP3/MP4a Song Sorter",
      technologies: ["Python", "Spotify API"],
      photo: record,
      link: "https://github.com/matts421/Song-Sorter",
    },
    {
      name: "GW Extraction with LISA",
      technologies: ["Python", "LaTeX", "matplotlib"],
      photo:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmFzYXxlbnwwfHwwfHx8MA%3D%3D",
      link: "public/thesis.pdf",
    },
  ];

  return (
    <Box
      id={"projects"}
      sx={{ width: normalMode ? "70%" : "100%", mx: "auto", mt: "5rem" }}
    >
      <Masonry columns={normalMode ? 3 : 2} spacing={2}>
        {projects.map((project, index) => (
          <div key={index}>
            <Label elevation={20}>{project.name}</Label>
            <a
              href={project.link}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(-1)}
            >
              <img
                srcSet={`${project.photo}?w=162&auto=format&dpr=2 2x`}
                src={`${project.photo}?w=162&auto=format`}
                loading="lazy"
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: "block",
                  width: "100%",
                  opacity: hoverIndex === index ? 0.7 : 1,
                }}
              />
            </a>
          </div>
        ))}
      </Masonry>
    </Box>
  );
}

export default ProjectsMasonry;
