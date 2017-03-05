import React from 'react';
import ReactDOM from 'react-dom';

import NavVideo from './pages/navVideo';
import HeaderText from './pages/headerText';
import Footer from './pages/footer';


const urlAddres = [
    {
        url: ''
    }
]
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPop: true,
            //url:''
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
        /*
        let filename = event.target.value;
        let i, file = {};
        for (i = 0; i <= filename.lenght; i++){
         return file.push(filename[i]);
        }
        */
        //window.location = value;
        window.location = value;
        this.handleSubmit(value);
        this.refs.urlValue.value = "";
        //console.log(this.handleSubmit(value));
        //this.setState({url:file})

    }


    

    showPage() {
        const showPop = this.state.showPop;
        if (showPop === true) {
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
                                <NavVideo />
                            </div>
                            <div>
                                <HeaderText />
                            </div>
                            <div>
                                <Footer />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }


    handleEnterClick() {
        this.setState(prevState => ({
            showPop: !prevState.showPop
        }));
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
                            <input ref="urlValue" type="text" className="pop-input" placeholder="Enter your You Tube addres..." />
                            <div onClick={this.handleEnterClick.bind(this)}>
                                <button onClick={this.getUrl.bind(this)} className="pop-btn">Enter</button>
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

