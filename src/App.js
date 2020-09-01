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
          <Route exact path="/">
            <WeatherPage dataArr={fakeWeatherDataArr} selectDay={''} />
          </Route>
          <Route exact path="/sunday">
            <WeatherPage dataArr={fakeWeatherDataArr} selectDay={0} />
          </Route>
          <Route exact path="/monday">
            <WeatherPage dataArr={fakeWeatherDataArr} selectDay={1} />
          </Route>
          <Route exact path="/tuesday">
            <WeatherPage dataArr={fakeWeatherDataArr} selectDay={2} />
          </Route>
          <Route exact path="/wednesday">
            <WeatherPage dataArr={fakeWeatherDataArr} selectDay={3} />
          </Route>
          <Route exact path="/thursday">
            <WeatherPage dataArr={fakeWeatherDataArr} selectDay={4} />
          </Route>
          <Route exact path="/friday">
            <WeatherPage dataArr={fakeWeatherDataArr} selectDay={5} />
          </Route>
          <Route exact path="/saturday">
            <WeatherPage dataArr={fakeWeatherDataArr} selectDay={6} />
          </Route>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
