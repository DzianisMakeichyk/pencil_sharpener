import React, { Component } from 'react';
import ComingSoon from './Elements/ComingSoonDocument';

class App extends Component {

    render() {
        console.log(this.context.currentMedia);
        return (
            <ComingSoon />
        );
    }
}

export default App;
