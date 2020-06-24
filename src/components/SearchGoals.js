import React from 'react'
import { TextInput, View, StyleSheet, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { CHANGE_SEARCH_FIELD } from '../redux/constants'


const SearchGoals = () => {

    const { searchField } = useSelector(state => ({
        ...state.searchGoal
    }));

    const dispatch = useDispatch()

    function handleChange(text) {
        dispatch({
            type: "CHANGE_SEARCH_FIELD",
            payload: text
        });
    }

    return (
        <View style={styles.searchInput}>
            <TextInput
                placeholder='search for a goal'
                onChangeText={handleChange}
            />
            <Text>search: {searchField} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    searchInput: {
        width: '100%',
        borderWidth: 3,
        borderColor: "lightsteelblue",
        marginTop: 10,
        marginBottom: 10,
        padding: 2,
        paddingLeft: 20,
    }
})


export default SearchGoals