import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { CHANGE_SEARCH_FIELD } from '../redux/constants'
import { setSearchFieldAction } from '../redux/actions'

const SearchGoals = (props) => {

    // const searchField = useSelector(state => state.searchGoal.searchField)

    // const dispatch = useDispatch()

    // function handleChange() {
    //     dispatch({
    //         type: "CHANGE_SEARCH_FIELD",
    //         // payload: event.target.value
    //         payload: text
    //     });
    // }

    const handleChange = text => {
        console.log('search: ' + text)
        props.onChange(text)
    }

    return (
        <View style={styles.searchInput}>
            <TextInput
                placeholder='search for a goal'
                // value={searchGoal}
                onChangeText={handleChange}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchInput: {
        width: '100%',
        borderWidth: 3,
        // borderColor: "dodgerblue",
        borderColor: "lightsteelblue",
        marginTop: 10,
        marginBottom: 10,
        padding: 2,
        paddingLeft: 20,
    }
})


export default SearchGoals