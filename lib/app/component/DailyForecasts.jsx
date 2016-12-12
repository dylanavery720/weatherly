const React = require('react');
import Summary from './Summary.jsx';

const DailyForecasts = ({ data, macrodata, city, state }) => {

  return (
      <div>
        <ul id="appended">
        {data.map((e, i) => {
          if(i < 7) {
          return (<li className={e.icon}><Summary key={i}
                          month={e.date.monthname}
                          day={e.date.day}
                          year={e.date.year}
                          high={e.high.fahrenheit}
                          low={e.low.fahrenheit}
                          chance={e.pop}
                          icon={macrodata[i * 2].icon_url}
                          summaryDay={macrodata[i * 2 + 1].fcttext}
                          summaryNight={macrodata[i * 2 + 1].fcttext}
                          city={city.toUpperCase()}
                          state={state.toUpperCase()}
                          /></li>)};
        })}
        </ul>
      </div>
    );
};

module.exports = DailyForecasts;
