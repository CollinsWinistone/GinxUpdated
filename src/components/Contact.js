import React from 'react';
import Navbar from './modules/Navbar';
import Footer from './modules/Footer';
import Message from './message';
import { Box, useMediaQuery, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {  useTheme } from "@mui/material";
import { createUseStyles } from 'react-jss';


const useStyles = createUseStyles((theme) => ({
    root: {
        width: "auto",
        textAlign: "center"
    }
}));


export default function Contact() {
    const theme = useTheme();
    const classes = useStyles(theme);
    
    const matches = useMediaQuery(theme.breakpoints.down("xs"));

    return (
        <React.Fragment>
            <Navbar />
            <h1 >"  "</h1>
            <Box className={classes.root}>
            <Container style={{marginBottom: 20, marginTop: "40px"}} >
                    <Typography variant="h4" 
                    align="center" 
                    color="textPrimary"
                    mt={9} gutterBottom >
                    <Box fontWeight="fontWeightBold">
                    Contact Us
                    </Box>
                        
                    </Typography>
                    <Typography 
                    className="pa4"
                    align="center" 
                    color="textSecondary" 
                    variant={matches ? "body2": "h6"}
                    paragraph >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus non purus dapibus, mattis enim eu, 
                        efficitur velit. Fusce magna lacus, tincidunt sit amet semper nec,
                        laoreet at nunc. Suspendisse venenatis, 
                        tortor quis gravida molestie, urna arcu fermentum lectus
                    
                    </Typography>
                </Container>
            <Message />
            </Box>
            <Footer />
        </React.Fragment>
    );
}