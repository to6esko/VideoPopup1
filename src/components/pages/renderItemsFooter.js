import React from 'react';
import _ from 'lodash';

const comment = [
    {
        comments: ''
    }
];

function AddText(props) {
    return <div>{props.comments}</div>
}

export default class RenderItemsFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showEnterButton: false,
            showDeleteButton: false,
            comment
        };
    }
    
    createComment(comments) {
        this.state.comment.push({ comments })
        this.setState({ comment: this.state.comment });
    }
    
    onEnterClick(event) {
        event.preventDefault();
        const createText = this.refs.createText;
        const val = createText.value;
        this.createComment(val);
        this.refs.createText.value = "";
    }



    deleteComment(id) {
        _.remove(this.state.comment, todo =>
            todo.id === id);
        this.setState({ comment: this.state.comment });
    }
     renderComments() {
        return _.map(this.state.comment, (todo, i) =>
            <AddText key={i} {...todo} />)
    }
    
   

    handleEnterClick() {
        this.setState({
            showEnterButton: true
        });
    }
    handleDeleteClick() {
        this.setState({
            showDeleteButton: true
        })
    }
    onEnterClik() {
        this.setState(prevState => ({
            showEnterButton: !prevState.showEnterButton
        }));
    }
    onDeleteClick() {
        this.setState(prevState => ({
            showDeleteButton: !prevState.showDeleteButton,
            showEnterButton: false
        }));
    }

    enterButton(props) {
        const showEnterButton = this.state.showEnterButton;
        if (!showEnterButton) {
            return null;
        } else {
            return (
                <div onSubmit={this.createComment.bind(this)}>
                    <div onClick={this.handleDeleteClick.bind(this)}>
                        <button className="footer-enter" onClick={this.onEnterClick.bind(this)}>Enter</button>
                    </div>
                    <div>
                        {this.deleteButton()}
                    </div>
                </div>
            )

        }

    }
    deleteButton(props) {
        const showDeleteButton = this.state.showDeleteButton;
        if (!showDeleteButton) {
            return null;
        } else {
            return (
                <div>
                    <div onClick={this.onDeleteClick.bind(this)}>
                    <div className="textBox">
                        <img src="img/snimka.jpg" alt="Stoyan" />
                        <div className="text">
                            <img src="img/stoqn.jpg" alt="Stoqn" />

                            <div className="commentContent">
                                {this.renderComments()}
                            </div>
                        </div>
                            <button className="footer-delete" onClick={this.deleteComment.bind(this, this.props.comments)}>Delete</button>
                        </div>
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                <form className="reply" >
                    <img className="piramida" src="img/piramida.jpg" alt="piramida" />
                    <input onChange={this.handleEnterClick.bind(this)} ref="createText" type="text" className="reply-comment" placeholder="Reply..." />
                    {this.enterButton()}
                </form>
            </div>
        )
    }
}
