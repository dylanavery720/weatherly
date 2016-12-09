const React = require('react');
const $ = require('jquery');
import DailyForecasts from './Forecast.jsx';

const Summary = ({forecasts}) => {




    return (
      <ul>
      {forecasts.map((forecast) => {
      return <DailyForecasts {...this.state.forecast} />
    })
  }
      </ul>
    );
}


module.exports = Summary;
