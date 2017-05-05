import React, { Component } from 'react';

class AlternativeContact extends Component {

  render() {
    return (
      <div className="alternative_contact">
        <div className="alternative_contact_box">
          <a href="#">
            <img className="alternative_contact_svg" src="../../img/contact/gmail.svg" role="presentation" />
          </a>
        </div>
        <div className="alternative_contact_box">
          <a href="#">
            <img className="alternative_contact_svg" src="../../img/contact/skype.svg" role="presentation" />
          </a>
        </div>
        <div className="alternative_contact_box">
          <a href="#">
            <img className="alternative_contact_svg" src="../../img/contact/phone.svg" role="presentation" />
          </a>
        </div>
      </div>
    );
  }
}

export default AlternativeContact;
