var React    = require('react');
var classSet = require('../utils/classSet');

var SubmitElement = React.createClass({
  render: function() {
    var done = this.props.percent >= 100;
    var classes = classSet({
      'form-submit': true,
      'form-submit-disabled': !done
    });
    var label = done ? 'A teraz tak!' : 'Jeszcze nie';
    return (
      <div className="form-group">
        <button type="submit" className={classes}>{label}</button>
      </div>
    );
  }
});

module.exports = SubmitElement;
