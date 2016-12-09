const React = require('react');
const $ = require('jquery');

const DailyForecasts = ({city, forecasts}) => {
  return (
<section className="Summary">
  <h4>{forecasts}</h4>
  <h2>Some Text</h2>
</section>
  );
}

module.exports = DailyForecasts;
