import React from 'react';



export default class HeaderText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditButton: false
        };
    }

    onEditClick(event) {
        event.preventDefault();
        const createText = this.refs.createText;
        const val = createText.value;
        this.props.createComment(val);
        this.refs.createText.value = "";
        console.log({val});
    }
    
    handleClick() {
        this.setState(prevState => ({
            showEditButton: !prevState.showEditButton
        }));
    }

    editButton() {
        const showEditButton = this.state.showEditButton;
        if (!showEditButton) {
            return null;
        } else {
            return (
                <div>
                    <button onClick={this.onEditClick.bind(this)}>Edit</button>
                </div>
            )
        }
    }
    
    
    render() {
        return (
            <div>
                <form className="commentBox">
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