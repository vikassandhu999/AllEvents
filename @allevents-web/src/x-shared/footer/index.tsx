import React from 'react';
import {createStyles, fade, makeStyles, Theme} from '@material-ui/core/styles';
import {Container} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root : {
            width : "100%",
            minHeight:"40vh",
            backgroundColor:"#1e0a3c"
        }
    }),
);

function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
                This is  footer
            </Container>
        </div>
    );
}

export default Footer;