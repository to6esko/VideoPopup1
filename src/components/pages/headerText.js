import React from 'react';

export default class HeaderText extends React.Component {
    render() {
        return (
            <div>
                
                    <div className="commentBox">
                        <input type="text" className="comment" name="comment" placeholder="comment..." />
                    </div>
                <div className="border-bottom">
                </div>
                <div className="textBox">
                    <img src="img/snimka.jpg" alt="Stoyan" />
                    <div className="text">
                        <h1>Stoyan Daskaloff</h1>
                        <p>MARCH 7.2013 AT 7.30 PM</p>
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