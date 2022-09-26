import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Divider from "@mui/icons-material/SafetyDivider";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import logo from "../../assets/logo-big.png";

export default function Footer() {
 return (
  <footer>
   <Box bgcolor="primary.main" color="white">
    <Container maxWidth="lg">
     <Typography>
      <Grid container spacing={10}>
       <Grid item xs={12} sm={2}>
        <img src={logo} alt={logo} style={{width:50}} />
       </Grid>
       <Grid item xs={12} sm={3}>
        <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" mb={2}>
         Our Company
        </Box>
        <Box mb={1}>
         <Link variant="body2" color="inherit" href="/">
          About Oxus Motors
         </Link>
        </Box>
        <Box mb={1}>
         <Link variant="body2" color="inherit" href="/">
          Apps For Sellers
         </Link>
        </Box>
        <Box mb={1}>
         <Link variant="body2" href="/" color="inherit">
          Sitemap
         </Link>
        </Box>
        <Box mb={1}>
         <Link variant="body2" href="/" color="inherit">
          Fraud Awareness
         </Link>
        </Box>
        <Box mb={1}>
         <Link variant="body2" href="/" color="inherit">
          Licensing and Reprints
         </Link>
        </Box>
       </Grid>
       <Grid item xs={12} sm={3}>
        <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" mb={2}>
         Buying and Selling
        </Box>
        <Box mb={1}>
         <Link href="/" variant="body2" color="inherit">
          Find a Car
         </Link>
        </Box>
        <Box mb={1}>
         <Link href="/" variant="body2" color="inherit">
          Salvage Cars
         </Link>
        </Box>
        <Box mb={1}>
         <Link href="/" variant="body2" color="inherit">
          Sell Your Car
         </Link>
        </Box>
        <Box mb={1}>
         <Link href="/" variant="body2" color="inherit">
          Car Dealers{" "}
         </Link>
        </Box>
        <Box mb={1}>
         <Link href="/" variant="body2" color="inherit">
          Car Listings{" "}
         </Link>
        </Box>
       </Grid>
       <Grid item xs={12} sm={2}>
        <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" mb={2}>
         Find Help
        </Box>
        <Box mb={1}>
         <Link href="/" variant="body2" color="inherit">
          FAQs
         </Link>
        </Box>
        <Box mb={1}>
         <Link href="/" variant="body2" color="inherit">
          Terms and Conditions
         </Link>
        </Box>
        <Box mb={1}>
         <Link href="/" variant="body2" color="inherit">
          Contact Us
         </Link>
        </Box>
       </Grid>
       <Grid item container spacing={2} direction="row" justifyContent="center" xs={12} sm={2}>
        {/* {" "} */}
        <Grid item>
        <FacebookIcon /></Grid>
        <Grid item>
        <InstagramIcon /></Grid>
        <Grid item>
        <TwitterIcon/></Grid>
        
        
       </Grid>
      </Grid>
     </Typography>
     <Divider />
     <Box textAlign="center" pt={{ xs: 2, sm: 2 }} pb={{ xs: 2, sm: 2 }}>
      ©{new Date().getFullYear()} Oxus Motors. All Rights Reserved.
     </Box>
    </Container>
   </Box>
  </footer>
 );
}
