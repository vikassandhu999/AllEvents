import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root : {
            display: 'none',
            color: "#f05537",
            fontWeight: 800,
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        }
    }));

const AllEventsLogo = () => {
    const classes = useStyles();
    return (
          <Typography className={classes.root} variant="h5" noWrap>
              AllEvents
          </Typography>
    )
}

export default AllEventsLogo;