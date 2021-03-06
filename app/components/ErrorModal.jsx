var React = require('react');

var ErrorModal = React.createClass({
  componentDidMount: function (){
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function(){
    return(
      <div id="error-modal" className="reveal tiny" data-reveal="">
        <h4>Some Tile</h4>
        <p>Our error message!</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;
