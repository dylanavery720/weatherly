const React = require('react');
import Summary from './Summary.jsx';

 const DailyForecasts = ({city, forecasts, data}) => {

 console.log(data)

    return (
      <div>
      <ul>
      {data.map((data) => {
      return (<Summary
                        month={data.date.monthname}
                        day={data.date.day}
                        year={data.date.year}
                        // high={forecast.temp.high}
                        // low={forecast.temp.low}
                        // chance={forecast.weatherType.chance}
                        // type={forecast.weatherType.type}
                        temp={data.temp_f}
                        />
        )
      })}

  }
      </ul>
      </div>
    );

}

module.exports = DailyForecasts;
