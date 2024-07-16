import React from "react";
import Header from '../../Components/Header/Header'
import Banner from '../../assets/banner.jpg'
import Match from "../../Components/Match/Match";
import './Home.scss'
import Portfolio from "../../Components/Portfolio/Portfolio";
import Services from "../../Components/Services/Services";
import Workflow from "../../Components/Workflow/Workflow";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <>
    <div className="home">
      <Header/>
      <div className="banner-div">
      <img src={Banner} className="banner" alt="banner" />
      <div className="banner-description">
        <p>RECENT PROJECT</p>
        <p>FINTRACKER</p>
        <p>DESIGN, UX, DEVELOPMENT</p>
      </div>
      </div>
      <Match />
      <Portfolio/>
      <Services/>
      <Workflow/>
      <Footer/>
      </div>
    </>
  );
};

export default Home;
