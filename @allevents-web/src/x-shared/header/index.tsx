import React from 'react';
import {createStyles, fade, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HeaderSearchBar from "x-shared/header/search-bar";
import HeaderActionButton from "x-shared/header/header-action-button";
import {Container} from "@material-ui/core";
import {Link, useHistory, useLocation} from "react-router-dom";
import AllEventsLogo from "@allevents/components/text-logo";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        headerRoot: {
            backgroundColor: "#ffffff",
            flexGrow: 1,
            position:"sticky",
            top:0,
            zIndex:444,
        },
        appBar: {
            backgroundColor: "#ffffff",
        },
        grow: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        headerActions: {},
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
        },
        sectionMobile: {
            display: 'flex',
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        },
    }),
);

function Header() {
    const classes = useStyles();

    const history = useHistory();
    const { pathname } = useLocation();

    return (
        <div className={classes.headerRoot}>
            <AppBar elevation={1} className={classes.appBar}>
                <Container>
                    <Toolbar>
                        <Link to={"/"}>
                           <AllEventsLogo/>
                        </Link>

                        <div className={classes.grow}/>

                        {
                            pathname!='/event/explore' && <div className={classes.search}>
                            <HeaderSearchBar onFocus={()=>{
                                history.push('/event/explore');
                            }}/>
                        </div>
                        }
                        <div className={classes.grow}/>

                        <div className={classes.headerActions}>
                            <Link to={"/event/create"}>
                                <HeaderActionButton text={"Host an event"}/>
                            </Link>
                            <Link to={"/auth"}>
                                <HeaderActionButton text={"Sign in"}/>
                            </Link>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}

export default Header;