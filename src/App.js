import React from 'react';
import Header from './components/ui/Header'
import CurrWeather from './components/CurrWeather'

import './App.css';

function App() {
  const fakeWeatherDataArr = [
    {'day': 'Sunday', 'highLow': [71, 59], 'condition': 'Cloudy'},
    {'day': 'Monday', 'highLow': [80, 62], 'condition': 'Cloudy'},
    {'day': 'Tuesday', 'highLow': [86, 70], 'condition': 'Sunny'},
    {'day': 'Wednesday', 'highLow': [88, 69], 'condition': 'Sunny'},
    {'day': 'Thursday', 'highLow': [79, 63], 'condition': 'Cloudy'},
    {'day': 'Friday', 'highLow': [63, 55], 'condition': 'Showers'},
    {'day': 'Saturday', 'highLow': [72, 60], 'condition': 'Cloudy'}
  ]

  return (
    <div className="container">
      <header><Header /></header>
      <main>
      <CurrWeather dayNum={''} weekdayArr={fakeWeatherDataArr} />
      </main>

    </div>
  );
}

export default App;
