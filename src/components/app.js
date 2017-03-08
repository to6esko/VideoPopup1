import React from 'react';
import ReactDOM from 'react-dom';

import NavVideo from './pages/navVideo';
import RenderItemsNav from './pages/renderItemsNav';
import Footer from './pages/footer';


const urlAddres = [
    {
        url: ''
    }
];

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPop: true,
            showEnter: false,
            urlAddres
        }
    }

    handleSubmit(url) {
        this.state.urlAddres.push(url);
        this.setState({ urlAddres: this.state.urlAddres });
        //console.log(this.state.url);
    }
    getUrl(event) {
        event.preventDefault();
        let urlValue = this.refs.urlValue;
        let value = urlValue.value;
        console.log(value);
        /*
        let filename = event.target.value;
        let i, file = {};
        for (i = 0; i <= filename.lenght; i++){
         return file.push(filename[i]);
        }
        */
        //window.location = value;

        this.handleSubmit(value);
        this.refs.urlValue.value = "";
        //console.log(this.handleSubmit(value));
        //this.setState({url:file})
    }

    addUrl() {
        let url = this.state.urlAddres[1];
        console.log(url);
        
        let rexg=/(([a-zA-Z0-9\-_])+$)(?:&feature=related)?(?:[\w\-]{0})?/g
        let matches = url.match(rexg);
        
        let newUrl = "https://www.youtube.com/embed/" + matches;
        console.log('newUrl: ' + newUrl);
        
        let showPop = this.state.showPop;
        if (showPop === true) {
            return null;
        } else {
            return (
                <div>
                    <iframe width="806" height="412" src={window.open=`${newUrl}`} frameborder="0" allowfullscreen></iframe>
                </div>
            )
        }
    }
    showPage() {
        const showPop = this.state.showPop;
        if (showPop) {
            return null;
        } else {
            return (
                <div>
                    <div className="video">
                        <div className="backgroundApp">
                            <div>
                                <a href="#" className="close-icon"></a>
                            </div>
                            <div>
                                {this.addUrl()}
                                <NavVideo />
                            </div>
                            <div>
                                <RenderItemsNav />
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    handleEnterClick() {
        this.setState(prevState => ({
            showEnter: !prevState.showEnter
        }));
    }

    handlePopClick() {
        this.setState(prevState => ({
            showPop: !prevState.showPop
        }));
    }
    closeButton() {
        const showEnter = this.state.showEnter;
        if (!showEnter) {
            return null;
        } else {
            return (
                <div onClick={this.handleEnterClick.bind(this)}>
                    <button onClick={this.getUrl.bind(this)} className="pop-btn">Enter</button>
                </div>
            )
        }
    }
    enterButton(props) {
        const showPop = this.state.showPop;
        if (!showPop) {
            return null;
        } else {
            return (
                <div>
                    <div className="pop">
                        <form className="pop-form" onSubmit={this.handleSubmit.bind(this)}>
                            <input ref="urlValue" onPaste={this.handleEnterClick.bind(this)} type="text" className="pop-input" placeholder="Enter your You Tube addres..." />
                            <div onClick={this.handlePopClick.bind(this)}>
                                {this.closeButton()}
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.enterButton()}
                {this.showPage()}
            </div>
        )
    }
}

