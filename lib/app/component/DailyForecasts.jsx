const React = require('react');
import Summary from './Summary.jsx';
import Summaries from './Summaries.jsx';

 const DailyForecasts = ({city, forecasts, data, macrodata}) => {

 console.log(macrodata[0])

    return (
      <div>
      <ul>
      {data.map((data) => {
      return (<Summary
                        month={data.date.monthname}
                        day={data.date.day}
                        year={data.date.year}
                        high={data.high.fahrenheit}
                        low={data.low.fahrenheit}
                        chance={data.pop}
                        // summary={data.type}
                        // temp={data.temp_f}
                        />
                        {macrodata.map((macrodata)=> {
                          return (<Summaries summary={macrodata.fcttext} /> )
                        })}
        )
      })}



  }
      </ul>

      </div>
    );

}

module.exports = DailyForecasts;
