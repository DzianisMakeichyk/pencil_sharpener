import React, { Component } from 'react';
import isMediaGreaterThan from '../web_modules/isMediaGreaterThan';

class App extends Component {

    static contextTypes = {
    currentMedia: React.PropTypes.string,
    };
    render() {
        console.log(this.context.currentMedia);
        return (
            <div>
                {isMediaGreaterThan('Small', this.context.currentMedia) && (
                  <h1>Hello</h1>
                )}
            </div>
        );
    }
}

export default App;
