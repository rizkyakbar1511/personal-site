import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

export default function Footer() {
  const classes = useStyles();
  const date = new Date();
  return (
    <Grid container className={classes.root}>
      <Typography align="center" variant="p" component="p">
        Created By Muhammad Rizki Akbar &copy; {date.getFullYear()} All rights
        reserved
      </Typography>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    alignItems: "center",
    background: "#111",
    color: "#fff",
    padding: theme.spacing(4),
  },
}));
