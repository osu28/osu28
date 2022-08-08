import React from "react";

export const Intro = () => {
    var github = <a
                    className="App-link"
                    href="https://github.com/osu28"
                    target="_blank"
                    rel="noopener noreferrer"
                    ><img src={require("../assets/github_icon.png")} className='github'></img>
                </a>
    var linkedin = <a
                    className="App-link"
                    href="https://www.linkedin.com/in/oscarsu28/"
                    target="_blank"
                    rel="noopener noreferrer"
                    ><img src={require("../assets/linkedin_icon.png")} className='linkedin'></img>
                </a>
    var gmail = <a
                    className="App-link"
                    href="mailto:oscarsu0428@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    ><img src={require("../assets/gmail_icon.png")} className='gmail'></img>
                </a>
    
    return (
        <div className="intro">
            <div className="column_intro_left">
                <h2>Hi, I'm Oscar Su</h2>
                <p>A young engineer looking to build something cool.</p>
                <p>I have a strong record of implementing technical solutions to complex problems.</p>
                {github}{linkedin}{gmail}
            </div>
            <div className="column_intro_right">
                <img src={require("../assets/headshot.png")} className='headshot'></img>
            </div>
        </div>
    );
  };