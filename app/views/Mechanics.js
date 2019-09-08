import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCardsAPI } from '../services';
import store from '../store';
import { storeMechanics, prepareMechanics, storeMechanicsWithCards, selectMechanic } from '../actions/actions';
import { FullScreenIndicator, MechanicsList } from '../components';

class Mechanics extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = store.getState();
        store.subscribe(() => {
            this.setState(store.getState());
        });
    }

    componentDidMount() {
        this.props.prepareMechanics(true)
        getCardsAPI().then(cardsResult => {
            if (cardsResult.status) {
                let cardsData = cardsResult.data
                let mechanics = []
                let cardsByMechanics = {}
                for (let [key, value] of Object.entries(cardsData)) {
                    if (cardsData[key].length > 0) {
                        cardsData[key].forEach(element => {
                            if (element.mechanics) {
                                element.mechanics.forEach(item => {
                                    if (mechanics.includes(item.name)) {
                                        cardsByMechanics[item.name].push({
                                            set: key,
                                            card: element
                                        })
                                    } else {
                                        mechanics.push(item.name)
                                        cardsByMechanics[item.name] = [{
                                            set: key,
                                            card: element
                                        }]
                                    }
                                })
                            }
                        });
                    }

                }
                this.props.prepareMechanics(false)
                this.props.storeMechanics(mechanics)
                this.props.storeMechanicsWithCards(cardsByMechanics)
            } else {
                this.props.prepareMechanics(false)
            }
        })
    }

    onMechanicPressed = (item) => {
        this.props.selectMechanic(item);
        this.props.navigation.navigate('Cards')
    }

    render() {
        if (this.state.mechanics.preparingMechanics) {
            return (
                <FullScreenIndicator />
            )
        }
        return (
            <MechanicsList
                onItemPress={(item) => this.onMechanicPressed(item)}
                data={this.state.mechanics.mechanics} />
        )
    }
}

const mapStateToProps = state => {
    console.log("mapStateToProps", state);
    return state.mechanics
}

const mapDispatchToProps = (dispatch) => {
    return {
        storeMechanics: (mechanics) => dispatch(storeMechanics(mechanics)),
        storeMechanicsWithCards: (mechanics) => dispatch(storeMechanicsWithCards(mechanics)),
        prepareMechanics: (isPreparing) => dispatch(prepareMechanics(isPreparing)),
        selectMechanic: (mechanic) => dispatch(selectMechanic(mechanic))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mechanics);
