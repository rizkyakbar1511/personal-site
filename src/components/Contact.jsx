import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Box,
  Input,
  Button,
  Snackbar,
} from "@material-ui/core";
import Alert from "../components/Notification/Alert";
import Icon from "@material-ui/core/Icon";
import emailjs from "emailjs-com";

export default function Contact() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const close = () => setOpen(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_q8p5yui",
        "template_wwg07iv",
        e.target,
        "user_QMU2NCmgRDpeL7sDsDHmq"
      )
      .then(() => {
        setOpen(true);
        setSending(true);
        setTimeout(() => {
          setSending(false);
        }, 5000);
        setTimeout(() => {
          setSuccess(true);
        }, 6000);
      })
      .catch(() => {
        setOpen(true);
        setSending(true);
        setTimeout(() => {
          setSending(false);
        }, 5000);
        setTimeout(() => {
          setError(true);
        }, 6000);
        setTimeout(() => {
          setError(false);
          setOpen(false);
        }, 9000);
      });
    e.target.reset();
  };

  return (
    <Grid id="contact" className={classes.root} container component="section">
      <Grid className={classes.titleWrapper} item md={12}>
        <Typography
          className={classes.sectionTitle}
          variant="h2"
          component="h2"
        >
          Contact me
        </Typography>
        <Box style={{ width: 170 }} component="div">
          <Typography
            className={classes.sectionSubTitle}
            variant="subtitle2"
            component="h4"
          >
            <span className={classes.sectionSpan}>get in touch</span>
          </Typography>
        </Box>
      </Grid>
      <Grid container item spacing={4} style={{ paddingTop: 16 }}>
        <Grid item xs={12} md={6}>
          <Typography
            className={classes.rightTitle}
            variant="h5"
            component="h2"
          >
            Get in touch
          </Typography>
          <Grid
            item
            container
            alignItems="center"
            style={{ margin: "10px 0px" }}
          >
            <Icon className={[classes._icon, "fa fa-user"]} />
            <Box display="flex" flexDirection="column" component="div">
              <Typography variant="h6">Name</Typography>
              <Typography className={classes.contact_info_text} component="p">
                Muhammad Rizki Akbar
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            style={{ margin: "10px 0px" }}
          >
            <Icon className={[classes._icon, "fa fa-location-arrow"]} />
            <Box display="flex" flexDirection="column" component="div">
              <Typography variant="h6">Address</Typography>
              <Typography className={classes.contact_info_text} component="p">
                Tangerang Selatan, Indonesia
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            style={{ margin: "10px 0px" }}
          >
            <Icon className={[classes._icon, "fa fa-envelope"]} />
            <Box display="flex" flexDirection="column" component="div">
              <Typography variant="h6">Email</Typography>
              <Typography className={classes.contact_info_text} component="p">
                rizkyakbar1511@gmail.com
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid item md={6}>
          <Typography
            className={classes.rightTitle}
            variant="h5"
            component="h2"
          >
            Message me
          </Typography>
          <form
            onSubmit={sendEmail}
            className={classes.formWrapper}
            noValidate
            autoComplete="off"
          >
            <Grid item container alignItems="center" spacing={2}>
              <Grid item xs={6} md={6}>
                <Input
                  type="text"
                  name="name"
                  className={classes._input}
                  placeholder="Name"
                  disableUnderline={true}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <Input
                  type="email"
                  name="from"
                  className={classes._input}
                  placeholder="Email"
                  disableUnderline={true}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <Input
                  type="text"
                  name="subject"
                  className={classes._input}
                  placeholder="Subject"
                  disableUnderline={true}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <textarea
                  className={classes._textArea}
                  name="message"
                  placeholder="Message"
                  disableUnderline={true}
                  rows="10"
                  cols="30"
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <Button
                  type="submit"
                  className={classes._btnSendMessage}
                  disabled={sending ? true : false}
                >
                  Send Message
                </Button>
                <Typography style={{ fontWeight: "bold" }} variant="caption">
                  {" "}
                  * Please, use it wisely :)
                </Typography>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
      {success && (
        <Snackbar open={open} autoHideDuration={6000} onClose={close}>
          <Alert onClose={close} severity="success">
            Message sent
          </Alert>
        </Snackbar>
      )}
      {sending && (
        <Snackbar open={open} autoHideDuration={6000} onClose={close}>
          <Alert onClose={close} severity="info">
            Sending your message...
          </Alert>
        </Snackbar>
      )}
      {error && (
        <Snackbar open={open} autoHideDuration={6000} onClose={close}>
          <Alert onClose={close} severity="error">
            Oops! something went wrong
          </Alert>
        </Snackbar>
      )}
    </Grid>
  );
}

const useStyles = makeStyles({
  root: {
    flexDirection: "column",
    padding: 40,
    fontFamily: `'Poppins', sans-serif`,
  },
  _input: {
    border: "1px solid lightgrey",
    borderRadius: 6,
    padding: "0px 10px",
  },
  _textArea: {
    border: "1px solid lightgrey",
    borderRadius: 6,
    padding: "0px 10px",
    resize: "none",
    width: "100%",
    fontSize: "1rem",
    "&:focus": {
      border: "1px solid #1d30db",
    },
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
  rightTitle: {
    color: "#111",
    fontWeight: "bold",
    marginBottom: 14,
  },
  aboutText: {
    textAlign: "justify",
  },
  contact_info_text: {
    color: "#636e72",
    fontWeight: 500,
  },
  _icon: {
    marginRight: 16,
    fontSize: "1.8rem",
    color: "#1d30db",
  },
  _btnSendMessage: {
    background: "#1d30db",
    color: "#f2f2f2",
    "&:hover": {
      background: "none",
      color: "#1d30db",
      border: "1px solid #1d30db",
    },
  },
});
