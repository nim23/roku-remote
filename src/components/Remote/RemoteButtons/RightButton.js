import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import AbstractButton from './AbstractButton';

export default class RightButton extends AbstractButton {
    childHandler = () => {
        this.handler('Right');
    };

    render(){
        return (
            <Icon
                name="angle-right"
                size={AbstractButton.defaultProps.largeSize}
                color={AbstractButton.defaultProps.color}
                onPress={this.childHandler.bind(this)}
            />
        );
    }
}