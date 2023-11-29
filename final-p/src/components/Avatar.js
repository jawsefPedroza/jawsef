// Avatar.js
import React from 'react';
import { Avatar as MUIAvatar, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  centerAvatar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(20), // Adjust the spacing between the top of the page and the Avatar
  },
  largerAvatar: {
    width: theme.spacing(20), // Adjust the size as needed
    height: theme.spacing(20), // Adjust the size as needed
    marginBottom: theme.spacing(1), // Adjust the spacing between avatar and username
  },
  biggerUsername: {
    fontSize: '28px', // Adjust the font size for the username
  },
}));

const Avatar = ({ imageUrl, username }) => {
  const classes = useStyles();

  return (
    <div className={classes.centerAvatar}>
      <MUIAvatar alt="Profile Avatar" src={imageUrl} className={`${classes.largerAvatar}`} />
      <Typography variant="subtitle1" className={classes.biggerUsername}>
        {username}
      </Typography>
    </div>
  );
};

export default Avatar;
