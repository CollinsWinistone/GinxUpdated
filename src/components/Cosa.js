import React from "react";
import { makeStyles } from "@mui/styles";
import {useTheme} from "@mui/material";
import {styled} from "@mui/material/styles"



const useStyles = (theme) => ({
    root: {
        width: "auto",
        textAlign: "center",
        [theme.breakpoints.up(1201)]:{
            padding: "100px 150px 150px ",
        }
    },
    colly:{
        color:theme.palette.primary,
        background:theme.background,
    },
});

const Cosa = ()=>{
    const theme = useTheme();
    const classes = useStyles(theme);
    
    return (
        <>
            <h1 className={classes.colly}>Collins Wanjala</h1>
        </>
    )
}

export default Cosa;