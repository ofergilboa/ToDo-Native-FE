import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREMENT_COUNT":
      return {
        ...state,
        count: state.count + 1
      };
    case "DECREMENT_COUNT":
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
}

function nameReducer(state = { name: "" }, action) {
  switch (action.type) {
    case "UPDATE_NAME":
      return {
        ...state,
        name: action.payload
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counterReducer,
  nameReducer
});

const INITIAL_STATE = {};

const store = createStore(rootReducer, INITIAL_STATE);

function App() {
  return (
    <Provider store={store}>
      <Counter />
      <Name />
    </Provider>
  );
}

function Counter() {
  const { count, name } = useSelector(state => ({
    ...state.counterReducer,
    ...state.nameReducer
  }));
  const dispatch = useDispatch();

  function incrementCount() {
    dispatch({
      type: "INCREMENT_COUNT"
    });
  }

  function decrementCount() {
    dispatch({
      type: "DECREMENT_COUNT"
    });
  }

  return (
    <>
      <h2>Counter: {count}</h2>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
      <div>
        <h3>Your name is: {name}</h3>
      </div>
    </>
  );
}

function Name() {
  const dispatch = useDispatch();

  function handleUpdateName(event) {
    dispatch({
      type: "UPDATE_NAME",
      payload: event.target.value
    });
  }

  return (
    <div>
      <input placeholder="Input your name" onChange={handleUpdateName} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);




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


