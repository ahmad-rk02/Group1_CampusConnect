import React, { useEffect, useState } from 'react';

const WeatherData = () => {
  const [weatherData, setWeatherData] = useState(null); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m';

    // Fetch the API data
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setWeatherData(data.current);
      })
      .catch(error => {
        setError(error.message); 
      });
  }, []); 

  return (
    <div>
      
      {error ? (
        <p>Error: {error}</p>
      ) : weatherData ? (
        <div>

          <div className="col-md-4 d-flex flex-column justify-content-center text-center">
            <div>
              <h5 style={{ color: 'white' }}>Chandrapur</h5>
              <br />
              <div className="d-flex justify-content-center">
                <p className="me-3">Day: {new Date().toLocaleDateString(undefined, { weekday: 'long' })}</p>
                <p>Time: {new Date().toLocaleTimeString()}</p>
              </div>
              <div className="d-flex justify-content-center">
                <p className="me-3">Temperature: {weatherData.temperature_2m ? `${weatherData.temperature_2m}°C` : 'Loading...'}</p>
                <p>Climate: {weatherData.weather_code ? `${weatherData.weather_code}°C` : 'Loading...'}</p>
              </div>
              <div className="d-flex justify-content-center">
                <p className="me-3">Humidity: {weatherData.relative_humidity_2m ? `${weatherData.relative_humidity_2m}%` : 'Loading...'}</p>
                <p>Wind: {weatherData.wind_speed_10m ? `${weatherData.wind_speed_10m} mph` : 'Loading...'}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default WeatherData;