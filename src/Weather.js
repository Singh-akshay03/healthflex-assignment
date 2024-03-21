import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WeatherComponent.css';

const apiKey = '9ZJcpp4mgl6MJB28bX4nLDWg17Rea8Hb';
const apiUrl = 'https://api.tomorrow.io/v4/timelines';

const WeatherComponent = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(() => {
        if (latitude && longitude) {
            fetchData(latitude, longitude);
        }
    }, [latitude, longitude]);

    const fetchData = async (lat, long) => {
        try {
            const response = await axios.get(`${apiUrl}?location=${lat},${long}&fields=temperature,weatherCode&apikey=${apiKey}`);
            setWeatherData(response.data);
        } catch (error) {
            setError('Failed to fetch weather data');
        }
    };

    const handleLocationInput = () => {
        if (latitude && longitude) {
            fetchData(latitude, longitude);
        } else {
            setError('Please provide latitude and longitude.');
        }
    };

    const handleCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    setLatitude(latitude);
                    setLongitude(longitude);
                },
                error => {
                    setError('Geolocation permission denied.');
                }
            );
        } else {
            setError('Geolocation is not supported by this browser.');
        }
    };

    if (error) return <div className="error">Error: {error}</div>;

    return (
        <div className="weather-container">
            <h2 className="title">Real-Time Weather</h2>
            <div className="input-container">
                <div className="input-group">
                    <label htmlFor="latitude"> Latitude:</label>
                    <input type="text" id="latitude" className="input" value={latitude} onChange={e => setLatitude(e.target.value)} />
                </div>
                <div className="input-group">
                    <label htmlFor="longitude">Longitude:</label>
                    <input type="text" id="longitude" className="input" value={longitude} onChange={e => setLongitude(e.target.value)} />
                </div>
                <button className="button" onClick={handleLocationInput}>Fetch Weather by Location</button>
                <button className="button" onClick={handleCurrentLocation}>Use Current Location</button>
            </div>
            {weatherData && (
                <div className="weather-info">
                    <p>Temperature: {weatherData.data.timelines[0].intervals[0].values.temperature}</p>
                    <p>Weather Description: {weatherData.data.timelines[0].intervals[0].values.weatherCode}</p>
                </div>
            )}
        </div>
    );
};

export default WeatherComponent;
