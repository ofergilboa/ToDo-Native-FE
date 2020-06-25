import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import GoalInput from './GoalInput'
import axios from 'axios'
import SearchGoals from './SearchGoals'
import GoalItems from './GoalItems'
import { useSelector, useDispatch } from 'react-redux'
import { setIsAddGoalAction, setAllGoalsAction } from '../redux/actions'


let route = 'http://10.0.2.2:8181/'

const AppAid = function App() {

    const dispatch = useDispatch()
    const { searchField } = useSelector(state => ({
        ...state.searchGoalReducer
    }));
    const { goals } = useSelector(state => ({
        ...state.setAllGoalsReducer
    }));
    useEffect(() => { getAllGoals() }, [])

    const getAllGoals = async () => {
        console.log('getting all goals')
        let res = await axios.get(`${route}items`)
        const goals = res.data
        console.log(goals)
        setAllGoalsAction(goals, dispatch)
    }

    const addGoal = async (goalTitle) => {
        let key = Math.random().toString()
        let newItem = { key: key, item: goalTitle }
        await axios.post(`${route}item`, newItem)
        await getAllGoals()
        await setIsAddGoalAction(false, dispatch)
    }

    const setIsAddGoal = (boolean) => {
        setIsAddGoalAction(boolean, dispatch)
    }

    const deleteGoal = async (id) => {
        await axios.delete(`${route}item/${id}`)
        getAllGoals()
    }

    const filteredGoals = goals.filter(g => g.item.includes(searchField))

    return (
        <View style={styles.screen}>
            <SearchGoals />
            <Button title="add a goal" onPress={() => setIsAddGoal(true)} />
            <GoalInput onAddGoal={addGoal} />
            <GoalItems goals={filteredGoals} onDelete={deleteGoal} />
        </View >
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 30,
        paddingTop: 20,
    },

});

export default AppAid


