import React from 'react';
import WeatherCard from './WeatherCard'
import AllWeatherGrid from './AllWeatherGrid';

const WeatherPage = ({dataArr, selectDay}) => {
  return (
    <React.Fragment>
      <WeatherCard dayNum={selectDay} weekdayArr={dataArr} />
      <AllWeatherGrid days={dataArr} selectDay={selectDay} />
    </React.Fragment>
  )
}

export default WeatherPage;
