import { CHANGE_SEARCH_FIELD } from './constants'
import { useDispatch } from 'react-redux'

const dispatch = useDispatch()


export const setSearchFieldAction = (text) => {
    console.log(text)
    dispatch({
        type: CHANGE_SEARCH_FIELD,
        payload: text
    })
}
