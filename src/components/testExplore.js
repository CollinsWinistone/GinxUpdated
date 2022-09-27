import React from 'react'
import Slider from "react-slick";
import {
   Box,
   Grid,
   Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import './explore.css';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import car1 from "./home-component/car3.png";
import {useTheme} from '@mui/material';
import car01 from "./home-component/car4.png";

const useStyles = createUseStyles((theme) => ({
   root: {
      width: "100%",
      paddingTop: "1rem",
      height: "600px",
      background:"yellow"
   }
}))

function ExploreCar() {

   const theme = useTheme();
   const classes = useStyles(theme);

   const NextArrow = ({ onClick }) => {
      return (
         <div className="arr nxt" onClick={onClick}>
            <KeyboardArrowRightIcon />
         </div>
      )
   }

   const PrevArrow = ({ onClick }) => {
      return (
         <div className="arr prv" onClick={onClick}>
            <KeyboardArrowLeftIcon />
         </div>
      )
   }

   const [imageIndex, setImageIndex] = React.useState(0);

   // const [ list, setList ] = useState([]);

   // useEffect(() => {
   //    var url = `/home/recent`;
   //    axios
   //    .get(url)
   //    .then(res => {
   //       // console.log(res.data.data);
   //       setList(res.data.data);
   //    })
   //    .catch(err => {
   //       console.log(err)
   //    }) 
   // }, []);

   const list = [
      {
         name:"Benz",
         img:"Nice img",
         company:"Google",
         img:car1
      },
      
      
      
   ];

   var settings = {
      centerMode: true,
      infinite: true,
      centerPadding: 0,
      slidesToShow: 3,
      speed: 300,
      autoplay: true,
      autoplaySpeed: 3000,
      lazyLoad: true,
      adaptiveHeight: false,
      // dots: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (current, next) => setImageIndex(next),
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
               infinite: true,
            }
         },
         // {
         //    breakpoint: 600,
         //    settings: {
         //       slidesToShow: 2,
         //       slidesToScroll: 1,
         //       initialSlide: 2
         //    }
         // },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   };
   return (
      <div className={classes.root}>
         <Slider style={{height:"400px",background:"blue"}}>
            <div className='sld acSlide'>
            <Grid container justifyContent="center" alignItems="center" >
               <img className="image" src={car1} alt="collins motors" />   
            </Grid>

            <Typography align="center" color="primary">
               <Box fontWeight="fontWeightBold"> Ginx{" "}Landcruiser V8<br/> 2017</Box>       
            </Typography>

            </div>

         </Slider>
        
      </div>
   )
}

export default ExploreCar;