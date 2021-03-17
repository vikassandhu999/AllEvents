import {Select, TextField, withStyles} from "@material-ui/core";
import React from "react";

export const XTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#111111',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#3a3e48',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#3a3e48',
                borderRadius:"0.2rem"
            },
            '&:hover fieldset': {
                borderColor: '#3a3e48',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#3a3e48',
            },
        },
    },
})(TextField);

export const XSelect = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#111111',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#3a3e48',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#3a3e48',
                borderRadius:"0.2rem"
            },
            '&:hover fieldset': {
                borderColor: '#3a3e48',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#3a3e48',
            },
        },
    },
})(Select);

