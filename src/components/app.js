import React from 'react';
import ReactDOM from 'react-dom';

import NavVideo from './pages/navVideo';
import HeaderText from './pages/headerText';
import Footer from './pages/footer';
import AddText from './pages/addText';




const comment = [
    {
        comments: ''
    }
]
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment
        };
    }

    createComment(comments) {
        this.state.comment.push({ comments})
        this.setState({ comment: this.state.comment });
    }


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
                    <HeaderText createComment={this.createComment.bind(this)} />
                    <br/>
                    <AddText comment={this.state.comment} />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}
