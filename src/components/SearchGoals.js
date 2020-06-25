import React from 'react'
import { TextInput, View, StyleSheet, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { setSearchFieldAction } from '../redux/actions'

const SearchGoals = () => {

    // const { searchField } = useSelector(state => ({
    //     ...state.searchGoalReducer
    // }));

    const dispatch = useDispatch()

    function handleChange(text) {
        setSearchFieldAction(text, dispatch)
    }


    return (
        <View style={styles.searchInput}>
            {/* <Text>search for: {searchField} </Text> */}
            <TextInput
                placeholder='search for a goal'
                onChangeText={handleChange}
            />
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