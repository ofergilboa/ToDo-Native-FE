import { CHANGE_SEARCH_FIELD } from './constants'

const initialState = {
    searchField: ''
}

export const searchGoal = (state = initialState, action = {}) => {
    console.log(action.type)
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return { ...state, searchField: action.payload }
        default:
            return state

    }
}