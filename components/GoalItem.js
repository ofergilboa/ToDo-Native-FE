import React from 'react'
import { StyleSheet, Text, View, Touchable, TouchableOpacity } from 'react-native';


const GoalItem = props => {
    return (
        <TouchableOpacity onPress={() => props.onDelete(props.id)}>
            <View style={styles.listItem}>
                <Text>{props.item}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 20,
        marginTop: 20,
        marginVertical: 10,
        backgroundColor: "#ccc"
    }
})

export default GoalItem