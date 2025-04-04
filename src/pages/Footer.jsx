import React, { useState, useEffect, useRef } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaUsers } from 'react-icons/fa';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import Gec from '../assets/Gec.png';

function Footerend() {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherError, setWeatherError] = useState(null);
  const [visitorCount, setVisitorCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const hasIncremented = useRef(false);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // Fetch weather data
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=19.96&longitude=79.29&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto';
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`Weather API error: ${response.status}`);
        const data = await response.json();
        setWeatherData(data.current);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setWeatherError('Weather data unavailable');
        setWeatherData({
          temperature_2m: 28.5,
          relative_humidity_2m: 65,
          weather_code: 1,
          wind_speed_10m: 12
        });
      }
    };
    fetchWeatherData();
  }, []);

  // Update visitor count (fixed to increment only once)
  useEffect(() => {
    const updateVisitorCount = async () => {
      try {
        // Check ref and session storage to prevent duplicate increments
        if (!hasIncremented.current && !sessionStorage.getItem('hasCountedVisitor')) {
          hasIncremented.current = true;
          sessionStorage.setItem('hasCountedVisitor', 'true');

          const response = await fetch(`${API_BASE_URL}/api/visitors`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ increment: true }),
          });

          if (!response.ok) throw new Error('Failed to update visitor count');
          
          const updatedData = await response.json();
          setVisitorCount(updatedData.count);
        } else {
          // If already counted, just fetch current count
          const response = await fetch(`${API_BASE_URL}/api/visitors`);
          const data = await response.json();
          setVisitorCount(data.count);
        }
      } catch (error) {
        console.error('Error with visitor count:', error);
        // Fallback to localStorage
        const localCount = localStorage.getItem('visitorCount') || 0;
        if (!hasIncremented.current) {
          const newCount = parseInt(localCount) + 1;
          localStorage.setItem('visitorCount', newCount.toString());
          setVisitorCount(newCount);
          hasIncremented.current = true;
        } else {
          setVisitorCount(parseInt(localCount));
        }
      } finally {
        setIsLoading(false);
      }
    };

    updateVisitorCount();
  }, [API_BASE_URL]);

  // Weather code to text mapping
  const getWeatherCondition = (code) => {
    const weatherCodes = {
      0: 'Clear sky', 1: 'Mainly clear', 2: 'Partly cloudy', 3: 'Overcast',
      45: 'Fog', 48: 'Depositing rime fog', 51: 'Light drizzle', 53: 'Moderate drizzle',
      55: 'Dense drizzle', 56: 'Light freezing drizzle', 57: 'Dense freezing drizzle',
      61: 'Slight rain', 63: 'Moderate rain', 65: 'Heavy rain',
      66: 'Light freezing rain', 67: 'Heavy freezing rain',
      71: 'Slight snow fall', 73: 'Moderate snow fall', 75: 'Heavy snow fall',
      77: 'Snow grains', 80: 'Slight rain showers', 81: 'Moderate rain showers',
      82: 'Violent rain showers', 85: 'Slight snow showers', 86: 'Heavy snow showers',
      95: 'Thunderstorm', 96: 'Thunderstorm with slight hail',
      99: 'Thunderstorm with heavy hail'
    };
    return weatherCodes[code] || 'Partly cloudy';
  };

  const openExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="text-light" style={{ margin: '0', backgroundColor: '#102C57', width: '100%' }}>
      <div className="container1">
        <div className="row">
          {/* College Info Compartment */}
          <div className="col-md-4 text-center mt-3 mb-3">
            <img src={Gec} alt="College Logo" width="85" height="110" className="img-fluid" />
            <br />
            <br />
            <h6 style={{ color: 'white' }}>Government College of Engineering Chandrapur</h6>
            <br />
            <p className="mb-1">Ballarpur Bypass Road, Babupeth, Chandrapur</p>
            <p className="mb-1 text-white">Phone: <a href="tel:07172-22734" className='text-white text-decoration-none'>07172-227334</a></p>
            <p className="mb-1 text-white">Website: <a href="https://www.gcoec.ac.in" className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">www.gcoec.ac.in</a></p>
            <p className="mb-1 text-white">Email: <a href="mailto:office.gcoecchandrapur@dtemaharashtra.gov.in" className="text-white text-decoration-none">office.gcoecchandrapur@dtemaharashtra.gov.in</a></p>
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
              <div className="col text-white">
                <h5>Quick Links</h5>
                <ul className="list-unstyled text-white">
                  <li>
                    <button 
                      className="btn btn-link text-white p-0 text-decoration-none" 
                      onClick={() => openExternalLink('https://alumni-gcoec.vercel.app/')}
                    >
                      Alumni
                    </button>
                  </li>
                  <li>
                    <button 
                      className="btn btn-link text-white p-0 text-decoration-none" 
                      onClick={() => openExternalLink('https://www.gcoec.ac.in/gcoec/PDF/NBA/GCOEC%20NBA%20ME%20and%20IE%2011-11-2022-12-25-26.pdf')}
                    >
                      NBA Documents
                    </button>
                  </li>
                  <li>
                    <button 
                      className="btn btn-link text-white p-0 text-decoration-none" 
                      onClick={() => openExternalLink('https://www.gcoec.ac.in/gcoec/PDF/EOA%20REPORT%202023-24%20R.PDF')}
                    >
                      AICTE EOA
                    </button>
                  </li>
                  <li>
                    <button 
                      className="btn btn-link text-white p-0 text-decoration-none" 
                      onClick={() => openExternalLink('https://www.gcoec.ac.in/gcoec/PDF/2022/NIRF-Data-2023.pdf')}
                    >
                      NIRF
                    </button>
                  </li>
                  <li>
                    <button 
                      className="btn btn-link text-white p-0 text-decoration-none" 
                      onClick={() => openExternalLink('https://dte.maharashtra.gov.in/')}
                    >
                      DTE
                    </button>
                  </li>
                  <li>
                    <button 
                      className="btn btn-link text-white p-0 text-decoration-none" 
                      onClick={() => openExternalLink('https://rdtenagpur.org.in/')}
                    >
                      RO, Nagpur
                    </button>
                  </li>
                </ul>
              </div>
              <div className="col text-white">
                <h5>Quick Links</h5>
                <ul className="list-unstyled text-white">
                  <li>
                    <button 
                      className="btn btn-link text-white p-0 text-decoration-none" 
                      onClick={() => openExternalLink('https://www.gcoec.ac.in/gcoec/app_documents/GEC%20Brochure%20_2020-21.pdf')}
                    >
                      Info Brochure
                    </button>
                  </li>
                  <li>
                    <button 
                      className="btn btn-link text-white p-0 text-decoration-none" 
                      onClick={() => openExternalLink('https://www.gcoec.ac.in/gcoec/PDF/2022/Audit-Report-2021.PDF')}
                    >
                      Audit Report
                    </button>
                  </li>
                  <li>
                    <button 
                      className="btn btn-link text-white p-0 text-decoration-none" 
                      onClick={() => openExternalLink('https://www.gcoec.ac.in/gcoec/PDF/Procurement/Impact_analysis_PROCUREMENT_UNDER_TEQIP.pdf')}
                    >
                      TEQIP
                    </button>
                  </li>
                  <li>
                    <button 
                      className="btn btn-link text-white p-0 text-decoration-none" 
                      onClick={() => openExternalLink('/Group1_CampusConnect/boyshostel')}
                    >
                      Facilities
                    </button>
                  </li>
                  <li>
                    <button 
                      className="btn btn-link text-white p-0 text-decoration-none" 
                      onClick={() => openExternalLink('https://www.aicte-india.org/')}
                    >
                      AICTE
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Chandrapur Compartment */}
          <div className="col-md-4 d-flex flex-column justify-content-center text-center">
            <div>
              <h5 style={{ color: 'white' }}>Chandrapur</h5>
              <div className="visitor-counter mb-3">
                <FaUsers className="me-2" />
                {isLoading ? 'Loading...' : `Visitors: ${visitorCount.toLocaleString()}`}
              </div>
              <div className="d-flex flex-wrap justify-content-center weather-info">
                <p className="me-3 mb-2">Day: {new Date().toLocaleDateString(undefined, { weekday: 'long' })}</p>
                <p className="mb-2">Time: {new Date().toLocaleTimeString()}</p>
              </div>
              <div className="d-flex flex-wrap justify-content-center weather-info">
                <p className="me-3 mb-2">Temp: {weatherData?.temperature_2m ? `${weatherData.temperature_2m}°C` : '28.5°C'}</p>
                <p className="mb-2">Weather: {weatherData?.weather_code ? getWeatherCondition(weatherData.weather_code) : 'Mainly clear'}</p>
              </div>
              <div className="d-flex flex-wrap justify-content-center weather-info">
                <p className="me-3 mb-2">Humidity: {weatherData?.relative_humidity_2m ? `${weatherData.relative_humidity_2m}%` : '65%'}</p>
                <p className="mb-2">Wind: {weatherData?.wind_speed_10m ? `${weatherData.wind_speed_10m} km/h` : '12 km/h'}</p>
              </div>
              {weatherError && <p className="text-warning small">{weatherError}</p>}
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Developed by: Team 'The Acquirers'</p>
        <p>Copyright © {new Date().getFullYear()} Government College Of Engineering Chandrapur. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footerend;