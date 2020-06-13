import React, { useState } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

const SearchGoals = (props) => {

    const handleChange = text => {
        console.log(text)
        props.onChange(text)
    }

    return (
        <View style={StyleSheet.searchInput}>
            <TextInput
                placeholder='search for a goal'
                value={searchGoal}
                onChangeText={handleChange}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchInput: {
        width: '90%',
    }
})



export default SearchGoals