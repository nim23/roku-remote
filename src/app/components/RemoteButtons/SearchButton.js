import React from 'react';
import Button from 'react-native-button';
import AbstractButton from './AbstractButton';
import roku from './../../../common/api';

export default class UpButton extends AbstractButton {
    static defaultProps = {
        label: 'Search'
    };

    childHandler = () => {
        const { baseUrl, keys } = roku();
        this.handler(baseUrl, keys.SEARCH);
    };

    render(){
        const { style, disabledStyle } = AbstractButton.defaultProps;
        const label = this.getLabel();
        return (
            <Button
                style={style}
                styleDisabled={disabledStyle}
                onPress={this.childHandler}>
                {label}
            </Button>
        );
    }
}