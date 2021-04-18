import {withStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const SubmitButton = withStyles((theme)=>({
    root: {
        width:"100%",
        padding:theme.spacing(1,2),
        textTransform: "capitalize",
        backgroundColor:"#d1410c",
        boxShadow:"none",
        marginTop:theme.spacing(2),
        color:"#fff",
        '&:hover' : {
            backgroundColor:"#d1410c",
            boxShadow:"none",
        }
    },
}))(Button);

export default SubmitButton;
