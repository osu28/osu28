import React from "react";
import ReactPlayer from 'react-player'
import { Player } from 'video-react';

export const Work = () => {
    return (
      <div>
        <div className="work_description">
          <h2>Work</h2>
          <p>My experience is spread across a multitude of technical fields including machine learning and software engineering. </p>
          <p>To the right are some of the places I have worked at.</p>
          <p>I enjoy working on projects with a sizable impact. One of my most memorable experiences was using AR and ML to allow users to track objects behind walls (irl wall hack).</p>
          <ReactPlayer controls width='auto' height='20ex' url='https://youtu.be/6FUOHGBeI5Y'/>
          {/* <Player>
            <source src="beholder_demo.mp4" />
          </Player> */}
          {/* <video className="beholder_demo" controls>
            <source src="beholder_demo.mp4" type="video/mp4" codecs="avc1.4d002a, mp4a.40.2">
            <source src="beholder_demo.webm" type="video/webm">
            Your browser does not support the video tag.
          </video> */}
          <p>Again feel free to peek at my resume for a more detailed description.</p>
        </div>
        <div className="work_history">
          <h4>Adaptive Biotechnologies</h4>
          <p>Software Engineer Intern, <i>Summer 2022</i></p>
          <h4>CACI</h4>
          <p>Machine Learning Intern, <i>Spring 2022</i></p>
          <p>Software Engineer Intern, <i>Summer 2021</i></p>
          <h4>Purdue x Masco</h4>
          <p>Data Science Undergrad Researcher, <i>Freshman Year</i></p>
          <h4>National Institutes of Health</h4>
          <p>Engineering Intern, <i>Summer 2019</i></p>
        </div>
      </div>
    );
  };