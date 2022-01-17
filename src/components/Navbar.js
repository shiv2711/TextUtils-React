import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Navbar(props) {

    const [myStyle, setMyStyle] = useState({
            color: '#331515',
            backgroundColor: '#d0adad',
            border: '2px solid #270707' 
    });

    const toggle_light_mode = ()=> {
        let span = document.getElementById('span');
        if(span.style.left === '38px') {
            span.style.left = '5px';
            setMyStyle({
                color: '#331515',
                backgroundColor: '#d0adad',
                border: '2px solid #270707' 
            });
            // document.title = "TextUtil - LightMode";
        }
        else {
            span.style.left = '38px';
            setMyStyle({
                color: '#a88787',
                border: '2px solid #542626',
                backgroundColor: '#3719199c'
            });
            // document.title = "TextUtil - DarkMode";
        }
        props.toggleMode();
    };


    return (
        <>
        <div className="navbar" id="navbar" >
            <div className="logo">
                <img className="img" src="./logo1.png" alt="LOGO"/>
            </div>
            <Link to="/" className="appname" >{props.title} </Link>
            <Link to="/" className="field" style={myStyle}>HOME</Link>
            {/* <Link to="/" className="field" style={myStyle}>BLOG</Link> */}
            <Link to="/About" className="field" style={myStyle}>{props.abouttxt}</Link>
            <Link to="/Contact" className="field" style={myStyle}>CONTACT</Link>
            {/* <Link to="/" className="field" style={myStyle}>LOCATION</Link> */}
            {/* <input className="search" id="searchTxt" type="search" placeholder="Search" aria-label="Search"/>
            <button className="searchbtn" type="submit">SEARCH</button> */}
            <div className="tglBtn">
	            <button className="light-mode-button" id="tlgBtn" aria-label="Toggle Light Mode" onClick={toggle_light_mode}>
	                <span></span>
	                <span id='span'></span>
	            </button> 
            </div>
        </div>
        </>
    );
}

Navbar.propTypes = { 
    title : PropTypes.string.isRequired, 
    abouttxt : PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title : "Set Title Here",
    abouttxt : 'ABOUT US'
};