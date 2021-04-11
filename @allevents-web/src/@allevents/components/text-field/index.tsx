import {withStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const AETextField = withStyles((theme)=>({
    root: {
        marginTop: theme.spacing(2),
        width:"100%",
        fontSize:"1rem",
        '& label': {
            color: '#bdbbbb',
        },
        '& label.Mui-focused': {
            color: '#111',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#bdbbbb',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#bdbbbb',
            },
            '&:hover fieldset': {
                borderColor: '#bdbbbb',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#bdbbbb',
            },
        },
    },
}))(TextField);

export default AETextField;