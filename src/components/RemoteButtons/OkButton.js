import React from 'react';
import Button from 'react-native-button';
import AbstractButton from './AbstractButton'; 

export default class OkButton extends AbstractButton {
    static defaultProps = {
        label: 'Ok'
    };

    childHandler = () => {
        this.handler(this.props.SELECT);
    };

    render(){
        const { style, disabledStyle } = AbstractButton.defaultProps;
        const label = this.getLabel();
        return (
            <Button
                style={style}
                styleDisabled={disabledStyle}
                onPress={this.childHandler.bind(this)}>
                {label}
            </Button>
        );
    }
}