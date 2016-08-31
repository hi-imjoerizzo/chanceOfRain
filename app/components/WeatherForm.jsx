var React = require('react');

var WeatherForm = React.createClass({
  onForm: function(e){
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length > 0){
      this.refs.location.value = '';
      ths.props.onSearch(location);
    }
  },
  render: function(){
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location"/>
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
