
import React from "react";
import {NavLink} from 'react-router-dom';
import { alpha } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import {Button} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import OxusCare from "./oxusCare.js";
import logo from "../../assets/logomain.png";
import {useTheme} from "@mui/material";
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
   navmenu: {
      marginRight: theme.spacing(6),
      
       color: "#ddd"
      // color:"red",
     
   },
   grow: {
      flexGrow: 1,
      
   },
   menuButton: {
      marginRight: theme.spacing(2),
      
   },
   title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
         display: "block",
      }, 
      
   },
   search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
         backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
         marginLeft: theme.spacing(3),
         width: "auto",
      },
   },
   searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
   },
   inputRoot: {
      color: "inherit",
   },
   inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
         width: "20ch",
      },
   },
   sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
         display: "flex",
      },
   },
   sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
         display: "none",
      },
   },
   appBar:{
      background:theme.palette.primary.main,
      
   }
}));

export default function Navbar() {
   const theme = useTheme();
   const classes = useStyles(theme);
   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

   const [openCare, setOpenCare] = React.useState(false);

   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

   const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
   };

   const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
   };


   const mobileMenuId = "primary-search-account-menu-mobile";
   const renderMobileMenu = (
      <Menu
         anchorEl={mobileMoreAnchorEl}
         anchorOrigin={{ vertical: "top", horizontal: "right" }}
         id={mobileMenuId}
         keepMounted
         transformOrigin={{ vertical: "top", horizontal: "right" }}
         open={isMobileMenuOpen}
         onClose={handleMobileMenuClose}
      >
         <NavLink underline="none" to="/">
            <MenuItem>
               <p>Home</p>
            </MenuItem>
         </NavLink>
         <NavLink underline="none" to="/Inventory">
            <MenuItem>
               <p>Inventory</p>
            </MenuItem>
         </NavLink>
         <NavLink underline="none" to="/About">
            <MenuItem>
               <p>About</p>
            </MenuItem>
         </NavLink>
         <NavLink underline="none" to="/Contact">
            <MenuItem>
               <p>Contact</p>
            </MenuItem>
         </NavLink>
         <NavLink underline="none"onClick={() => setOpenCare(true)} to="#">
            <MenuItem>
               <p>Oxus Car Care</p>
            </MenuItem>
         </NavLink>
         <MenuItem>
            <SearchIcon />
         </MenuItem>
      </Menu>
   );

   return (
      <div className={classes.grow}>
         <AppBar className={classes.appBar}>
            <Toolbar>
            <NavLink to="/">
               <Typography variant="h6" noWrap>
                  <img src={logo} 
                  height="50" 
                  alt="Ginx" />
               </Typography>
            </NavLink>
               <div className={classes.grow} />
               <div className={classes.sectionDesktop}>
                  <Typography className={classes.navmenu}>
                     <NavLink
                        style={{color:"#ddd",marginRight: theme.spacing(6),textDecoration:"none"}}
                        to="/"
                     >
                        {" "}
                        Home{" "}
                     </NavLink>
                     <NavLink
                        style={{color:"#ddd",marginRight: theme.spacing(6),textDecoration:"none"}}
                        to="/Inventory"
                     >
                        {" "}
                        Inventory{" "}
                     </NavLink>
                     <NavLink
                        style={{color:"#ddd",marginRight: theme.spacing(6),textDecoration:"none"}}
                        to="/About"
                     >
                        {" "}
                        About{" "}
                     </NavLink>
                     <NavLink
                        style={{color:"#ddd",marginRight: theme.spacing(6),textDecoration:"none"}}
                        to="/Contact"
                     >
                        {" "}
                        Contact{" "}
                     </NavLink>
                     <Button
                        style={{color:"#ddd",marginRight: theme.spacing(6),textDecoration:"none"}}
                        onClick={() => setOpenCare(true)}
                        
                     >
                        {" "}
                        Ginx Car Care{" "}
                     </Button>
                     <NavLink
                        style={{color:"#ddd",marginRight: theme.spacing(6),textDecoration:"none"}}
                        to="/Inventory"
                     >
                        {" "}
                        <SearchIcon />{" "}
                     </NavLink>
                  </Typography>
               </div>
               <div className={classes.sectionMobile}>
                  <IconButton
                     aria-label="show more"
                     aria-controls={mobileMenuId}
                     aria-haspopup="true"
                     onClick={handleMobileMenuOpen}
                     color="inherit"
                  >
                     <MoreIcon />
                  </IconButton>
               </div>
            </Toolbar>
         </AppBar>
         {renderMobileMenu}
         <OxusCare
            openCare={openCare}
            setOpenCare={setOpenCare} >

         </OxusCare>
      </div>

   );
}
