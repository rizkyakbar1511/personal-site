import React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

export default function LabelledCircular(props) {
  const classes = useStyles();
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        className={classes.circle}
        variant="static"
        size={50}
        {...props}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="textSecondary">
          {props.value}%
        </Typography>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles({
  circle: {
    color: "red",
  },
});

LabelledCircular.propTypes = {
  /**
   * The value of the progress indicator for the determinate and static variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};
