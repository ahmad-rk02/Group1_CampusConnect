import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import "./Footer.css";
import Gec from '../assets/Gec.png';

const noUnderlineStyle = {
  textDecoration: 'none',
};

function Footerend() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=19.96&longitude=79.29&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m';

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setWeatherData(data.current);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <footer className="text-light" style={{ margin: '0', backgroundColor: '#102C57', width: '100vw' }}>
      <div className="container1">
        <div className="row">
          {/* College Info Compartment */}
          <div className="col-md-4 text-center mt-3 mb-3">
            <img src={Gec} alt="College Logo" width="85" height="110" />
            <br />
            <br />
            <h6 style={{ color: 'white' }}>Government College of Engineering Chandrapur</h6>
            <br />
            <p className="mb-1">Ballarpur Bypass Road, Babupeth, Chandrapur</p>
            <p className="mb-1 text-white">Phone: <a href="tel:07172-22734" className='text-white text-decoration-none'>07172-227334</a></p>
            <p className="mb-1 text-white">Website: <a href="#" className="text-white text-decoration-none">www.gcoec.ac.in</a></p>
            <p className="mb-1 text-white">Email: <a href="mailto:collegeemail@example.com" className="text-white text-decoration-none">office.gcoecchandrapur@dtemaharashtra.gov.in</a></p>
            <div className="mt-3">
              <a href="#" className="me-3 text-white"><FaFacebook /></a>
              <a href="#" className="me-3 text-white"><FaTwitter /></a>
              <a href="#" className="me-3 text-white"><FaInstagram /></a>
              <a href="#" className="me-3 text-white"><FaLinkedin /></a>
            </div>
          </div>

          {/* Quick Links Compartment */}
          <div className="col-md-4 d-flex flex-column justify-content-center">
            <div className="row text-center">
              <div className="col text-white" style={noUnderlineStyle}>
                <h5>Quick Links</h5>
                <ul className="list-unstyled text-white">
                  <li><a href="/alumni">Alumni</a></li>
                  <li><a href="https://www.gcoec.ac.in/gcoec/PDF/NBA/GCOEC%20NBA%20ME%20and%20IE%2011-11-2022-12-25-26.pdf">NBA Documents</a></li>
                  <li><a href="https://www.gcoec.ac.in/gcoec/PDF/EOA%20REPORT%202023-24%20R.PDF">AICTE EOA</a></li>
                  <li><a href="https://www.gcoec.ac.in/gcoec/PDF/2022/NIRF-Data-2023.pdf">NIRF</a></li>
                  <li><a href="https://dte.maharashtra.gov.in/">DTE</a></li>
                  <li><a href="https://rdtenagpur.org.in/">RO, Nagpur</a></li>
                </ul>
              </div>
              <div className="col text-white" style={noUnderlineStyle}>
                <h5>Quick Links</h5>
                <ul className="list-unstyled text-white">
                  <li><a href="https://www.gcoec.ac.in/gcoec/app_documents/GEC%20Brochure%20_2020-21.pdf">Info Brochure</a></li>
                  <li><a href="https://www.gcoec.ac.in/gcoec/PDF/2022/Audit-Report-2021.PDF">Audit Report</a></li>
                  <li><a href="https://www.gcoec.ac.in/gcoec/PDF/Procurement/Impact_analysis_PROCUREMENT_UNDER_TEQIP.pdf">TEQIP</a></li>
                  <li><a href="Group1_CampusConnect/boyshostel">Facilities</a></li>
                  <li><a href="https://www.aicte-india.org/">AICTE</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Chandrapur Compartment */}
          <div className="col-md-4 d-flex flex-column justify-content-center text-center">
            <div>
              <h5 style={{ color: 'white' }}>Chandrapur</h5>
              <br />
              <div className="d-flex justify-content-center">
                <p className="me-3">Day: {new Date().toLocaleDateString(undefined, { weekday: 'long' })}</p>
                <p>Time: {new Date().toLocaleTimeString()}</p>
              </div>
              <div className="d-flex justify-content-center">
                <p className="me-3">Temperature: {weatherData?.temperature_2m ? `${weatherData.temperature_2m}°C` : 'Loading...'}</p>
                <p>Climate: {weatherData?.weather_code ? `${weatherData.weather_code}` : 'Loading...'}</p>
              </div>
              <div className="d-flex justify-content-center">
                <p className="me-3">Humidity: {weatherData?.relative_humidity_2m ? `${weatherData.relative_humidity_2m}%` : 'Loading...'}</p>
                <p>Wind: {weatherData?.wind_speed_10m ? `${weatherData.wind_speed_10m} mph` : 'Loading...'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Developed by: Team 'The Acquirers'</p>
        <p>Copyright © 2024 Government College Of Engineering Chandrapur. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footerend;
