import React, { useState, useContext } from 'react';
import { Box, Select, Toolbar, FormControl, 
    Grid, MenuItem, InputLabel } from '@mui/material';
import { makeStyles} from "@mui/styles";
import {useTheme} from "@mui/material";
import ListIcon from '@mui/icons-material/List';
import AppsIcon from '@mui/icons-material/Apps';
import ToggleButton from '@mui/lab/ToggleButton';
import ToggleButtonGroup from '@mui/lab/ToggleButtonGroup';
import { InventoryContext } from '../../Context/InventoryContext/inventoryContext';
import { createUseStyles } from 'react-jss';


const useStyles = createUseStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    toggleContainer: {
        margin: theme.spacing(2, 0),
        // width: "100%",
        // alignItems: "center",
    },
    carItem: {
        display: "flex",
        height: 70,
        [theme.breakpoints.down(1200)]:{
        padding: "0px 20px",
        padding: "10px 0px",
        width: "100vw", 
        // marginLeft:"-50px"
        },
        [theme.breakpoints.up(1201)]:{
            width: 600,
        },
    },
    toolbar:{
        width: "100vw",
        // display: "block",
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

function OptionBar(props) {

    const { setAdvFilter } = useContext(InventoryContext)

    const handleCar = (event, newCar) => {
        if ( newCar != null ){
            setAdvFilter(false);
            props.passBodyStyle(newCar);
        }
    };

    const handleSort = (event, newSort) => {
        if( newSort != null ){
            props.passSort(newSort.props.value);
        }
    };

    const handleView = (event, newView) => {
        if ( newView != null ){
            props.passView(newView);
        }
    };

    const theme = useTheme();
    const classes = useStyles(theme);

    return(
        <div className={classes.root}>
            {/* <Toolbar > */}
            <Grid container
            className={classes.toolbar}
                direction="row"
                alignItems="center"
                justify="center" >
                <Grid item container alignItems="flex-end"
                justify="flex-start" className={classes.carItem}>
                    <ToggleButtonGroup
                        // className={classes.carItem}
                        value={props.bodyStyle}
                        exclusive
                        variant="text"
                        // fullwidth="true"
                        onChange={handleCar}
                    >
                        <ToggleButton  value="Luxury" style={{ borderRadius: 50, marginTop: 15, marginBottom: 15, border: 2, marginLeft: 0}}  >
                            Luxury
                        </ToggleButton>
                        <ToggleButton value="SUV" style={{ borderRadius: 50, marginTop: 15, marginBottom: 15, border: 2, marginLeft: 0 }} >
                            SUV
                        </ToggleButton>
                        <ToggleButton value="Sedan" style={{ borderRadius: 50, marginTop: 15, marginBottom: 15, border: 2, marginLeft: 0 }} >
                            Sedan
                        </ToggleButton>
                        <ToggleButton value="Sport" style={{ borderRadius: 50, marginTop: 15, marginBottom: 15, border: 2, marginLeft: 0 }} >
                            Sport
                        </ToggleButton>
                        <ToggleButton value="Coupe" style={{ borderRadius: 50, marginTop: 15, marginBottom: 15, border: 2, marginLeft: 0 }} >
                            Coupe
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
                <Grid item className={classes.toggleContainer}  >
                    <Box 
                    // style={{ width: 240}}
                    >
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Sort by:</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={props.sort}
                        onChange={handleSort}
                        >
                        
                        <MenuItem value={1} >  Recently Added</MenuItem>
                        <MenuItem value={2}>  Price: Low to High</MenuItem>
                        <MenuItem value={3}>  Price: High to Low</MenuItem>
                        
                        </Select>
                    </FormControl>
                    
                    </Box>
                </Grid>
                <Grid item >
                    <div >
                    <ToggleButtonGroup
                        value={props.view}
                        exclusive
                        variant="text"
                        onChange={handleView}
                        br={2}
                    >
                        <ToggleButton 
                        value="list"
                            // onClick={value="list"}
                            style={{ borderRadius: 50, margin: 10, border: 2 }} >
                        <ListIcon />
                        </ToggleButton>
                        <ToggleButton value="grid" style={{ borderRadius: 50, margin: 10, border: 2 }} >
                        <AppsIcon/>
                        </ToggleButton>
                        
                    </ToggleButtonGroup>
                    </div>
                </Grid>
                
            </Grid>
            {/* </Toolbar> */}
        </div>
    )
}

export default OptionBar;
// OptionBar.propTypes = {
//     car: PropTypes.object,

// }