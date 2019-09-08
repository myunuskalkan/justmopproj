import React from 'react';
import { View, FlatList } from 'react-native';
import { MechanicsListItem } from './MechanicsListItem';

export const MechanicsList = (props) => {
    const { container, list } = styles;
    return (
        <View style={container}>
            <FlatList
                keyExtractor={(item, index)=> index.toString()}
                style={list}
                data={props.data || []}
                renderItem={({ item, index }) => {
                    return (
                        <MechanicsListItem onPress={() => props.onItemPress(item)}>{item}</MechanicsListItem>
                    )
                }}
            />
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    list: {
        width: '100%',
        height: '100%',
    }
}