import React from 'react';
import './CIIT.css'; // Import the CSS file for custom styling
import research01 from '../assets/research-img-01.jpg';
import research02 from '../assets/research-img-02.jpg';
import research03 from '../assets/research-img-03.jpg';


const CIIT = () => {
  return (
    <div className="container-ct">
        <h3 className="text-center mb-6">CIIIT,GCOEC</h3>
      <div className="container-in row m-4">
        <div className="container-in-in col-md-4">
          <div className="image-container">
            <img src={research01} alt="Image 1" className="img-fluid" />
            <div className="small-section">
              <h5>Conveyer</h5>
            </div>
            <div className="overlay">
              <div className="overlay-text">Conveyor systems are mechanical structures that transport material from one location to another. It consists of drive mechanisms such as motors to move a transport material, commonly a belt. The material is carried by the belt and follows the belt movement to move to the target location. Additional components can include chains, rollers, pulleys, and wheels.</div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="image-container">
            <img src={research02} alt="Image 2" className="img-fluid" />
            <div className="small-section">
              <h5>Robotics</h5>
            </div>
            <div className="overlay">
              <div className="overlay-text">Robotics is a branch of engineering and science that includes electronics engineering, mechanical engineering and computer science and so on. This branch deals with the design, construction, use to control robots, sensory feedback and information processing. These are some technologies which will replace humans and human activities in coming future.</div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="image-container">
            <img src={research03} alt="Image 3" className="img-fluid" 
            />
            <div className="small-section">
              <h5>Industrial Equipments</h5>
            </div>
            <div className="overlay">
              <div className="overlay-text">Instrumentation and control engineering (ICE) is a branch of engineering that studies the measurement and control of process variables, and the design and implementation of systems that incorporate them. Process variables include pressure, temperature, humidity, flow, pH, force and speed. ICE combines two branches of engineering.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CIIT;
