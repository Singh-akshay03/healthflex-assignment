# Weather App

This is a simple React application that provides users with real-time and forecasted weather data. Users can input their location manually or use their current location to fetch weather information.

## Key Features

- Fetch real-time weather data using Tomorrow.io API.
- Fetch forecasted weather data using Tomorrow.io Forecast API.
- Allow users to manually input their location for weather data.
- Implement geolocation functionality to fetch weather data based on the user’s current location.

## Installation

1. Clone the repository:

git clone <repository-url>

2. Navigate into the project directory:

cd healthflex-assignment

3. Install dependencies:

npm install

4. Make yor own api key from "https://docs.tomorrow.io/reference/realtime-weather" and replace the API_KEY in the code with your api key.

## Usage

To start the development server, run:

npm start

## Components

### WeatherComponent

This component is responsible for fetching and displaying real-time weather data.

#### Key parts of the code:

- `useEffect`: Fetches real-time weather data when the component mounts.
- `fetchData`: Function to fetch weather data from Tomorrow.io API.
- `handleLocationInput`: Function to fetch weather data based on user-provided latitude and longitude.
- `handleCurrentLocation`: Function to fetch weather data based on user's current location using geolocation API.

### ForecastComponent

This component is responsible for fetching and displaying forecasted weather data.

#### Key parts of the code:

- Similar to `WeatherComponent`, but fetches forecasted weather data.

## API Integration and Data Flow

- Real-Time Weather API: Utilizes Tomorrow.io API to fetch real-time weather data. The `fetchRealTimeWeather` function in `WeatherComponent` makes a GET request to the Tomorrow.io API endpoint, passing latitude, longitude, and API key as parameters.
- Forecast Weather API: Similar to real-time weather API, but uses the Tomorrow.io Forecast API to fetch forecasted weather data.
- Data Flow: When the component mounts, it checks for the user's location. If geolocation is supported and permission is granted, it fetches weather data using the user's current location. Otherwise, it prompts the user to input their location manually. Weather data is fetched and displayed accordingly.


