import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, Box, List, ListItem, ListItemText } from "@material-ui/core";

export default function SidePanel({ open, toggleDrawer, scroll }) {
  const classes = useStyles();
  return (
    <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
      <Box
        component="div"
        className={classes.list}
        role="presentation"
        onClick={() => toggleDrawer(false)}
        onKeyDown={() => toggleDrawer(false)}
      >
        <List>
          <ListItem button component="a" onClick={scroll}>
            <ListItemText className={classes._sidePanelLink} primary="Home" />
          </ListItem>
          <ListItem button component="a" href="#about">
            <ListItemText className={classes._sidePanelLink} primary="About" />
          </ListItem>
          <ListItem button component="a" href="#services">
            <ListItemText
              className={classes._sidePanelLink}
              primary="Services"
            />
          </ListItem>
          <ListItem button component="a" href="#skills">
            <ListItemText className={classes._sidePanelLink} primary="Skills" />
          </ListItem>
          <ListItem button component="a" href="#contact">
            <ListItemText
              className={classes._sidePanelLink}
              primary="Contact"
            />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
    [theme.breakpoints.down("xs")]: {
      // width: 475,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      // width: 475,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
    },
    "& > ul > a:hover": {
      color: "#1d30db",
    },
  },
  _sidePanelLink: {
    textAlign: "center",
    "& > span": {
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.2rem !important",
      },
    },
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    border: "2px solid #1d30db",
  },
}));
