import React, {Component} from 'react';
import { useState } from 'react';
import './Header.css';
import { Redirect, useHistory } from 'react-router';
import Login from './Login';


const Header = function()
{
    const [active, setActive] = useState("HomePageState");

    if (active == "LoginPageState")        
        return <Redirect to='/login'  />

        
    return ( 
        <div id="login" style={{textAlign: 'end', padding:8, background:'#222', color:'#fff'}}>
        <button onClick={() => setActive("LoginPageState")}>Login</button>
        </div>
    );
}

export default Header;  