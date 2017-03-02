import React from 'react';



export default class HeaderText extends React.Component {
    
    render() {
        
        return (
            <div className="commentContent">
                {this.props.comments}
            </div>
        )
    }
}