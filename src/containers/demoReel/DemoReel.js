import React, { Component } from "react";
import "./DemoReel.css";
import { demoReel } from "../../portfolio";
import { Fade } from "react-reveal";

class DemoReel extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="certs">
        <div className="reel-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="reel-header" style={{ color: theme.text }}>
              Vidéo showcase
            </h1>
          </Fade>
        </div>
        <div className="reel-body-div">
          <iframe title="demo-reel" src={demoReel.source}></iframe>
        </div>
      </div>
    );
  }
}

export default DemoReel;
