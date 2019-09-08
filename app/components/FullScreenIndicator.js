import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';

export const FullScreenIndicator = (props) => {
    const {container, message} = styles;
    return (
        <View style={[container,props.style]}>
            <ActivityIndicator size='large' />
            <Text style={message}>{props.message || 'Loading...'}</Text>
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    message: {
        margin:10
    }
}