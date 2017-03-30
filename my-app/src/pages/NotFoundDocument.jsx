import React, { Component } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

class NotFound extends Component {
  static contextTypes = {
    meta: React.PropTypes.object,
  };
  render() {
    return (
      <div>
      <Helmet
        title={this.context.meta[0].notFound.title}
        meta={[
          { name: 'description', content: this.context.meta[0].notFound.description },
          { name: 'keywords', content: this.context.meta[0].notFound.keywords },
          { name: 'twitter:title', content: this.context.meta[0].notFound.title },
          { name: 'twitter:description', content: this.context.meta[0].notFound.description },
          { property: 'og:title', content: this.context.meta[0].notFound.title },
          { property: 'og:sitename', content: this.context.meta[0].notFound.site_name },
          { property: 'og:description', content: this.context.meta[0].notFound.description },
        ]}
      />
      <div className="not-found">
        <div className="not-found-box">
          <p className="not-found-text">Error 404</p>
          <br />
          <Link className="glitch-btn not-found-home" to="/">
            <div className="label">Back to home</div>
            <div className="mask"><span>Back to home</span></div>
            <div className="mask"><span>Back to home</span></div>
            <div className="mask"><span>Back to home</span></div>
            <div className="mask"><span>Back to home</span></div>
            <div className="mask"><span>Back to home</span></div>
          </Link>
        </div>
      </div>
    </div>
    );
  }
}

export default NotFound;
