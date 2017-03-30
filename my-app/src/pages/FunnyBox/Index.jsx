import React, { Component } from 'react';
import FunnyBoxElement from './components/FunnyBoxElement';
import Helmet from 'react-helmet';

class FunnyBox extends Component {
  static contextTypes = {
    meta: React.PropTypes.object,
  };
  render() {
    return (
      <div>
        <Helmet
          title={this.context.meta[0].funnyBox.title}
          meta={[
            { name: 'description', content: this.context.meta[0].funnyBox.description },
            { name: 'keywords', content: this.context.meta[0].funnyBox.keywords },
            { name: 'twitter:title', content: this.context.meta[0].funnyBox.title },
            { name: 'twitter:description', content: this.context.meta[0].funnyBox.description },
            { property: 'og:title', content: this.context.meta[0].funnyBox.title },
            { property: 'og:sitename', content: this.context.meta[0].funnyBox.site_name },
            { property: 'og:description', content: this.context.meta[0].funnyBox.description },
          ]}
        />
       <section className="height-auto">
         <ul className="grid-portfolio funny-box">
           <FunnyBoxElement
             linkBox="https://github.com/DzianisMakeichyk/mailling"
             nameBox="Konstruktor maili"
             imageBox="mail_black"
           />
           <FunnyBoxElement
             linkBox="#"
             nameBox="Hello"
             imageBox="hello_typ"
           />
           <FunnyBoxElement
             linkBox="#"
             nameBox="Hello"
             imageBox="hello_typ"
           />
           <FunnyBoxElement
             linkBox="#"
             nameBox="Hello"
             imageBox="hello_typ"
           />
           <FunnyBoxElement
             linkBox="#"
             nameBox="Hello"
             imageBox="hello_typ"
           />
           <FunnyBoxElement
             linkBox="#"
             nameBox="Hello"
             imageBox="hello_typ"
           />
           <FunnyBoxElement
             linkBox="#"
             nameBox="Hello"
             imageBox="hello_typ"
           />
           <FunnyBoxElement
             linkBox="#"
             nameBox="Hello"
             imageBox="hello_typ"
           />
           <FunnyBoxElement
             linkBox="#"
             nameBox="Hello"
             imageBox="hello_typ"
           />
           <FunnyBoxElement
             linkBox="#"
             nameBox="Hello"
             imageBox="hello_typ"
           />
           <FunnyBoxElement
             linkBox="#"
             nameBox="Hello"
             imageBox="hello_typ"
           />
           <FunnyBoxElement
             linkBox="#"
             nameBox="Hello"
             imageBox="hello_typ"
           />
           <FunnyBoxElement
             linkBox="#"
             nameBox="Hello"
             imageBox="hello_typ"
           />
           <FunnyBoxElement
             linkBox="#"
             nameBox="Hello"
             imageBox="hello_typ"
           />
           <FunnyBoxElement
             linkBox="#"
             nameBox="Hello"
             imageBox="hello_typ"
           />
           <FunnyBoxElement
             linkBox="#"
             nameBox="Hello"
             imageBox="hello_typ"
           />
         </ul>
       </section>
      </div>
    );
  }
}

export default FunnyBox;
