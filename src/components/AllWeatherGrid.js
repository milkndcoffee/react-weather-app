import React from 'react';
import WeatherCard from './WeatherCard';
import { Link } from 'react-router-dom';

const AllWeatherGrid = ({ days, selectDay }) => {

  let localDate = new Date();
  selectDay = selectDay === '' ? days[localDate.getDay()].day : days[selectDay].day;

  const selectedDay = (day) => {
    return '/react-weather-app/' + day;
  }

  return (
    <div className='gridContainer'>
      {days.map((day, dayNum) => (
        <div className={day.day === selectDay ? 'outlineThis' : ''}>
          <Link to={() => selectedDay(day.day)}>
            <button>
              <WeatherCard dayNum={dayNum} weekdayArr={days} />
            </button>
          </Link>
        </div>
      ))}
    </div>
  )
}


export default AllWeatherGrid
