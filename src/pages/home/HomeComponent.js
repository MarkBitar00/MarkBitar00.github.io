import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Certifications from "../../containers/certifications/Certifications";
// import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { certifications, demoReel } from "../../portfolio";
import DemoReel from "../../containers/demoReel/DemoReel";

class Home extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        <Skills theme={this.props.theme} />
        {demoReel && <DemoReel theme={this.props.theme} />}
        {certifications.certifications.length > 0 && (
          <Certifications theme={this.props.theme} />
        )}
        {/* <Footer theme={this.props.theme} /> */}
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
