import React from "react";
import "./Body.css";
import economictimes from "./images/economics-times-logo-black-4a3324e2e034aff027d3d24cb735d649.svg";
import entrep from "./images/download.svg";
import gq from "./images/download (3).svg";
import cnbc from "./images/download (2).svg";
import forbes from "./images/download (1).svg";
import "./Scroll.css";
import Data from './Data'
const showBox = () => {
    console.log('hello')
  }


const Body = () => {
  return (
    <div className="body-format">
      <div className="content">True Beacon In The Media</div>
      <div>
        <div className="afi">As Feature in</div>
        <div className="image-container">
          <img src={economictimes} alt="text" />
          <img src={entrep} alt="text" />
          <img src={forbes} alt="text" />
          <img src={cnbc} alt="text" />
          <img src={gq} alt="text" />
        </div>
      </div>
      <div className="container">
        <div className="scrollbar">
          <div className="sidebar">
            <div onClick={showBox} className="sidebar_link_top">
              <div className="tooltip">May 2023</div>
              
            </div>
            <div className="sidebar_link" onClick={showBox}>
              <div className="tooltip">Feb 2023</div>
            </div>

            <div className="sidebar_link" onClick={showBox}>
              <div className="tooltip">Jan 2023</div>
            </div>

            <div className="sidebar_link" onClick={showBox}>
              <div className="tooltip">Nov 2022</div>
            </div>

            <div className="sidebar_link" onClick={showBox}>
              <div className="tooltip">Sep 2022</div>
            </div>

            

            <div className="sidebar_link" onClick={showBox}>
              <div className="tooltip">Aug 2022</div>
            </div>
            <div className="sidebar_link" onClick={showBox}>
              <div className="tooltip">Jun 2022</div>
            </div>

            <div className="sidebar_link" onClick={showBox}>
              <div className="tooltip">Apr 2022</div>
            </div>

            <div className="sidebar_link" onClick={showBox}>
              <div className="tooltip">Feb 2022</div>
            </div>

            <div className="sidebar_link" onClick={showBox}>
              <div className="tooltip">Dec 2021</div>
            </div>

            <div className="sidebar_link" onClick={showBox}>
              <div className="tooltip">Jul 2021</div>
            </div>
            <div className="sidebar_link" onClick={showBox}>
              <div className="tooltip">May 2021</div>
            </div>

            <div className="sidebar_link" onClick={showBox}>
              <div className="tooltip">Mar 2021</div>
            </div>

            <div className="sidebar_link" onClick={showBox}>
              <div className="tooltip">Jan 2021</div>
            </div>

            <div className="sidebar_link" onClick={showBox}>
              <div className="tooltip">Oct 2020</div>
            </div>
            <div className="sidebar_link" onClick={showBox}>
              <div className="tooltip">Aug 2020</div>
            </div>

            <div className="sidebar_link" onClick={showBox}>
              <div className="tooltip">May 2020</div>
            </div>

            <div className="sidebar_link" onClick={showBox}>
              <div className="tooltip">Jan 2019</div>
            </div>

            <div className="sidebar_link" onClick={showBox}>
              <div className="tooltip">May 2018</div>
            </div>

            <div className="sidebar_link_bottom" onClick={showBox}>
              <div className="tooltip">Mar 2018</div>
            </div>
          </div>
        </div>
        <div className="mediadeet">

          <div className="box">
            <Data />
            <Data />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
