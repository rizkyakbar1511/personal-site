import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Box } from "@material-ui/core";
import Card from "./Card";
import { projectsData } from "../../assets/projectData";

export default function Project() {
  const classes = useStyles();
  return (
    <Box className={classes.root} component="section" id="project">
      <Grid className={classes.titleWrapper} item md={12}>
        <Typography
          className={classes.sectionTitle}
          variant="h2"
          component="h2"
        >
          Projects
        </Typography>
      </Grid>
      <Grid container justify="center" spacing={4}>
        {projectsData.map(({ name, uri, alt, gitRepo }) => (
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            xs={12}
            md={4}
            key={name}
          >
            <Card
              name={name}
              uri={uri}
              alt={alt}
              parent="project"
              gitRepo={gitRepo}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 40,
    fontFamily: `'Poppins', sans-serif`,
    background: `linear-gradient(
      to top,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3),
      #1d30db
    ),
    url(https://wallpaperaccess.com/full/507095.png)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#fff",
    padding: 20,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: "2.75em",
  },
  sectionSubTitle: {
    width: "100%",
    textAlign: "center",
    borderBottom: "1px solid #fff",
    lineHeight: "0.1em",
    margin: "10px 0 30px",
    color: "#1d30db",
    fontSize: 20,
  },
  sectionSpan: {
    background: "#111",
    padding: "0 10px",
  },
}));
