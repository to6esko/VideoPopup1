import React from 'react';



export default class NavVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPop: true,
            addres: ""
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
                <div className="video">
                    <img src='img/video.jpg' alt="video" />
                    <div className="pop">
                        <form className="pop-form">
                            <input ref="popInner" type="text" className="pop-input" placeholder="Enter your You Tube addres..." />
                            <div onClick={this.handleEnterClick.bind(this)}>
                                <button className="pop-btn">Enter</button>
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
                <div className="video">
                    {/*<iframe width="806" height="412" src="https://www.youtube.com/embed/9sg-A-eS6Ig" frameborder="0" allowfullscreen></iframe>*/}

                </div>
                <div className="btn">
                    <div className="btn-left">
                        <ul>
                            <li><img src="img/btn-like.jpg" alt="like" /></li>
                            <li><img src="img/btn-share.jpg" alt="share" /></li>
                        </ul>
                    </div>
                    <div className="btn-right">
                        <ul>
                            <li><img src="img/btn-edit.jpg" alt="edit" /></li>
                            <li><img src="img/btn-delete.jpg" alt="delete" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}