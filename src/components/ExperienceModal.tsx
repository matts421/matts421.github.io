import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { IconButton, List, ListItem } from "@mui/material";
import { Avatar, Typography } from "@mui/material";

function ExperienceModal(props: any) {
  const [open, setOpen] = useState(false);
  const job = props.job;
  const isIconButton = props.isIconButton;
  const icon = props.icon;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {isIconButton && (
        <IconButton color="default" onClick={handleClickOpen}>
          {icon}
        </IconButton>
      )}
      {!isIconButton && (
        <Button variant="contained" onClick={handleClickOpen} endIcon={icon}>
          Learn more
        </Button>
      )}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{job.title}</DialogTitle>
        <DialogContent>
          <Typography color="textSecondary" variant="subtitle1">
            <i>{job.company}</i> • {job.start} - {job.end}
          </Typography>
          <List>
            {job.descriptions.map((desc: any) => {
              return <ListItem>{desc}</ListItem>;
            })}
          </List>
          <Avatar
            src={job.photo}
            sx={{
              mx: "auto",
              width: 175,
              height: 175,
              boxShadow: 20,
              mt: "1rem",
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ExperienceModal;
