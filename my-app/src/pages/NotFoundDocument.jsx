import React, { Component } from 'react';
import { Link } from 'react-router';

class NotFound extends Component {

  render() {
    return (
      <div className="not-found">
        <div className="not-found-box">
          <p className="not-found-text">Error 404</p>
          <br />
          <Link className="not-found-home" to="/">
            Back to home
          </Link>
        </div>
      </div>
    );
  }
}

export default NotFound;
