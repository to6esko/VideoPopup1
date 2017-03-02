import React from 'react';
import _ from 'lodash';
import ListItem from './listItem';



export default class AddText extends React.Component {
    renderItems() {
        const props = _.omit(this.props, 'comment');
        return _.map(this.props.comment, (todo, i) =>
            <ListItem key={i} {...todo} {...props} />)
    }
    render() {
        return (
            <div>
                <div>
                    {this.renderItems()}
                </div>
            </div>
        )
    }
}