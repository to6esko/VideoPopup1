import React from 'react';
import ReactDOM from 'react-dom';

import NavVideo from './pages/navVideo';
import HeaderText from './pages/headerText';

export default class App extends React.Component {
    render() {
        return (
            <div className="backgroundApp">
                <div>
                    <a href="#" className="close-icon"></a>
                </div>
                <div>
                    <NavVideo />
                </div>
                <div>
                    <HeaderText />
                </div>
            </div>
        )
    }
}
