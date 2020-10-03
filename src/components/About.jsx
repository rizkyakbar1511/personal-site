import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Box, Button } from "@material-ui/core";
import Card from "../components/Projects/Card";
import profile from "../assets/img/about_profile.jpeg";
import ReactTypingEffect from "react-typing-effect";

export default function About() {
  const classes = useStyles();
  return (
    <Box className={classes.root} component="div" direction="column" id="about">
      <Grid className={classes.titleWrapper} item md={12}>
        <Typography
          className={classes.sectionTitle}
          variant="h2"
          component="h2"
        >
          About me
        </Typography>
        <Box style={{ width: 170 }} component="div">
          <Typography
            className={classes.sectionSubTitle}
            variant="subtitle2"
            component="h4"
          >
            <span className={classes.sectionSpan}>who i am</span>
          </Typography>
        </Box>
      </Grid>

      <Grid container item spacing={2}>
        <Grid className={classes._aboutLeft} item xs={12} sm={6} md={5}>
          <Card
            name="How are you ?"
            uri={profile}
            alt="profile"
            parent="about"
          />
        </Grid>
        <Grid className={classes._aboutRight} item xs={12} sm={6} md={7}>
          <Typography
            style={{ fontWeight: 600, fontSize: 25 }}
            variant="h5"
            component="h5"
            gutterBottom
          >
            I'm Akbar and I'm a{" "}
            <ReactTypingEffect
              className={classes.typedText}
              speed={80}
              text={["Junior Web Developer.", "Freelancer."]}
            />
          </Typography>
          <Typography className={classes.aboutText} component="p">
            I have knowledge, skills and have experience in Dumbways Bootcamp
            for 6 weeks by built a website using React as a Front End and
            Express as a Back End, I'm interested in new Technology such as
            GraphQL, React, Express Framework.
          </Typography>
          <Button
            href="https://drive.google.com/file/d/1UcDSN0Zr1cpHuv9fZxpjv8P7ochr20J7/view?usp=sharing"
            className={classes.downloadBtn}
          >
            Download CV
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 40,
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
  aboutText: {
    textAlign: "justify",
  },
  typedText: {
    color: "#1d30db",
  },
  downloadBtn: {
    textDecoration: "none",
    backgroundColor: "#1d30db",
    color: "#fff",
    padding: "10px 30px",
    marginTop: 20,
    width: 170,
    "&:hover": {
      background: "none",
      color: "#1d30db",
      border: "1px solid #1d30db",
    },
    [theme.breakpoints.down("xs")]: {
      alignSelf: "center",
    },
    [theme.breakpoints.down("sm")]: {
      alignSelf: "center",
    },
  },
  _aboutLeft: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
  },
  _aboutRight: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));
