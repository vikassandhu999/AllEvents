import React from "react";
import {Accordion, AccordionSummary, Container, Grid} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AccordionDetails from "@material-ui/core/AccordionDetails";
import HeaderSearchBar from "x-shared/header/search-bar";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import {MyLocation, ZoomOutMapOutlined} from "@material-ui/icons";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import SearchResultCard from "explore-events/search-result-card";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
            minHeight: "100vh",
            paddingTop: theme.spacing(10),
            backgroundColor: "#fff"
        },
        sideBarTitle: {
            fontWeight: 700,
            marginBottom: theme.spacing(3)
        },
        resultList : {
          maxWidth:"600px",
          width:"100%",
          marginLeft:"auto",
          marginRight:"auto"
        },
        content: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            marginBottom:theme.spacing(3)
        },
        buttonGroup : {
          marginTop:theme.spacing(4)
        },
        useMyLocation : {
            padding:theme.spacing(0.5,1),
            textTransform: "capitalize",
            boxShadow:"none",
            marginTop:theme.spacing(2),
            '&:hover' : {
                boxShadow:"none",
            }
        }
    }));

const ExploreEventComponent = () => {
    const classes = useStyles();

    const renderAccordionOptions = (title: string) => {
        return (
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis ea eius eligendi esse
                        inventore iure laborum nam, non nulla quasi sint ut, vel vero vitae! A, accusamus aspernatur
                        ducimus fuga ipsum itaque iusto labore laboriosam molestias omnis repudiandae saepe sequi
                        tempore ullam, velit. Architecto deleniti doloribus dolorum, ducimus illo laborum odio
                        perspiciatis quas. Adipisci inventore iste non quam repudiandae?
                    </Typography>
                </AccordionDetails>
            </Accordion>
        )
    }

    const renderSearchResults = () => {
        return (
            <List className={classes.resultList}>
                {
                    Array.from({length:10} , ()=>{
                        return (
                            <ListItem>
                                <SearchResultCard/>
                            </ListItem>
                        )
                    })
                }
            </List>
        )
    }

    return (
        <Container className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <Typography
                        className={classes.sideBarTitle}
                        variant={"h6"}>
                        Filters
                    </Typography>
                    {renderAccordionOptions("Date")}
                    {renderAccordionOptions("Language")}
                    {renderAccordionOptions("Price")}
                    {renderAccordionOptions("Category")}
                </Grid>
                <Grid item xs={8}>
                    <div className={classes.content}>
                        <HeaderSearchBar/>
                        <Divider/>
                        <ButtonGroup
                            className={classes.buttonGroup}
                        >
                            <Button
                                className={classes.useMyLocation}
                                startIcon={<ZoomOutMapOutlined/>}
                                variant={"outlined"}>Explore on map</Button>
                            <Button
                                className={classes.useMyLocation}
                                startIcon={<MyLocation/>}
                                variant={"outlined"}>Use my location</Button>
                        </ButtonGroup>
                    </div>
                    {renderSearchResults()}
                </Grid>
            </Grid>
        </Container>
    )
}

export default ExploreEventComponent;