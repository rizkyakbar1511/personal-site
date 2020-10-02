import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { useWindowScroll } from "react-use";
import ReactTypingEffect from "react-typing-effect";
import bannerBackground from "../assets/img/banner.jpg";
import SidePanel from "../components/SidePanel";

export default function Header({ scroll }) {
  const { y: pageYOffset } = useWindowScroll();
  const [show, setShow] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (pageYOffset > 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [pageYOffset]);

  const toggleDrawer = (open) => {
    setOpen(open);
  };

  const classes = useStyles();

  return (
    <Box component="nav" className={classes.root}>
      <AppBar className={show ? classes.stickyNav : classes.navbar}>
        <Toolbar>
          <Box className={classes.desktopNav} component="div">
            <Typography variant="h6" className={classes.title} onClick={scroll}>
              Portfo<span style={{ color: "#1d30db" }}>lio.</span>
            </Typography>
            <Box className={classes.navLink} component="div">
              <Button
                className={classes._navLink}
                color="inherit"
                onClick={scroll}
              >
                Home
              </Button>
              <Button
                href="#about"
                className={classes._navLink}
                color="inherit"
              >
                About
              </Button>
              <Button
                href="#services"
                className={classes._navLink}
                color="inherit"
              >
                Services
              </Button>
              <Button
                href="#skills"
                className={classes._navLink}
                color="inherit"
              >
                Skills
              </Button>
              <Button
                href="#contact"
                className={classes._navLink}
                color="inherit"
              >
                Contact
              </Button>
            </Box>
          </Box>
          <Box className={classes.mobileNav} component="div">
            <Typography variant="h6" className={classes.title}>
              Portfo<span style={{ color: "#1d30db" }}>lio.</span>
            </Typography>
            <IconButton
              edge="end"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => toggleDrawer(true)}
            >
              <Menu />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box className={classes.banner} component="section">
        <Box className={classes.textBox} component="div">
          <Typography className={classes.bannerTitle} variant="h2">
            Hello, my name is
            <br />
            <span className={classes._name}>Muhammad Rizki Akbar.</span>
          </Typography>
          <Typography className={classes._job} variant="h3">
            And I'm a{" "}
            <ReactTypingEffect
              className={classes.typedText}
              speed={80}
              text={["Junior Web Developer.", "Freelancer."]}
            />
          </Typography>
          <Button href="#contact" className={classes.bannerBtn}>
            Hire Me
          </Button>
        </Box>
      </Box>
      <SidePanel toggleDrawer={toggleDrawer} open={open} scroll={scroll} />
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
    backgroundColor: "transparent",
    boxShadow: "none",
    transition: "0.5s",
  },
  stickyNav: {
    position: "fixed",
    background: "#fff",
    color: "#111",
    boxShadow: "0px 5px 20px rgba(0,0,0,0.1)",
    transition: "0.5s",
    paddingTop: 0,
    paddingBottom: 0,
  },
  desktopNav: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  mobileNav: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  navLink: {
    display: "flex",
    width: 500,
    justifyContent: "space-between",
  },
  _navLink: {
    fontWeight: 700,
    "&:hover": {
      color: "#1d30db",
    },
    transition: "0.5s",
    textTransform: "capitalize",
    fontSize: "1.2em",
  },
  typedText: {
    color: "#1d30db",
  },
  menuButton: {
    marginRight: 0,
  },
  title: {
    fontWeight: "bold",
    fontSize: "2em",
    "&:hover": {
      cursor: "pointer",
    },
  },
  banner: {
    position: "relative",
    minHeight: "100vh",
    background: `url(${bannerBackground})`,
    backgroundSize: "contain",
    [theme.breakpoints.down("xs")]: {
      backgroundSize: "cover",
      padding: "0px",
    },
    backgroundPosition: "right",
    backgroundColor: "black",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "100px",
  },
  textBox: {
    [theme.breakpoints.down("xs")]: {
      width: 645,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  },
  bannerTitle: {
    fontSize: "3em",
    color: "#fff",
    fontWeight: 500,
    lineHeight: "1.5em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  _name: {
    fontWeight: 600,
    fontSize: "1.5em",
  },
  _job: {
    fontSize: "1.5em",
    color: "#fff",
    fontWeight: 500,
  },
  bannerBtn: {
    position: "relative",
    background: "#1d30db",
    display: "inline-block",
    color: "#fff",
    marginTop: 20,
    padding: "10px 20px",
    fontSize: 18,
    textTransform: "uppercase",
    letterSpacing: "2px",
    fontWeight: 500,
    "&:hover": {
      background: "#2196f3",
    },
  },
}));
