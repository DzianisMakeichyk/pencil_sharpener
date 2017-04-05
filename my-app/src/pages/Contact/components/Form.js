var React         = require('react');
// var classSet      = require('../utils/classSet');
var InputElement  = require('./Input');
var SubmitElement = require('./Submit');
var axios = require('axios');

var FormElement = React.createClass({
  render: function() {
    var props = this.props;
    var inputNodes = props.inputs.map( function ( item, index  ) {
      return <InputElement
                key={index}
                index={index}
                item={item}
                onChangeInputHandler={props.onChangeInputHandler} />;
    });
    return (
      <form
        className="form"
        action="send_email.php"
        method="post"
        onSubmit={this._onSubmit}>
        {inputNodes}
        <SubmitElement percent={this.props.percent}/>
      </form>
    );
  },
  _onSubmit: function (e) {
    e.preventDefault();
    this.props.onSubmitFormHandler();
    axios({
      method: 'post',
      url: './send_email.php',
      data: {
        name: '',
        email: '',
        message: '',
      }
    });
  }
});

module.exports = FormElement;
