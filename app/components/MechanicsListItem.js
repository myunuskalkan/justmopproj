import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export const MechanicsListItem = (props) => {
    const { container, title } = styles;
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={container}>
            <Text style={title}>{props.children}</Text>
        </TouchableOpacity>
    )
}

const styles = {
    container: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        margin: 10
    }
}