import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { FavoriteBorderOutlined } from '@material-ui/icons';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      textDecoration: 'none',
      display: 'block',
      width: '100%',
    },
    root: {
      width: '100%',
      cursor: 'pointer',
      borderRadius: 0,
      display: 'flex',
      '&:hover': {
        boxShadow: theme.shadows[4],
      },
    },
    media: {
      width: 0,
      paddingLeft: '40%',
    },
    content: {
      position: 'relative',
    },
    floatingAction: {
      position: 'absolute',
      right: theme.spacing(2),
      top: -theme.spacing(3.5),
      width: theme.spacing(5),
      height: theme.spacing(5),
      padding: theme.spacing(1),
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      border: '1px solid',
      borderColor: '#bdbbbb',
      borderRadius: '100%',
      backgroundColor: '#fff',
    },
    iconButton: {
      backgroundColor: '#fff',
      color: '#111',
    },
    cardText1: {
      color: '#f05537',
      fontWeight: 700,
    },
    cardText2: {
      color: '#111',
      fontSize: '1rem',
      textAlign: 'left',
      fontWeight: 700,
    },
    cardText3: {
      color: '#6c6767',
      fontSize: '1rem',
      marginTop: theme.spacing(2),
      textAlign: 'left',
      fontWeight: 700,
    },
  }),
);

function SearchResultCard() {
  const classes = useStyles();

  return (
    <Link to={'/event/book'} className={classes.link}>
      <Card elevation={2} className={classes.root}>
        <CardMedia
          className={classes.media}
          image="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F129094579%2F496610908579%2F1%2Foriginal.20210315-140827?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C828%2C414&s=16137cf3206ae35c2f501715e489a1a5"
          title="The great event"
        />
        <CardContent className={classes.content}>
          {/*<Tooltip className={classes.floatingAction} title="Add to wishlist" aria-label="add">*/}
          {/*    <IconButton className={classes.iconButton} aria-label="add">*/}
          {/*        <FavoriteBorderOutlined htmlColor={"#111"}/>*/}
          {/*    </IconButton>*/}
          {/*</Tooltip>*/}

          <Typography className={classes.cardText2} variant="h6">
            Jo bolta hai such hota hai ft. Harsh Gujral
          </Typography>
          <Typography className={classes.cardText1} variant="body2">
            Fri, Apr 30, 2021 5:00 AM IST
          </Typography>
          <Typography className={classes.cardText3} variant="body2">
            Venue : Haveli Jalandhar
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

export default SearchResultCard;
