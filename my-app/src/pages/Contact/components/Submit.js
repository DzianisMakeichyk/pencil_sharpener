var React    = require('react');
var classSet = require('../utils/classSet');
var { intlShape } = require('react-intl');

var SubmitElement = React.createClass({
  render: function() {
    const languesLocation = this.context.intl.locale;
    var done = this.props.percent >= 100;
    var classes = classSet({
      'form-submit': true,
      'form-submit-disabled': !done
    });
    var label = done ? this.context.intl.messages.now_yes : this.context.intl.messages.nope;
    languesLocation
    return (
      <div className="form-group">
        <button type="submit" className={classes}>{label}</button>
      </div>
    );
  }
});

module.exports = SubmitElement;

SubmitElement.contextTypes = {
  intl: intlShape.isRequired,
}