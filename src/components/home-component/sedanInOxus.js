import React, {useState, useEffect} from 'react'
import Slider from "react-slick";
import './recent.css';
import {
   Box,
   Typography,
   Paper,
   CardActionArea,
   Grid,
   CardContent,
   CardMedia,
   useMediaQuery,
   CardHeader, Divider
} from '@mui/material';
import img from "../../assets/v8.jfif";
import { makeStyles } from '@mui/styles';
// import {  useTheme } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { createUseStyles, useTheme } from 'react-jss';

import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { useNavigate, generatePath } from 'react-router-dom';
import { ThemeContext } from 'theming';


const useStyles = createUseStyles((theme)=>({
   root: {
      width: "100%",
      height: "400px",
      paddingBottom: "50px",
      alignContent: "center"
   },
   paper: {
      borderRadius: 10,
      margin: 0,
      padding: 0,
   },
   button:{
      background:theme.colorPrimary,
   },
   img: {
      height: 200,
      [theme.breakpoints.down(840)]:{
         width: "100%",
      },
      [theme.breakpoints.up('sm')]:{
         width: 300,
      },
   },
}));


function SedanInOxus() {

   
   const classes = useStyles();
   const theme = useTheme();
   
   const matches = useMediaQuery(theme.breakpoints.down(700));

   const NextArrow = ({ onClick }) => {
      return (
         <div className="arrow next" onClick={onClick}>
            <KeyboardArrowRightIcon />
         </div>
      )
   }

   const PrevArrow = ({ onClick }) => {
      return (
         <div className="arrow prev" onClick={onClick}>
            <KeyboardArrowLeftIcon />
         </div>
      )
   }

   const [imageIndex, setImageIndex] = React.useState(0);
   
   const [ id, setId ] = useState();
   // const history = useNavigate();
  

   //implement axios once i read the documentation
   //const [ list, setList ] = useState([]);


   // useEffect(() => {
   //    var url = `/home/body_style/sedan`;
   //    axios
   //    .get(url)
   //    .then(res => {
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
         model:"V8 latest"
      },
      {
         name:"Landcruiser",
         img:"v8 image",
         company:"Facebook",
         model:"TX latest"
      }
      
      
   ];

   var settings = {
      centerMode: true,
      infinite: true,
      centerPadding: 0,
      slidesToShow: 5,
      speed: 300,
      autoplay: false,
      autoplaySpeed: 3000,
      lazyLoad: true,
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
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               initialSlide: 2
            }
         },
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
      <div className='recent'>
         <Slider {...settings}>
            {list.map((item, idx) => (
               <div key={uuidv4()} className={idx === 0 ? "slide activeSlide" : "slide"}>
                  {/* <img src={img} alt={img} /> */}
                  <Paper className={classes.paper}>
                     <CardActionArea>
                        <CardHeader title={
                           <Typography align="center" variant="h6" >
                              <Box fontWeight="fontWeighBold" >
                              {item.company}{" "}{item.model}
                              </Box>
                           </Typography>
                        } /><Divider/>
                        {/* <CardMedia image={img}  /> */}
                        <CardContent>
                           <img className={classes.img}  src={img} alt="company" />
                           </CardContent>
                        
                        <Divider/>
                        
                        <CardContent>
                           <Box display="flex">
                              <Grid item container justifyContent="center">
                                 <Box fontWeight="fontWeightMedium" >
                                    <Typography variant={matches ? 'subtitle1': 'caption'}>Full Price&nbsp;</Typography>
                                 </Box>
                                 <Box >
                                    <Typography variant={matches ? 'subtitle1': 'caption'}> 10000</Typography>
                                 </Box>
                              </Grid>
                              <Grid item container justifyContent="center">
                                 <Box fontWeight="fontWeightMedium" >
                                    <Typography variant={matches ? 'subtitle1': 'caption'}>Monthly&nbsp; </Typography>
                                 </Box>
                                 <Box>
                                    <Typography variant={matches ? 'subtitle1': 'caption'}> 30000</Typography>
                                 </Box>
                              </Grid>
                           </Box>
                           {(idx === imageIndex) ?
                              <Grid container justifyContent="center">
                                 <Typography align="center" variant={matches ? 'subtitle1': 'caption'}
                                 // onClick={()=> {
                                 //    setId(item._id)
                                 //    id && history.push(generatePath("/cars/:id", { id }))}}
                                 >
                                    View details
                                 </Typography>
                              </Grid>
                              : ""}
                        </CardContent>
                     </CardActionArea>
                  </Paper>

               </div>
            ))}
         </Slider>
      </div>
   )
}

export default SedanInOxus;