import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Box, Card, CardContent } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

export default function Services() {
  const classes = useStyles();
  return (
    <Box className={classes.root} component="section" id="services">
      <Grid className={classes.titleWrapper} item md={12}>
        <Typography
          className={classes.sectionTitle}
          variant="h2"
          component="h2"
        >
          My services
        </Typography>
        <Box style={{ width: 170 }} component="div">
          <Typography
            className={classes.sectionSubTitle}
            variant="subtitle2"
            component="h4"
          >
            <span className={classes.sectionSpan}>what i provide</span>
          </Typography>
        </Box>
      </Grid>
      <Grid container justify="center" spacing={3}>
        <Grid container justify="center" item xs={12} sm={12} md={4}>
          <Card className={classes.card}>
            <CardContent className={classes.cardHover}>
              <Icon className={[classes._icon, "fa fa-globe"]} />
              <Typography className={classes.title} gutterBottom>
                Web Development
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid container justify="center" item xs={12} sm={12} md={4}>
          <Card className={classes.card}>
            <CardContent className={classes.cardHover}>
              <Icon className={[classes._icon, "fa fa-mobile"]} />
              <Typography className={classes.title} gutterBottom>
                Mobile App
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid container justify="center" item xs={12} sm={12} md={4}>
          <Card className={classes.card}>
            <CardContent className={classes.cardHover}>
              <Icon className={[classes._icon, "fa fa-server"]} />
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Web Services
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "40px 40px 70px 40px",
    background: "#111",
    fontFamily: `'Poppins', sans-serif`,
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
  card: {
    width: "100%",
    maxWidth: 600,
    background: "#222",
    textAlign: "center",
    [theme.breakpoints.only("md")]: {
      minWidth: 280,
    },
  },
  title: {
    fontSize: 25,
    fontWeight: 500,
    color: "#fff",
  },
  cardHover: {
    background: "#222",
    "&:hover": {
      background: "#1d30db",
      cursor: "pointer",
      transform: "scale(1.05)",
    },
    "&:hover > span": {
      color: "#fff",
    },
    transition: "all 0.3s ease",
  },
  _icon: {
    fontSize: 80,
    color: "#1d30db",
  },
}));
