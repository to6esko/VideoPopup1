import React from 'react';
import _ from 'lodash';

const comment = [
    {
        comments: ''
    }
];

function AddText(props) {
    return <div className="commentContent">{props.comments}</div>
}

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

    onEnterClick(event) {
        event.preventDefault();
        const createText = this.refs.createText;
        const val = createText.value;
        this.createComment(val);
        this.refs.createText.value = "";
    }
    renderComments() {
        return _.map(this.state.comment, (todo, i) =>
            <AddText key={i} {...todo} />)
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
                    <button className="edit-delete" onClick={this.onEnterClick.bind(this)}>Enter</button>
                    <br />
                    <div>
                        {this.renderComments()}
                        </div>
                    <div onClick={this.handleClick.bind(this)}>
                        <button className="edit-delete" onClick={this.deleteComment.bind(this, this.props.comments)}>Delete</button>
                    </div>
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