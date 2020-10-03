import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import { Box, Typography } from "@material-ui/core";

export default function Card({ name, uri, alt, parent, gitRepo }) {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Box className={classes.imgBx} component="div">
        <img src={uri} alt={alt} />
      </Box>
      <Box className={classes.socialIcon} component="ul">
        {parent === "about" && (
          <>
            <Box component="li">
              <a
                href="https://github.com/rizkyakbar1511/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="fa fa-github" />
              </a>
            </Box>
            <Box component="li">
              <a
                href="https://www.linkedin.com/in/muhammad-rizki-akbar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="fa fa-linkedin" />
              </a>
            </Box>
            <Box component="li">
              <a
                href="https://www.instagram.com/rzakbar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="fa fa-instagram" />
              </a>
            </Box>
          </>
        )}
        {parent === "project" && (
          <Box component="li">
            <a href={gitRepo} target="_blank" rel="noopener noreferrer">
              <Icon className="fa fa-github" />
            </a>
          </Box>
        )}
      </Box>
      <Box className={classes.details} component="div">
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  box: {
    [theme.breakpoints.down("xs")]: {
      width: 250,
      height: 300,
    },
    position: "relative",
    width: 400,
    height: 500,
    borderRadius: 15,
    overflow: "hidden",
    boxShadow: "0px 5px 20px rgba(0,0,0,0.3)",
    "&:hover > div > img": {
      opacity: 0.5,
    },
    "&:hover > ul > li > a": {
      transform: `translateY(${0}px)`,
      opacity: 1,
    },
    "&:hover > ul > li:nth-child(1) > a": {
      transitionDelay: "0s",
    },
    "&:hover > ul > li:nth-child(2) > a": {
      transitionDelay: "0.2s",
    },
    "&:hover > ul > li:nth-child(3) > a": {
      transitionDelay: "0.4s",
    },
    "&:hover > ul > li:nth-child(4) > a": {
      transitionDelay: "0.6s",
    },
    "&:hover > ul > li:nth-child(5) > a": {
      transitionDelay: "0.8s",
    },
    "&:hover div:first-of-type": {
      transform: `translateY(-${100}px)`,
    },
  },
  imgBx: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    transition: "0.5s",
    zIndex: 2,
    background: "#000",
    "& > img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
  socialIcon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: `translate(-${50}%, -${50}%)`,
    zIndex: 3,
    display: "flex",
    margin: 0,
    padding: 0,
    "& > li > a": {
      [theme.breakpoints.down("xs")]: {
        width: 30,
        height: 30,
        padding: 18,
      },
      position: "relative",
      display: "flex",
      textDecoration: "none",
      width: 50,
      height: 50,
      lineHeight: 50,
      justifyContent: "center",
      alignItems: "center",
      background: "#fff",
      color: "#262626",
      margin: "0 5px",
      borderRadius: "50%",
      transition: "0.5s",
      transform: `translateY(${200}px)`,
      opacity: 0,
    },
    "& > li > a > span": {
      transition: "0.5s",
    },
    "& > li > a:hover > span": {
      transform: `rotateY(${360}deg)`,
    },
  },
  details: {
    position: "absolute",
    bottom: 0,
    left: 0,
    background: "#fff",
    zIndex: 1,
    width: "100%",
    height: 100,
    padding: 10,
    boxSizing: "border-box",
    "&>h2": {
      margin: "10px 0px 0px",
      padding: 0,
      textAlign: "center",
    },
  },
}));
