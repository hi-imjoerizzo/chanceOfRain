var React = require('react');

var About = (props) => {
  return(
    <div>
      <br/>
      <br/>
      <h1 className="text-center">About</h1>
      <p>This is a weather application built on the React framework.
      </p>
      <p>
        Here are some of the tools that were used:
      </p>
      <br/>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This is the
            JavaScript framework that was used.
        </li>
        <br/>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - The
            Open Weather Map API was used to search for weather data by
            city name.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
