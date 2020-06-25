import {
    CHANGE_SEARCH_FIELD,
    CHANGE_IS_ADD_GOAL,
    CHANGE_ENTERED_GOAL,
    SET_ALL_GOALS
} from './constants'

const initialState = {
    goals: [],
    searchField: '',
    enteredGoal: '',
    isAddGoal: false
}

export const searchGoalReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return { ...state, searchField: action.payload }
        default:
            return state
    }
}

export const isAddGoalReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_IS_ADD_GOAL:
            return { ...state, isAddGoal: action.payload }
        default:
            return state
    }
}

export const setEnteredGoalReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_ENTERED_GOAL:
            return { ...state, enteredGoal: action.payload }
        default:
            return state
    }
}

export const setAllGoalsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_ALL_GOALS:
            return { ...state, goals: action.payload }
        default:
            return state
    }
}