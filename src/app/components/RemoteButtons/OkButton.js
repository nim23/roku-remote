import React from 'react';
import Button from 'react-native-button';
import AbstractButton from './AbstractButton';
import roku from './../../../common/api'; 

export default class OkButton extends AbstractButton {
    static defaultProps = {
        label: 'Ok'
    };

    childHandler = () => {
        const { baseUrl } = roku();
        this.handler(baseUrl, this.props.SELECT);
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