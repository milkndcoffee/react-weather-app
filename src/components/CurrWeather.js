import React from 'react'

const CurrWeather = ({ dayNum, weekdayArr }) => {

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
      <div>
        <h2>{weatherObj.day}</h2>
      </div>
      <img alt='weather-img' style={ImgPlaceholderStyle} />
      <p className='condition'>{weatherObj.condition}</p>
      <div>
        <h2>
          {weatherObj.highLow[0]}/
          {weatherObj.highLow[1]}
        </h2>
      </div>
    </React.Fragment>
  )
}

const ImgPlaceholderStyle = {
  display: 'inline-block',
  alignSelf: 'center',
  width: '80px',
  height: '80px',
  borderRadius: '40px',
  background: 'rgb(170, 170, 170)'
}

export default CurrWeather
