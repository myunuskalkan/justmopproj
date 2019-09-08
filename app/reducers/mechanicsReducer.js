import {
    STORE_MECHANICS,
    PREPARE_MECHANICS_STATUS,
    STORE_MECHANICS_WITH_CARDS,
    SELECT_MECHANIC,
    STORE_SELECTED_CARDS
} from '../actions/types';

const initial_state = {
    mechanics: [],
    preparingMechanics: false,
    mechanicsWithCards: [],
    selectedMechanic: null,
    selectedCards: []
}

export const mechanicsReducer = (state = initial_state, action) => {
    switch (action.type) {
        case STORE_MECHANICS:
            return { ...state, mechanics: action.payload }
        case PREPARE_MECHANICS_STATUS:
            return { ...state, preparingMechanics: action.payload }
        case STORE_MECHANICS_WITH_CARDS:
            return { ...state, mechanicsWithCards: action.payload }
        case SELECT_MECHANIC:
            return { ...state, selectedMechanic: action.payload }
        case STORE_SELECTED_CARDS:
            let newState = {...state}
            newState.selectedCards = newState.mechanicsWithCards[action.payload]
            return newState
        default:
            return state
    }
};
