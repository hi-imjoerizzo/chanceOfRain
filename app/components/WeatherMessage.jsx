var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return(
    <h3 className="text-centered">It's {temp} degrees F in {location}.</h3>
  )
};

module.exports = WeatherMessage;
