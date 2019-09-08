import {
  STORE_MECHANICS,
  PREPARE_MECHANICS_STATUS,
  STORE_MECHANICS_WITH_CARDS,
  SELECT_MECHANIC,
  STORE_SELECTED_CARDS
} from "./types";

export const storeMechanics = mechanics => {
  return {
    type: STORE_MECHANICS,
    payload: mechanics
  }
}

export const prepareMechanics = isPreparing => {
  return {
    type: PREPARE_MECHANICS_STATUS,
    payload: isPreparing
  }
}

export const storeMechanicsWithCards = mechanics => {
  return {
    type: STORE_MECHANICS_WITH_CARDS,
    payload: mechanics
  }
}

export const selectMechanic = mechanic => {
  return {
    type: SELECT_MECHANIC,
    payload: mechanic
  }
}

export const storeSelectedCards = selectedMechanic => {
  return {
    type: STORE_SELECTED_CARDS,
    payload: selectedMechanic
  }
}