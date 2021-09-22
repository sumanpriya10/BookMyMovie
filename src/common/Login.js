import React, { Component } from "react";
import "./Login.css";
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
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const card = (
    <React.Fragment>
      <CardContent>
        <Typography color="primary"  component="div" align = "left">
          LOGIN
        </Typography>
        <Typography  component="div" align = "left" padding = "10px">
        <TextField id="standard-basic" label="UserName *" variant="standard"/>
        </Typography>
        <Typography  component="div" align = "left" padding = "10px">
        <TextField id="standard-basic" label="Password *" variant="standard"/>
        </Typography>              
        <Typography variant="h7" component="div" align ="center"> 
        <Button variant="contained" color="primary" 
            style={{ height: 40, align : 'right'}}>Apply</Button>
    </Typography>
      </CardContent>
    </React.Fragment>
  );

   

const Login = function()
{
   return (
    <div style={{textAlign: 'center', float:'center', height:600}}>
    <Grid container spacing={0} direction="column" alignItems="center" justify="center" margin="20px auto"
      style={{width:400, height:600 }}
    >
      <Grid item xs={3}>
        <Card variant="outlined">{card}</Card>
      </Grid>
    </Grid>
    </div>


   );
}

export default Login;