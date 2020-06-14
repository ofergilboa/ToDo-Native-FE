import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

const SearchGoals = (props) => {

    const handleChange = text => {
        console.log('search: '+ text)
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