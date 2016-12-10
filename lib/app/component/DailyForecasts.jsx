const React = require('react');
import Summary from './Summary.jsx';

 const DailyForecasts = ({city, forecasts, data}) => {

console.log(data.weather)


    return (
      <div>
      <ul>
      {forecasts.map((forecast) => {
      return <Summary
                    date={forecast.date}
                    high={forecast.temp.high}
                    low={forecast.temp.low}
                    chance={forecast.weatherType.chance}
                    type={forecast.weatherType.type}
                    temp={data.weather}
                    />
    })
  }
      </ul>
      </div>
    );

}

module.exports = DailyForecasts;
