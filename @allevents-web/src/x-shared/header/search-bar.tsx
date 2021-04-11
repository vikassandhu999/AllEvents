import React, {useState} from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        searchBar : {
            display:"flex",
            position:"relative",
            backgroundColor:"#eee",
            width:"500px",
            minHeight:theme.spacing(6),
            border : "solid 1px",
            borderColor:"#bdbbbb",
            height:"100%"
        },
        onFocusBorder : {
            border : "solid 1px #111"
        },
        icon : {
            top:theme.spacing(1),
            bottom:theme.spacing(1),
            left:theme.spacing(1),
            width:theme.spacing(4),
            height:theme.spacing(4),
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            alignContent:"center",
            position:"absolute"
        },
        input : {
            position:"absolute",
            left:theme.spacing(5.5),
            top:theme.spacing(1),
            right:theme.spacing(1),
            bottom:theme.spacing(1),
        },
    }));


const HeaderSearchBar = () => {
    const classes = useStyles();
    const [isFocused,setFocused] = useState<boolean>(false);

    return (
        <div className={classes.searchBar+" "+(isFocused?classes.onFocusBorder : "")}>
            <div className={classes.icon}>
                <SearchIcon htmlColor={"#a9a8b3"}/>
            </div>
            <InputBase
                onFocus={()=>setFocused(true)}
                onBlur={()=>setFocused(false)}
                placeholder="Search…"
                classes={{
                    root : classes.input
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
        </div>
    )
}

export default HeaderSearchBar;