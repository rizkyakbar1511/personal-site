import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Box, Paper } from "@material-ui/core";
import { skills } from "../assets/skillsData";
import LabelledCircular from "./LabelledCircular";

export default function Skills() {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container component="section" id="skills">
      <Grid className={classes.titleWrapper} item md={12}>
        <Typography
          className={classes.sectionTitle}
          variant="h2"
          component="h2"
        >
          My Skills
        </Typography>
        <Box style={{ width: 170 }} component="div">
          <Typography
            className={classes.sectionSubTitle}
            variant="subtitle2"
            component="h4"
          >
            <span className={classes.sectionSpan}>what i know</span>
          </Typography>
        </Box>
      </Grid>
      <Grid container item>
        {skills.map(({ title, img, percentage, alt }) => (
          <Grid
            key={title}
            className={classes.cardBox}
            item
            xs={12}
            sm={6}
            md={3}
          >
            <Paper className={classes.paper} elevation={4}>
              <img className={classes.media} src={img} alt={alt} />
              <LabelledCircular
                style={{ margin: "10px 0px" }}
                value={percentage}
              />
              <Typography variant="h5" component="h2">
                {title}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: "column",
    padding: 40,
    fontFamily: `'Poppins', sans-serif`,
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: "2.75em",
    fontFamily: `'Poppins', sans-serif`,
  },
  sectionSubTitle: {
    width: "100%",
    textAlign: "center",
    borderBottom: "1px solid #000",
    lineHeight: "0.1em",
    margin: "10px 0 30px",
    color: "#1d30db",
    fontSize: 20,
  },
  sectionSpan: {
    background: "#fff",
    padding: "0 10px",
  },
  cardBox: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(2),
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: 250,
    borderRadius: 10,
    padding: theme.spacing(2),
    positiom: "relative",
    transition: "all 0.3s ease",
    "&:hover": {
      boxShadow: "0px 1px 5px 0px rgba(29,48,219,1)",
      transform: "scale(1.05)",
      cursor: "pointer",
    },
  },
  media: {
    width: "100%",
    maxWidth: 140,
    objectFit: "contain",
    height: 140,
  },
}));
