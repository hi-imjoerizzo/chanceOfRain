var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return(
    <div>
      <br/>
      <br/>
      <h1 className="text-centered">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Austin'>Austin, TX</Link>
        </li>
        <li>
          <Link to='/?location=New York'>New York, NY</Link>
        </li>
        <li>
          <Link to='/?location=Los Angeles'>Los Angeles, CA</Link>
        </li>
        <li>
          <Link to='/?location=Seattle'>Seattle, WA</Link>
        </li>
        <li>
          <Link to='/?location=Green Bay'>Green Bay, WI</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio, Brazil</Link>
        </li>
        <li>
          <Link to='/?location=Turin'>Turin, Italy</Link>
        </li>
        <li>
          <Link to='/?location=Dublin'>Dublin, Ireland</Link>
        </li>
        <li>
          <Link to='/?location=Tokyo'>Tokyo, Japan</Link>
        </li>
        <li>
          <Link to='/?location=New Delhi'>New Delhi, India</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
