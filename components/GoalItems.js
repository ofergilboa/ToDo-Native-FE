import React from 'react'
import { StyleSheet, Text, View, Touchable, TouchableOpacity, ScrollView } from 'react-native';

const GoalItems = props => {



    return (
        <ScrollView>
            {goalsToShow
                ? goalsToShow.map((goal) => (
                    <GoalItem style={styles.goalsList}
                        item={goal.item}
                        id={goal.key}
                        key={goal.key}
                        onDelete={deleteGoal}>
                    </GoalItem>))
                : null}
        </ScrollView>
    )
}

export default GoalItems
