import React, {FC} from "react";
import {Button} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            textTransform: "capitalize",
            color:"#8d8a8a",
            padding:theme.spacing(2,4)
        }
    }));

interface HeaderActionButtonProps {
    text: string
}

const HeaderActionButton: FC<HeaderActionButtonProps> = ({text}) => {
    const classes = useStyles();
    return (
        <Button
            variant="text"
            classes={{
                root: classes.root
            }}
        >{text}</Button>
    )
}

export default HeaderActionButton;