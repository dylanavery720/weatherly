const React = require('react');
import Summary from './Summary.jsx';

const DailyForecasts = ({city, forecasts}) => {




    return (
      <div>
      <ul>
      {forecasts.map((forecast) => {
      return <Summary date={forecast.date} high={forecast.temp.high} low={forecast.temp.low} />
    })
  }
      </ul>
      </div>
    );

}


module.exports = DailyForecasts;
