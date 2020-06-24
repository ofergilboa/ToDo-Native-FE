import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import GoalInput from './GoalInput'
import axios from 'axios'
import SearchGoals from './SearchGoals'
import GoalItems from './GoalItems'
import { useSelector, useDispatch } from 'react-redux'


let route = 'http://10.0.2.2:8181/'

const AppAid = function App() {

    const [courseGoals, setCourseGoals] = useState([])
    const [isAddGoal, setIsAddGoal] = useState(false)

    const { searchField } = useSelector(state => ({
        ...state.searchGoal
    }));

    useEffect(() => { getAllGoals() }, [])

    const getAllGoals = async () => {
        console.log('getting all goals')
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

    const filteredGoals = courseGoals.filter(g => g.item.includes(searchField))

    return (
        <View style={styles.screen}>
            <SearchGoals />
            <Button title="add a goal" onPress={() => setIsAddGoal(true)} />
            <GoalInput onAddGoal={addGoal} visible={isAddGoal} closeMode={closeIsAddGoal} />
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


// const SearchGoals = (props) => {
//     const { searchField } = useSelector(state => ({
//         ...state.nameReducer
//     }));
//     // const searchField = useSelector(state => state.searchGoal.searchField)

//     // const dispatch = useDispatch()

//     // function handleChange() {
//     //     dispatch({
//     //         type: "CHANGE_SEARCH_FIELD",
//     //         // payload: event.target.value
//     //         payload: text
//     //     });
//     // }

//     return (
//         <View style={styles.searchInput}>
//             <TextInput
//                 placeholder='search for a goal'
//                 // value={searchGoal}
//                 onChangeText={setSearchFieldAction}
//             />
//             <Text>search: {props.searchField} </Text>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     searchInput: {
//         width: '100%',
//         borderWidth: 3,
//         // borderColor: "dodgerblue",
//         borderColor: "lightsteelblue",
//         marginTop: 10,
//         marginBottom: 10,
//         padding: 2,
//         paddingLeft: 20,
//     }
// })



// import React from 'react';
// import { createStore, combineReducers } from "redux";
// import { Provider, useSelector, useDispatch } from "react-redux";


// function counterReducer(state = { count: 5 }, action) {
//     switch (action.type) {
//         case "INCREMENT_COUNT":
//             return {
//                 ...state,
//                 count: state.count + 1
//             };
//         case "DECREMENT_COUNT":
//             return {
//                 ...state,
//                 count: state.count - 1
//             };
//         default:
//             return state;
//     }
// }

// function nameReducer(state = { name: "me" }, action) {
//     switch (action.type) {
//         case "UPDATE_NAME":
//             return {
//                 ...state,
//                 name: action.payload
//             };
//         default:
//             return state;
//     }
// }

// const rootReducer = combineReducers({
//     counterReducer,
//     nameReducer
// });

// const INITIAL_STATE = {};

// const store = createStore(rootReducer, INITIAL_STATE);

// function Counter() {
//     const { count } = useSelector(state => ({
//         ...state.counterReducer
//     }));
//     const dispatch = useDispatch();

//     function incrementCount() {
//         console.log('count' + count)
//         dispatch({
//             type: "INCREMENT_COUNT"
//         });
//     }

//     function decrementCount() {
//         dispatch({
//             type: "DECREMENT_COUNT"
//         });
//     }

//     return (
//         <View>
//             <Text>Counter: {count}</Text>
//             <Text>Counter: {count}</Text>
//             <Text>Counter: {count}</Text>
//             <Text>Counter: {count}</Text>
//             <Button onPress={incrementCount} title='+' />
//             <Button onPress={decrementCount} title='-' />
//             <Text>Counter: {count}</Text>
//         </View>
//     );
// }

// function Name() {
//     const { name } = useSelector(state => ({
//         ...state.nameReducer
//     }));
//     const dispatch = useDispatch();

//     function handleUpdateName(text) {
//         dispatch({
//             type: "UPDATE_NAME",
//             payload: text
//         });
//     }

//     return (
//         <View>
//             <TextInput placeholder="Input your name" onChangeText={handleUpdateName} />
//             <Text>Your name is: {name}</Text>
//         </View>
//     );
// }


// function App() {

//     return (

//         <View className="App">
//             <View>
//                 <Provider store={store}>
//                     <Counter />
//                     <Name />
//                 </Provider>
//             </View>

//         </View>
//     )
// }

// export default App;


