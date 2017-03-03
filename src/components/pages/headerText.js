import React from 'react';
import AddText from './addText';
import RenderItemsNav from './renderItemsNav';


export default class HeaderText extends React.Component {
    
    render() {
        return (
            <div>
                <RenderItemsNav/>
                <div className="border-bottom">
                </div>
                <div className="textBox">
                    <img src="img/snimka.jpg" alt="Stoyan" />
                    <div className="text">
                        <img src="img/stoqn.jpg" alt="Stoqn" />
                    </div>
                    <div className="gradient">
                        <img src="img/gradient.jpg" alt="gradient" />
                    </div>
                    <div className="commentText">
                        <img src="img/text.jpg" alt="text" width="790" height="72" />
                    </div>
                </div>
            </div>
        )
    }
}