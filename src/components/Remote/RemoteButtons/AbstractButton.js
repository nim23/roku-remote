import React from 'react';

export default class AbstractButton extends React.Component {
    static defaultProps = {
        color: '#A85EF5',
        size: 30,
        largeSize: 60
    };

    handler = (key) => {
        this.props.keyPress(key);
    };
}