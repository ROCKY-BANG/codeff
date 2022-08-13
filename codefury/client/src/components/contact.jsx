import React from "react";
import ReactPlayer from "react-player";

function Contact()
{
    return(
        <div className="video">
            <ReactPlayer url="https://www.youtube.com/watch?v=lY6icfhap2o"  style={{display:"flex",justifyContent:"center"} }/>
        </div>
    );
}

export default Contact; 