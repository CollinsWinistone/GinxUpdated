import React, { useState } from 'react';
import { Box, Grid, Container, Typography, Paper, CardActionArea } from '@mui/material';
import { makeStyles } from "@mui/styles";
import {useTheme} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ToggleButton from '@mui/lab/ToggleButton';
// import Details from '../details';
import landCruiser from "../../assets/v8.jfif"
import { useNavigate, generatePath } from 'react-router-dom';


const useStyles = (theme) => ({
    root: {
        backgroundColor: "#ffffff",
        paddingTop: theme.spacing(2),
        flexGrow: 1,
        [theme.breakpoints.down(1200)]:{
            height:"auto",
        },
        [theme.breakpoints.up(1201)]:{
            height: "300px",
        },
    },
    img: {
        height: 260,
        backgroundColor: "#eae9ea",
        [theme.breakpoints.down(840)]:{
            // padding: "10px",
            width: "100%",
        },
        [theme.breakpoints.up('sm')]:{
            width: 400,
        },
    },
    favBox: {
        [theme.breakpoints.down("xs")]:{
            // padding: "10px",
            width: "auto",
            display:"flex",
            position: "relative",
            paddingLeft: "100px",
        },
        [theme.breakpoints.up('sm')]:{
            width: "400",
        },
    }
});


function ListCard({ carArray }) {

    const [ selected, setSelected ] = useState(false);
    
    const [ id, setId ] = useState();
    const history = useNavigate();
    
    const theme = useTheme();
    const classes = useStyles(theme);
    
    // console.log(carArray);
    return(
        <div className={classes.root} >
            <Container >
                <Box>
                <div className={classes.root} >
                    <Paper elevation={0} component={Box}
                    bgcolor="#fcfafc"
                    // onClick={()=> setOpenDetail(true)}
                    onClick={()=> {
                        // console.log(typeof(carArray._id));
                        setId(carArray._id)
                        id && history.push(generatePath("/cars/:id", { id }))}}
                    >
                        <CardActionArea 
                        // component={Link}
                        //  href="#"
                        >
                            <Grid container >
                                <Box>
                                    <Grid item>
                                    <img className={classes.img} alt="CAR" src={landCruiser} />
                                    </Grid>
                                </Box>
                                <Grid item xs={12} sm={6} container direction="column">
                                    <Box p={2} >
                                        <Typography variant="h5" >
                                            <Box fontWeight="fontWeightBold">
                                            "Oxus" "LandCruiser v8"
                                            </Box>
                                        </Typography>
                                        
                                    </Box>
                                    <Box display="flex" direction="row" pt={3} >
                                        {/* <Grid container direction="row" > */}
                                            <Box display="flex"  pl={1}>
                                            {/* <Typography variant="body1" > */}
                                                <Box color="#919296" fontWeight="fontWeightMedium" >
                                                    Full Price :
                                                </Box>
                                                <Box color="#ceba97" > 
                                                    $50,000 
                                                </Box>
                                            {/* </Typography> */}
                                            </Box>
                                            <Box display="flex" pl={10} >
                                            {/* <Typography variant="body1" > */}
                                                <Box color="#919296" fontWeight="fontWeightMedium" >
                                                Monthly :
                                                </Box>
                                                <Box color="#ceba97"> 
                                                $50,000 
                                                </Box>
                                            {/* </Typography> */}
                                            </Box>
                                            
                                        {/* </Grid> */}
                                    </Box>
                                    <Box display="flex"
                                        container 
                                        direction="row" 
                                        flexWrap="nowrap"
                                        alignContent="center"
                                        pt={5}>
                                        <Grid item  component={Box} p={1}>
                                            <Typography variant="subtitle1" >
                                            <Box fontWeight="fontWeightBold"> Year</Box> 2010
                                            </Typography>
                                        </Grid>
                                        <Grid item component={Box} p={1}>
                                            <Typography variant="subtitle1">
                                            <Box fontWeight="fontWeightBold"> Fuel</Box>Diesel
                                            </Typography>
                                        </Grid>
                                        <Grid item component={Box} p={1}>
                                            <Typography variant="subtitle1">
                                            <Box fontWeight="fontWeightBold">Gear</Box> Automatic
                                            </Typography>
                                        </Grid>
                                        <Grid item component={Box} p={1}>
                                            <Typography variant="subtitle1">
                                            <Box fontWeight="fontWeightBold">Km</Box> 180
                                            </Typography>
                                        </Grid>
                                        <Grid item component={Box} p={1}>
                                            <Typography variant="subtitle1">
                                            <Box fontWeight="fontWeightBold">Body Type </Box>
                                            SUV bodyStyle
                                            </Typography>
                                        </Grid>
                                        <Grid item component={Box} p={1}>
                                            <Typography variant="subtitle1">
                                            <Box fontWeight="fontWeightBold">Engine Power</Box>4000KPW
                                            </Typography>
                                        </Grid>
                                    </Box>
                                </Grid>
                                <Box className={classes.favBox} container p={3}  direction="row" >
                                
                                <ToggleButton
                                        value="check"
                                        selected={selected}
                                        variant="contained"
                                        onChange={() =>{
                                            setSelected(!selected)
                                        }}
                                        style={{ borderRadius: 50, margin: 10, border: "5" }}
                                        >
                                        <FavoriteBorderIcon />
                                    </ToggleButton>
                                    <Typography 
                                    onClick={()=> {
                                        setId(carArray._id)
                                        id && history.push(generatePath("/cars/:id", { id }))}}
                                    >
                                        <Typography ><Box color="#ceba97" pt={2} >See More Details</Box></Typography>
                                    </Typography>
                                </Box>
                            </Grid>
                        </CardActionArea>
                </Paper>
                </div>
                </Box>
            </Container>
            
        </div>
    )
}

export default ListCard;