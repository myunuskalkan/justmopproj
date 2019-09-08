import React from 'react';
import { View, TextInput, FlatList, Text } from 'react-native';
import { FullScreenIndicator } from '../components'
import { searchCardsAPI } from '../services';

export default class Search extends React.Component {
    state = {
        searchValue: '',
        loading: false,
        searchData: []
    }

    renderBody = () => {
        if (this.state.loading) {
            return (
                <FullScreenIndicator style={styles.overrideFullScreenIndicator} />
            )
        }
        return (
            <FlatList
                data={this.state.searchData}
                renderItem={({ item, index }) => {
                    return (
                        <Text>{item.name}</Text>
                    )
                }}
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.searchBox}
                        placeholder={'Search cards...'}
                        value={this.state.searchValue}
                        onChangeText={val => {
                            state = {}
                            if (val.length > 0) {
                                this.state.loading = true
                                searchCardsAPI(val).then(searchCardsResult => {
                                    if (searchCardsResult.status) {
                                        this.setState({ searchData: searchCardsResult.data, loading: false })
                                    }
                                })
                            } else {
                                this.state.loading = false
                            }
                            state.searchValue = val
                            this.setState(state)
                        }}
                    />
                </View>
                {this.renderBody()}

            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1
    },
    searchBox: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        height: 35,
        paddingHorizontal: 5,
        margin: 5,
        borderRadius: 5
    },
    textInputContainer: {
        height: 40,
    },
    overrideFullScreenIndicator: {
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
        }
}