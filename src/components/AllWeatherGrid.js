import React from 'react';
import WeatherCard from './WeatherCard';

const AllWeatherGrid = ({ days, selectDay }) => {

  let localDate = new Date();
  selectDay = selectDay === '' ? days[localDate.getDay()].day : days[selectDay].day;

  return (
    <div className='gridContainer'>
      {days.map((day, dayNum) => (
        <div className={day = day.day === selectDay ? 'outlineThis' : console.log(day.day, 'is currently not selected')}>
          <WeatherCard dayNum={dayNum} weekdayArr={days} />
        </div>
      ))}
    </div>
  )
}


export default AllWeatherGrid
