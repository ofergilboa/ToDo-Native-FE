import React from 'react'
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import GoalItem from './GoalItem';
import getSelectors from '../redux/selectors'


const GoalItems = props => {

    const searchField = getSelectors('searchField')
    const goals = getSelectors('goals')

    const filteredGoals = goals.filter(g => g.item.includes(searchField))

    return (
        <ScrollView style={styles.listItems}>
            {filteredGoals[0] ?
                filteredGoals.map((goal) => (
                    <GoalItem
                        item={goal.item}
                        id={goal.key}
                        key={goal.key}
                    >
                    </GoalItem>))
                : <Text>no goals yet</Text>
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    listItems: {
        marginTop: 15,
    }
})


export default GoalItems
