import React from 'react';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import WeatherPage from './components/WeatherPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';


//styling
import './App.css';

function App() {
  const fakeWeatherDataArr = [
    { 'day': 'Sunday', 'highLow': [71, 59], 'condition': 'Cloudy' },
    { 'day': 'Monday', 'highLow': [80, 62], 'condition': 'Cloudy' },
    { 'day': 'Tuesday', 'highLow': [86, 70], 'condition': 'Sunny' },
    { 'day': 'Wednesday', 'highLow': [88, 69], 'condition': 'Sunny' },
    { 'day': 'Thursday', 'highLow': [79, 63], 'condition': 'Cloudy' },
    { 'day': 'Friday', 'highLow': [63, 55], 'condition': 'Showers' },
    { 'day': 'Saturday', 'highLow': [72, 60], 'condition': 'Cloudy' }
  ]

  //rendering
  return (
    <Router>
      <div className="container">
        <Header />
        <main>
          <Route exact path="/react-weather-app/">
            <WeatherPage dataArr={fakeWeatherDataArr} selectDay={''} />
          </Route>
          <Route path="/react-weather-app/sunday">
            <WeatherPage dataArr={fakeWeatherDataArr} selectDay={0} />
          </Route>
          <Route path="/react-weather-app/monday">
            <WeatherPage dataArr={fakeWeatherDataArr} selectDay={1} />
          </Route>
          <Route path="/react-weather-app/tuesday">
            <WeatherPage dataArr={fakeWeatherDataArr} selectDay={2} />
          </Route>
          <Route path="/react-weather-app/wednesday">
            <WeatherPage dataArr={fakeWeatherDataArr} selectDay={3} />
          </Route>
          <Route path="/react-weather-app/thursday">
            <WeatherPage dataArr={fakeWeatherDataArr} selectDay={4} />
          </Route>
          <Route path="/react-weather-app/friday">
            <WeatherPage dataArr={fakeWeatherDataArr} selectDay={5} />
          </Route>
          <Route path="/react-weather-app/saturday">
            <WeatherPage dataArr={fakeWeatherDataArr} selectDay={6} />
          </Route>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
