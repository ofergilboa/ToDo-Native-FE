import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import axios from 'axios'

let route = 'http://10.0.2.2:8181/'


export default function App() {
    const [courseGoals, setCourseGoals] = useState([])
    const [isAddGoal, setIsAddGoal] = useState(false)

    useEffect(() => { getAllGoals() }, [courseGoals])

    const addGoal = async (goalTitle) => {
        let key = Math.random().toString()
        setCourseGoals(goals => [...goals, { item: goalTitle, key: key }])
        let newItem = { key: key, item: goalTitle }
        await axios.post(`${route}item`, newItem)
        getAllGoals()
        setIsAddGoal(false)
    }

    const getAllGoals = async () => {
        let res = await axios.get(`${route}items`)
        const goals = res.data
        setCourseGoals(goals)
    }

    const closeIsAddGoal = () => {
        setIsAddGoal(false)
    }

    const deleteGoal = async (id) => {
        await axios.delete(`${route}item/${id}`)
        getAllGoals()
    }


    return (
        <View style={styles.screen}>
            <Button title="add a goal" onPress={() => setIsAddGoal(true)} />
            <GoalInput onAddGoal={addGoal} visible={isAddGoal} closeMode={closeIsAddGoal} />
            {/* loading the entire list upfront -----------------ScrollView----------*/}
            <ScrollView>
                {courseGoals
                    ? courseGoals.map((goal) => (
                        <GoalItem style={styles.goalsList}
                            item={goal.item}
                            id={goal.key}
                            key={goal.key}
                            onDelete={deleteGoal}>
                        </GoalItem>))
                    : null}
            </ScrollView>

            {/* <FlatList data={courseGoals}
                renderItem={itemData => (
                    <GoalItem
                        item={itemData.item.item}
                        id={itemData.item.key}
                        onDelete={deleteGoal} />)}
            /> */}

        </View >
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 30,
        paddingTop: 40,
    }
});
