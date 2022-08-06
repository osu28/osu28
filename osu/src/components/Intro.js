import React from "react";

export const Intro = () => {
    return (
        <div>
            <div className="column_intro_left">
                <h2>Hi, I'm Oscar Su</h2>
                <p>I'm a full stack developer</p>
            </div>
            <div className="column_intro_right">
                <img src={require("../assets/headshot.png")} className='headshot'></img>
            </div>
        </div>
    );
  };