import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import axios from 'axios'
import SearchGoals from './components/SearchGoal';
import GoalItems from './components/GoalItems';

let route = 'http://10.0.2.2:8181/'


export default function App() {
    const [courseGoals, setCourseGoals] = useState([])
    const [isAddGoal, setIsAddGoal] = useState(false)
    const [goalsToShow, setGoalsToShow] = useState([])
    const [searchGoal, setSearchGoal] = useState('')


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

    const onSearchGoal = async (text) => {
        console.log(courseGoals[0].item)
        let filteredGoals = courseGoals.filter(g => g.item.includes(text))
        setGoalsToShow(filteredGoals)
    }


    return (
        <View style={styles.screen}>
            <SearchGoals onChange={onSearchGoal} />
            <Button title="add a goal" onPress={() => setIsAddGoal(true)} />
            <GoalInput onAddGoal={addGoal} visible={isAddGoal} closeMode={closeIsAddGoal} />
            <GoalItems goals={goalsToShow} />
        </View >
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 30,
        paddingTop: 40,
    }
});
