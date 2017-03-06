import React from 'react';
import { Link } from 'react-router';


export default class NavVideo extends React.Component {
    constructor(props) {
        super(props);
        this.props.url;
        this.props.showPop;
    }
    
    addUrl(props) {
        let url = this.props.url;
        console.log(this.props.url);
        const showPop = this.props.showPop;

        if (showPop === true) {
            return null;
        } else {
            return (
                <div>
                    <iframe width="806" height="412" src={`${url}`} frameborder="0" allowfullscreen></iframe>
                </div>
            )
           

        }
    }

    render() {
        return (
            <div>
                
                <div className="video">
                    {/*{this.addUrl()}*/}
                    <img src='img/video.jpg' alt="video" />
                    {/*<iframe width="806" height="412" src="https://youtu.be/SC4xMk98Pdc" frameborder="0" allowfullscreen></iframe>*/}
                    {/*<iframe width="806" height="412" src="https://www.youtube.com/embed/SC4xMk98Pdc" frameborder="0" allowfullscreen></iframe>*/}
                {/*{this.addUrl()}*/}
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