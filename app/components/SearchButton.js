import React from 'react';
import { TouchableOpacity,Text } from 'react-native';

export const SearchButton = (props) => {
    const { container } = styles
    return (
        <TouchableOpacity
            onPress={() => props.onPress()}
            style={container}>
            <Text>Search</Text>
        </TouchableOpacity>
    )
}

const styles = {
    container: {
        padding: 5,
        marginRight: 10
    }
}