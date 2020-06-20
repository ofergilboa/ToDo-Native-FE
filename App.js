import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import GoalInput from './src/components/GoalInput'
import axios from 'axios'
import SearchGoals from './src/components/SearchGoals'
import GoalItems from './src/components/GoalItems'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { searchGoal } from './src/redux/reducers'
import { setSearchFieldAction } from './src/redux/actions'

let route = 'http://10.0.2.2:8181/'

const rootReducer = combineReducers({
    searchGoal
})

const store = createStore(rootReducer)

const App = function App() {

    const [courseGoals, setCourseGoals] = useState([])
    const [isAddGoal, setIsAddGoal] = useState(false)
    const [searchField, setSearchField] = useState('')

    useEffect(() => { getAllGoals() }, [])

    const getAllGoals = async () => {
        console.log('something is working')
        let res = await axios.get(`${route}items`)
        const goals = res.data
        setCourseGoals(goals)
    }

    const addGoal = async (goalTitle) => {
        let key = Math.random().toString()
        setCourseGoals(goals => [...goals, { item: goalTitle, key: key }])
        let newItem = { key: key, item: goalTitle }
        await axios.post(`${route}item`, newItem)
        await getAllGoals()
        setIsAddGoal(false)
    }

    const closeIsAddGoal = () => {
        setIsAddGoal(false)
    }

    const deleteGoal = async (id) => {
        await axios.delete(`${route}item/${id}`)
        getAllGoals()
    }

    const changeSearch = (text) => {
        setSearchField(text)
    }

    const filteredGoals = courseGoals.filter(g => g.item.includes(searchField))

    return (
        <Provider store={store}>
            <View style={styles.screen}>
                <SearchGoals onChange={changeSearch} />
                <Button title="add a goal" onPress={() => setIsAddGoal(true)} />
                <GoalInput onAddGoal={addGoal} visible={isAddGoal} closeMode={closeIsAddGoal} />
                <GoalItems goals={filteredGoals} onDelete={deleteGoal} />
            </View >
        </Provider>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 30,
        paddingTop: 20,
    },

});

export default App