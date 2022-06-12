import React from 'react';
import classes from './TopBar.module.css';
import logo from '../amazonLogo.png';

const TopBar = (props) => {
    return(
        <header>
            <nav className = {classes.Topbar}>
                <img src={logo} alt='amazonLogo'/>
            </nav>
        </header>
    )
}

export default TopBar;