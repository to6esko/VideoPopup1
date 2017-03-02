import React from 'react';
import AddText from './addText';

const comment = [
    { 
        id:0,
        comments: ''
    }
];
export default class HeaderText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditButton: false,
            comment
        };
    }
    createComment(comments) {
        this.state.comment.push({ comments})
        this.setState({ comment: this.state.comment });
    }

    deleteComment(id) {
        _.remove(this.state.comment, todo =>
            todo.id === id);
        this.setState({ comment: this.state.comment });
    }

    onEditClick(event) {
        event.preventDefault();
        const createText = this.refs.createText;
        const val = createText.value;
        this.createComment(val);
        this.refs.createText.value = "";
    }
    
    handleClick() {
        this.setState(prevState => ({
            showEditButton: !prevState.showEditButton
        }));
    }
    
    editButton(props) {
        const showEditButton = this.state.showEditButton;
        if (!showEditButton) {
            return null;
        } else {
            return (
                <div onSubmit={this.createComment.bind(this)}>
                    <button className="edit-delete" onClick={this.onEditClick.bind(this)}>Edit</button>
                    <br />
                    <AddText comment={this.state.comment} />
                    <button className="edit-delete" onClick={this.deleteComment.bind(this, this.props.comments)}>Delete</button>
                </div>
            )
        }
    }
    
    
    render() {
        return (
            <div>
                <form className="commentBox" >
                    <input onClick={this.handleClick.bind(this)} ref="createText" type="text" className="comment" placeholder="comment..." />
                    {this.editButton()}
                </form>
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