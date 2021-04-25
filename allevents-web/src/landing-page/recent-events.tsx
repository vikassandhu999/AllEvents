import React from 'react';
import { Container } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import EventCard from '@app/landing-page/components/event-card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
      width: '100%',
      display: 'block',
    },
    grid: {
      width: '100%',
      padding: theme.spacing(2),
    },
    title: {
      color: '#111',
      fontWeight: 800,
    },
  }),
);

const RecentEvents = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid className={classes.grid} container spacing={3}>
        <Grid item xs={12}>
          <Typography className={classes.title} variant="h5" noWrap>
            Recently added
          </Typography>
        </Grid>
        {Array.from({ length: 10 }, () => {
          return (
            <Grid item xs={3}>
              <EventCard />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default RecentEvents;
