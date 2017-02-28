import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
            <div className="btn-footer">
                <ul>
                    <li><img src="img/btn-like.jpg" alt="like" /></li>
                    <li><img src="img/btn-share.jpg" alt="share" /></li>
                    <li><img src="img/btn-coment.jpg" alt="share" /></li>
                    <li className="btn-footer-right"><img src="img/btn-report.jpg" alt="share" /></li>
                </ul>
                <div className="footerBottom">
                </div>
            </div>
                <div>
                <div className="footer-btn">
                    <ul>
                        <li><img src="img/footer-comment.jpg" alt="like" /></li>
                        <li><img src="img/btn-photo.jpg" alt="share" /></li>
                        <li><img src="img/btn-feedback.jpg" alt="share" /></li>
                    </ul>
                </div>
                </div>    
                <div className="reply">
                    <img className="piramida" src="img/piramida.jpg" alt="piramida" />
                    <input type="text" className="reply-comment" name="reply" placeholder="Reply..." />
                </div>
            </div >   
        )
    }
}