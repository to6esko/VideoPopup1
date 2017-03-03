import React from 'react';
import AddText from './addText';

const comment = [
    {
        id: 0,
        comments: ''
    }
];
export default class RenderItemsNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditButton: false,
            comment
        };
    }
    createComment(comments) {
        this.state.comment.push({ comments })
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
            </div>
        )
    }
}