import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Project from "./components/Projects/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Fab, Grow } from "@material-ui/core";
import { ExpandLess } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { useScroll } from "./assets/hooks";

function App() {
  const classes = useStyles();
  const [visible, scrollToTop] = useScroll();

  return (
    <div className="App">
      <Header scroll={scrollToTop} />
      <About />
      <Services />
      <Skills />
      <Project />
      <Contact />
      <Footer />
      <Grow in={visible}>
        <Fab
          onClick={scrollToTop}
          className={classes.fab}
          aria-label="scroll-to-top"
        >
          <ExpandLess fontSize="large" />
        </Fab>
      </Grow>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    backgroundColor: "#1d30db",
    color: "#fff",
    zIndex: 99,
  },
}));

export default App;
