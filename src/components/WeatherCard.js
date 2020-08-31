import React from 'react'

const WeatherCard = ({ dayNum, weekdayArr }) => {

  let localDate = new Date();

  const getCurrDayObj = () => {
    let day = weekdayArr[localDate.getDay()].day;
    let highLow = weekdayArr[localDate.getDay()].highLow;
    let condition = weekdayArr[localDate.getDay()].condition;
    let dayObj = { 'day': day, 'highLow': highLow, 'condition': condition };
    return dayObj;
  }
  const getSelectDayObj = (selectDay) => {
    let day = weekdayArr[selectDay].day;
    let highLow = weekdayArr[selectDay].highLow;
    let condition = weekdayArr[selectDay].condition;
    let dayObj = { 'day': day, 'highLow': highLow, 'condition': condition };
    return dayObj;
  }

  //if dayNum unset, let default value else let weatherObj be selected Val
  const weatherObj = dayNum === '' ? getCurrDayObj() : getSelectDayObj(dayNum);


  return (
    <React.Fragment>
      <div className='cardContainer'>
        <div>
          <h2>{weatherObj.day}</h2>
        </div>
        <img alt='weather-img' className='imgPlaceholder' />
        <p className='condition'>{weatherObj.condition}</p>
        <div>
          <h2>
            {weatherObj.highLow[0]}/
          {weatherObj.highLow[1]}
          </h2>
        </div>
      </div>
    </React.Fragment>
  )
}

export default WeatherCard
