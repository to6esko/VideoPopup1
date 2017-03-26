import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import NavVideo from './pages/navVideo';
import RenderItemsNav from './pages/renderItemsNav';
import Footer from './pages/footer';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPop: true,
            newVideo: false,
            deleteVideo: false,
            showEnter: false,
            url: ''
        }
    }


    handleSubmit(event) {
        this.setState({ url: this.state.url });
    }
    getUrl(event) {
        event.preventDefault();
        this.setState({ url: event.target.value });
    }

    addUrl() {
        const url = this.state.url;

        const rexg = /(([a-zA-Z0-9\-_])+$)(?:&feature=related)?(?:[\w\-]{0})?/igm
        const matchesUrl = url.match(rexg);

        const newUrl = "https://www.youtube.com/embed/" + matchesUrl;

        const deleteVideo = this.state.deleteVideo;
        if (deleteVideo) {
            return null;
        } else {
            return (
                <div className="video-container">
                    <iframe src={`${newUrl}`} frameborder="0" allowfullscreen></iframe>
                </div>
            )
        }
    }


    validateInput(event) {
        let valueInput = event.target.value;
        let message = 'Please "Paste" your You Tube address!!!'
        if (valueInput.length >= 3 && valueInput.length <= 4) {
            return alert(message);
        }
    }

    handleEditClick() {
        this.setState(prevState => ({
            newVideo: !prevState.newVideo,
            deleteVideo:false
        }));
    }

    addNewPop() {
        const newVideo = this.state.newVideo;
        if (!newVideo) {
            return null;
        } else {
            return (
                <div>
                    <div className="pop">
                        <form className="pop-form" onSubmit={this.handleSubmit.bind(this)}>
                            <div onChange={this.validateInput.bind(this)}>
                                <div onPaste={this.handleEnterClick.bind(this)}>
                                    <input ref="urlValue" onChange={this.getUrl.bind(this)} type="text" className="pop-input" placeholder="Enter your You Tube address..." />
                                </div>
                                <div onClick={this.handleEditClick.bind(this)}>
                                    <button type="submit" className="pop-btn">Enter</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
    }

    handleDeleteClick() {
        this.setState(prevState => ({
            deleteVideo: !prevState.deleteVideo,
            deleteVideo: true
        }));
    }
    addImg() {
        const deleteVideo = this.state.deleteVideo;
        if (!deleteVideo) {
            return null;
        } else {
            return (
                <div className="video" >
                    <img src='img/video.jpg' alt="video" />
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
                    <div className="backgroundApp">
                        <div>
                            <a href="#" className="close-icon"></a>
                        </div>
                        <div>
                            {this.addUrl()}
                            {this.addNewPop()}
                            {this.addImg()}
                            <NavVideo />
                            <div className="btn">
                                <div className="btn-right">
                                    <ul>
                                        <li><img onClick={this.handleEditClick.bind(this)} src="img/btn-edit.jpg" alt="edit" /></li>
                                        <li><img onClick={this.handleDeleteClick.bind(this)} src="img/btn-delete.jpg" alt="delete" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <RenderItemsNav />
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
                    <button type="submit" className="pop-btn">Enter</button>
                </div>
            )
        }
    }

    enterButton() {

        const showPop = this.state.showPop;
        if (!showPop) {
            return null;
        } else {
            return (
                <div>
                    <div className="pop">
                        <form className="pop-form" onSubmit={this.handleSubmit.bind(this)}>
                            <div onChange={this.validateInput.bind(this)}>
                                <div onPaste={this.handleEnterClick.bind(this)}>
                                    <input ref="urlValue" onChange={this.getUrl.bind(this)} type="text" className="pop-input" placeholder="Enter your You Tube address..." />
                                </div>
                                <div onClick={this.handlePopClick.bind(this)}>
                                    {this.closeButton()}
                                </div>
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
        );
    }
}

