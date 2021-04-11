import React from "react";
import {Container} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {ArrowForward} from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: theme.spacing(4),
            width: "100%",
            minHeight: "60vh",
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            padding: theme.spacing(4),
            background: 'url("https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F131060017%2F438776807040%2F1%2Foriginal.20210402-213056?w=1024&auto=format%2Ccompress&q=75&sharp=10&s=ed10f677d3dbcda77b236074e536644f")',
            backgroundPosition: "center 40%",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat"
        },
        textWrap: {
            display: "flex",
            flexDirection: "column",
            height: "max-content",
            backgroundColor: "#ffffff",
            boxShadow: theme.shadows[0],
            padding: theme.spacing(2, 4),
            justifyContent: "center",
        },
        ctaText1: {
            color: "#f05537",
            fontWeight: 900
        },
        ctaText2: {
            color: "#111",
            textAlign: "left",
            fontWeight: 900
        },
        heroImage: {
            maxWidth: "600px",
            width: "100%",
            display: "block"
        },
        ctaButton : {
            backgroundColor:"#d1410c",
            boxShadow:"none",
            marginTop:theme.spacing(2),
            textTransform: "capitalize",
            padding:theme.spacing(1,2),
            color:"#fff",
            width:"max-content",
            borderRadius:theme.spacing(4),
            '&:hover' : {
                backgroundColor:"#d1410c",
                boxShadow:"none",
            }
        }
    }));

const Hero = () => {
    const classes = useStyles();
    return (
        <Container>
            <div className={classes.root}>
                <div className={classes.textWrap}>
                    <Typography className={classes.ctaText1} variant="h4" noWrap>
                        Discover the best
                    </Typography>
                    <Typography className={classes.ctaText2} variant="h2" noWrap>
                        events
                    </Typography>
                    <Button
                        variant="contained"
                        endIcon={<ArrowForward/>}
                        classes={{
                            root : classes.ctaButton
                        }}>
                        Get Tickets
                    </Button>
                </div>
            </div>
        </Container>
    )
}

export default Hero;