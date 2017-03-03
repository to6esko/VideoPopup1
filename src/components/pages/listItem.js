import React from 'react';



export default class ListItem extends React.Component {
    
    render() {
        
        return (
            <div className="commentContent">
                {this.props.comments}
            </div>
        )
    }
}