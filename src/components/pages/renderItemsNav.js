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
            showDeleteButton: false,
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

    handleEditClick() {
        this.setState({
            showEditButton: true
        });
    }
    handleDeleteClick() {
        this.setState({
            showDeleteButton: true
        })
    }
    onDeleteClick() {
        this.setState(prevState => ({
            showDeleteButton: !prevState.showDeleteButton
        }));
    }
    editButton(props) {
        const onDeleteClick = this.state.onDeleteClick;
        const showEditButton = this.state.showEditButton;
        if (!showEditButton && !onDeleteClick) {
            return null;
        } else {
            return (
                
                <div onSubmit={this.createComment.bind(this)}>
                    
                    <div onClick={this.handleDeleteClick.bind(this)}>
                        
                        <button className="edit-delete" onClick={this.onEnterClick.bind(this)}>Enter</button>
                    </div>
                    <div>
                    {this.deleteButton() }
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
                        <div>
                        <div className="textBox">
                            <img src="img/snimka.jpg" alt="Stoyan" />
                            <div className="text">
                                <img src="img/stoqn.jpg" alt="Stoqn" />
                            </div>
                            <div className="gradient">
                                <img src="img/gradient.jpg" alt="gradient" />
                            </div>
                            <div className="commentText">
                                {this.renderComments()}
                                {/*<img src="img/text.jpg" alt="text" width="790" height="72" />*/}
                            </div>
                            <div onClick={this.onDeleteClick.bind(this)}>
                                <button className="edit-delete" onClick={this.deleteComment.bind(this, this.props.comments)}>Delete</button>
                            </div>

                        </div>
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                <form className="commentBox" >
                    <input onChange={this.handleEditClick.bind(this)} ref="createText" type="text" className="comment" placeholder="comment..." />
                    <div className="border-bottom" />
                    {this.editButton()}
                    
                </form>
            </div>
        )
    }
}