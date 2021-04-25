import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { FavoriteBorderOutlined, ShareOutlined } from '@material-ui/icons';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      marginTop: theme.spacing(6),
      backgroundColor: '#fff',
    },
    postMedia: {
      display: 'block',
      width: '100%',
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    content: {
      padding: theme.spacing(2, 4),
      maxWidth: '600px',
    },
    bookTicketButton: {
      marginLeft: 'auto',
      textTransform: 'capitalize',
      backgroundColor: '#0D8547',
      padding: theme.spacing(1, 3),
      color: '#fff',
      '&:hover': {
        backgroundColor: '#15aa5d',
      },
    },
    actions: {
      borderBottom: '2px solid',
      borderBottomColor: '#c2c2c2',
      borderShadow: theme.shadows[5],
      position: 'sticky',
      top: 0,
    },
  }),
);

const BookEventComponent = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid className={classes.grid} container spacing={3}>
        <Grid item xs={8}>
          <Card elevation={0}>
            <CardMedia
              className={classes.postMedia}
              image="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F124310893%2F354665342601%2F1%2Foriginal.20210127-105110?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=1%2C85%2C2666%2C1333&s=f1e2f6b1683d8a4e590140e57b7ed711"
              title="Paella dish"
            />

            <CardActions className={classes.actions} disableSpacing>
              <Tooltip title={'Add to favorites'}>
                <IconButton aria-label="add to favorites">
                  <FavoriteBorderOutlined htmlColor={'#111'} />
                </IconButton>
              </Tooltip>
              <Tooltip title={'Share event'}>
                <IconButton aria-label="add to favorites">
                  <ShareOutlined htmlColor={'#111'} />
                </IconButton>
              </Tooltip>

              <Button
                variant={'contained'}
                className={classes.bookTicketButton}
              >
                Book
              </Button>
            </CardActions>

            <CardContent className={classes.content}>
              <Typography variant="h5">
                Jo bolta hai such hota hai ft. Harsh Gujral
              </Typography>
              <br />
              <Typography variant="h6">About this event</Typography>
              <br />
              <br />
              <Typography variant="body2">
                O’Farrell’s “exceptional” award-winning novel captures a
                Jacobean England haunted by a plague that tragically kills
                Hamnet, the only son of William Shakespeare. In reimagining the
                complex relationship between Hamnet’s parents as the
                11-year-old’s condition worsens, O’Farrell captures one of the
                greatest agonies imaginable to a parent. Women’s Prize judge
                Martha Lane Fox said of the novel, “It expresses something
                profound about the human experience that seems both
                extraordinarily current and at the same time, enduring.”
              </Typography>
              <br />
              <Typography variant="body2">
                This event is part of our online Book Club series, in which The
                Guardian’s chief books writer, Lisa Allardice, talks to leading
                writers about their latest novels, creative process and
                isolation. They will also be answering your questions.
              </Typography>{' '}
              <br />
              <Typography variant="body2">Running time: 60 minutes </Typography>
              <br />
              <Typography variant="body2">
                If you live in the UK, you can purchase a ticket with a
                paperback copy of Hamnet at checkout for the special combined
                price of £13 including postage and packing (RRP £8.99).{' '}
              </Typography>
              <br />
              <Typography variant="body2">
                This event will be hosted on a third-party live streaming
                platform BlueJeans, please refer to their privacy policy before
                purchasing a ticket to the event. After registering, you will
                receive a unique link in advance to access the event online.
              </Typography>
              <br />
              <Typography variant="body2">
                If you require closed captions to be available on this event
                notify us on your booking form when making your purchase.
              </Typography>
              <br />
              <Typography variant="body2">
                *Books will be dispatched on 1 April 2021. However, please note
                that in the current circumstances, some books may be delayed. If
                we experience any delay in getting your copy to you, we will
                contact you by email to let you know.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BookEventComponent;
