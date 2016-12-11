const React = require('react');
import Summary from './Summary.jsx';

 const DailyForecasts = ({locations, forecasts, data, macrodata}) => {

console.log(locations)
// if (macrodata[0]) {
//   console.log(macrodata[0]["fcttext"])
//
// }

    return (
      <div>
      <ul>
      {data.map((e, i) => {
      return (<Summary  key={i}
                        month={e.date.monthname}
                        day={e.date.day}
                        year={e.date.year}
                        high={e.high.fahrenheit}
                        low={e.low.fahrenheit}
                        chance={e.pop}
                        summaryDay={macrodata[i*2].fcttext}
                        summaryNight={macrodata[i*2+1].fcttext}
                        locations={locations.toUpperCase()}
                        />
        )
      })}

  }
      </ul>

      </div>
    );

}

module.exports = DailyForecasts;
