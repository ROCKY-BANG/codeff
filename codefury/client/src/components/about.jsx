import React from "react";
import ReactPlayer from "react-player";

import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';

//icons
import {AiFillLinkedin,AiFillPhone,AiFillMail} from "react-icons/ai";

function About() {
    const styling={
        backgroundColor:"#34495e",
        color:"white"
    }
    const video={
        display:"flex",
        justifyContent:"center"
    }

    const description={
        // width:"80%",
        display:"flex",
        flexDirection:"column",

        justifyContent:"center"

        // margin:"8vh"
    }
    const fott={
        display:"flex",
        flexDirection:"column",
    }

    
    return (
        <div className="cont" style={styling}>
            <h1 style={video}>Title of start Up</h1>
            <div style={video}>
                <ReactPlayer url="https://www.youtube.com/watch?v=w3vs4a03y3I" style={{ display: "flex", justifyContent: "center" }} />
            </div>
            
            <div className="Description" style={description}>
                
                <h2>Description</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div style={fott}>
                <h3>Reach Out</h3>
                <ul style={fott}>
                    <a> <AiFillLinkedin />Linked In </a>
                    <a><AiFillMail />Mail</a>
                    <a><AiFillPhone />Phone</a>
                </ul>
            </div>
        </div>

    );
}

export default About; 