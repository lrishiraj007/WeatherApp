import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));



export default function OutlinedButtons(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    
      <Button variant="outlined" onClick={props.showWeatherInfo} color="primary">
        Show Information
      </Button>
    </div>
  );
}