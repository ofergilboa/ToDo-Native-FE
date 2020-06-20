import React from 'react'
import { StyleSheet, Text, View, Touchable, TouchableOpacity, ScrollView } from 'react-native';
import GoalItem from './GoalItem';


const GoalItems = props => {

    return (        
        <ScrollView style={styles.listItems}>
            {props.goals
                ? props.goals.map((goal) => (
                    <GoalItem 
                        item={goal.item}
                        id={goal.key}
                        key={goal.key}
                        onDelete={props.onDelete}>
                    </GoalItem>))
                : null}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    listItems: {
        marginTop: 15,
    }
})


export default GoalItems
