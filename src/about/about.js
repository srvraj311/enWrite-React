import React, { Component } from "react";
import "./about.css";

//importing png images
import git from "./github.png";
import linkedin from "./linkedin.png";
import instagram from "./instagram.png";
import facebook from "./facebook.png";
import web from "./global.png";
class About extends Component {
  render() {
    return (
      <div className="parent-about">
        <div className="picture">
          <img src="https://res.cloudinary.com/dvmsk482x/image/upload/v1600984963/IMG_20200704_190703_200_ofopiu.jpg" />
          <div>@Srvraj311</div>
        </div>
        <div className="about">
          <div>
            enWrite is a simple note taking app that is focused on personal note
            taking and real time synchronization. Our goal is to be available on
            cross platform and support some features that were never in any of
            the note taking app.
            <br />
            Our upcoming features include a image selector for background that
            will allow users to use the app to write beautifull messages and
            save them as image with one of millions backgrounds.
            <br />
            <br />I am an Electronics and Communication Enginnering Student,
            With Great interest in Web Devlopment, Graphics Designing, Android
            Devlopment, Problem Solving and Photography.
          </div>
        </div>
        <div className="follow">
          <a href="https://www.github.com/srvraj311" target="_blank">
            <img src={git} />
          </a>
          <a href="https://www.linkedin.com/in/srvraj311" target="_blank">
            <img src={linkedin} />
          </a>
          <a href="https://www.instagram.com/srvraj311" target="_blank">
            <img src={instagram} />
          </a>
          <a href="https://www.facebook.com/srvraj311" target="_blank">
            <img src={facebook} />
          </a>
          <a href="https://www.srvraj311.com" target="_blank">
            <img src={web} />
          </a>
        </div>
      </div>
    );
  }
}

export default About;
