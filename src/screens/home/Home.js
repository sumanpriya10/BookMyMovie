import React from 'react';
import './Home.css';
import Header from '../../common/Header';
import { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// import local movies from assests
import war from '../../assets/war.jpg'; // with import
import logo from '../../assets/images.jfif'; // with import
import drona from '../../assets/drona.jfif'; // with import
import radhe from '../../assets/radhe.jfif'; // with import
import adi from '../../assets/adi.jfif'; // with import
import takht from '../../assets/takht.jfif'; // with import
import bhuj from '../../assets/bhuj.jfif'; // with import
import bach from '../../assets/bach.jfif'; // with import
import ghost from '../../assets/ghost.jfif'; // with import

import { createTheme } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';

const theme = createTheme({
  palette: {
    primary: blue,
  },
});



  const card = (
    <React.Fragment>
      <CardContent>
        <Typography color="primary" variant="h5" component="div" align = "left">
          FIND MOVIES BY:
        </Typography>
        <Typography variant="h5" component="div" align = "left">
        <TextField id="standard-basic" label="Movie Name" variant="standard" />
        </Typography>
        <Typography variant="h5" component="div" align = "left"> 
        <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
        <InputLabel id="demo-simple-select-standard-label">Genre</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Genre"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </Typography>
      <Typography variant="h5" component="div" align ="left"> 
        <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
        <InputLabel id="demo-simple-select-standard-label">Artists</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Artists"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </Typography>
      <Typography variant="h3" component="div" align ="left"> 
      <TextField
        id="datetime-local"
        label="Release Date Start"
        type="datetime-local"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />    
      </Typography>
      <Typography variant="h3" component="div" align ="left"> 
      <TextField
        id="datetime-local"
        label="Release Date End"
        type="datetime-local"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />    
      </Typography>
      <Typography variant="h7" component="div" align ="center"> 
        <Button 
    variant="contained" 
    color="primary" 
    style={{ height: 40, align : 'right'}}>Apply</Button>
    </Typography>
      </CardContent>
    </React.Fragment>
  );

  
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    marginTop: 0,
    //   maxWidth: "100%"
  },
  gridList: {
    flexWrap: 'nowrap',
    width: 1500,
    height: 200,
    padding:5
  }
}));



// import logo from '../../assets/images.jfif'; // with import

const tileData = [
{
  img : war,
  cols: .96,
},
{
  img: logo,
  //title: 'title'
  cols: .96,
},
{
  img: drona,
  //title: 'title'
  cols: .96,
},
{
  img: radhe,
  //title: 'title'
  cols: .96,
},
{
  img: adi,
  //title: 'title'
  cols: .96,
},
{
  img: takht,
  //title: 'title'
  cols: .96,
}
];  

const tileData1 = [
  {
    img: bhuj,
    cols: .96,
  },
  {
    img: ghost,
    //title: 'title'
    cols: .96,
  },
  {
    img: bach,
    //title: 'title'
    cols: .96,
  }
  ];  


export default function Home() {
    {
        const classes = useStyles();  
        return (
            <div>
                <Header />
                <div style={{textAlign: 'center', marginBottom:0, padding:0, background:' #ff9999', color:'#fff'}}>
                    Upcoming movies 
                </div>
                <div className={classes.root}>
                    <GridList className={classes.gridList} cols={6}>
                        {tileData.map((tile) => (
                            <GridListTile key={tile.img}>
                                      
                              
          <img
            src={`${tile.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${tile.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={tile.title}
            loading="lazy"
          />
                            </GridListTile>
                        )
                    )
                }
                </GridList>
                </div>
                <div style={{textAlign: 'right', float:'left'}}>
                <GridList>
                        {tileData1.map((tile) => (
                            <GridListTile key={tile.img}>
                            <img src={tile.img} width="100" height="150" alt={tile.title} />            
                            </GridListTile>
                        )
                    )
                }
                </GridList>
                  </div>
            <div style={{textAlign: 'right', float:'right', height:600}}>
              <Grid container spacing={0} direction="column" alignItems="center" justify="center"
                style={{width:400, height:600 }}
              >
                <Grid item xs={3}>
                  <Card variant="outlined">{card}</Card>
                </Grid>
              </Grid>
            </div>
        </div>
        )
    }
}

//export default Home;