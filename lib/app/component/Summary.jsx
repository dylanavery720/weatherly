const React = require('react');
const $ = require('jquery');
import DailyForecasts from './Forecast.jsx';

const Summary = ({city, forecasts}) => {




    return (
      <div>
      <ul>
      {forecasts.map((forecast) => {
      return <DailyForecasts date={forecast.date} high={forecast.temp.high} low={forecast.temp.low} />
    })
  }
      </ul>
      </div>
    );

}


module.exports = Summary;
