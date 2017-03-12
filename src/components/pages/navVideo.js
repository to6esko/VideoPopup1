import React from 'react';
import { Link } from 'react-router';


export default class NavVideo extends React.Component {
    
    render() {
        return (
            <div>
                {/*<div className="video">*/}
                    {/*<img src='img/video.jpg' alt="video" />*/}
                {/*</div>*/}
                
                <div className="btn">
                    <div className="btn-left">
                        <ul>
                            <li><img src="img/btn-like.jpg" alt="like" /></li>
                            <li><img src="img/btn-share.jpg" alt="share" /></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        )
    }
}