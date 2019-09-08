import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import { storeSelectedCards } from '../actions/actions';
import { FullScreenIndicator, CardsList, SearchButton } from '../components';

class Cards extends Component {

    static navigationOptions = ({ navigation }) => {
        return (
            {
                headerRight: (<SearchButton onPress={() => navigation.navigate('Search')} />)
            }
        )
    };

    constructor(props, context) {
        super(props, context);
        this.state = store.getState();
        store.subscribe(() => {
            this.setState(store.getState());
        });
    }

    componentDidMount() {
        const selectedMechanic = this.state.mechanics.selectedMechanic
        if (selectedMechanic) {
            this.props.storeSelectedCards(selectedMechanic)
        }
    }

    render() {
        if (this.state.mechanics.selectedCards) {
            return (
                <CardsList data={this.state.mechanics.selectedCards || []} />
            )
        }
        return (
            <FullScreenIndicator message={'deneme'} />
        )
    }
}

const mapStateToProps = state => {
    console.log("mapStateToProps", state);
    return state.mechanics
}

const mapDispatchToProps = (dispatch) => {
    return {
        storeSelectedCards: (selectedMechanic) => dispatch(storeSelectedCards(selectedMechanic))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
