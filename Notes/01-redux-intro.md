# What is Redux?

-  State management library
-  Not explicitly design to work with react

# Redux Cycle

**Action Creator** ->  
 **Action** ->  
 **Dispatch** ->  
 **Reducers** ->  
 **State**

To change state of app we call an **Action Creator**  
its produces an **Action Object** that send as argument in **dispatch** function  
dispatch, make copies of action and send it to **reducers**  
**reducers** run, process action and modify data, return updated **state**

## Action Creator + Action

Action Creator is function that return an Action object.  
Action object contain type property describe **how** data should changed  
and payload property contain contextual data.

```
const createPolicy = (name, amount) => {
  return {
    type: "CREATE_POLICY",
    payload: { name, amount }
  };
};

const deletePolicy = (name) => {
  return {
    type: "DELETE_POLICY",
    payload: { name }
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: "CREATE_CLAIM",
    payload: { name, amountOfMoneyToCollect }
  };
};
```

## Dispatch

the dispatch function implemented by redux to receive an action,  
make copy of it and send it to one of different reducers.

## Reducers

Reducers contain different reducer functions.
each get called with an relevant state and action,  
its propose is to model state base on action and return updated state.  
**Don't modify state (objects)! Create Copy!**  
in case action is irrelevant to reducer return current state.  
handle inside reducer with the first time it get called with default value.

in our example we will create 3 reducer function:

1. Claims History
2. Accounting
3. Polices

```
const claimsHistory = (listOfClaims = [], action) => {
  if(action.type === "CREATE_CLAIM") {
    return [ ...listOfClaims, action.payload ] // Updated State = copyOfCurrentState + newData
  }
  return listOfClaims // Current State
}

const accounting = (bagOfMoney = 100, action) => {
  if(action.type === "CREATE_CLAIM") {
    return bagOfMoney - action.payload.amountOfMoneyToCollect
  } else if(action.type === "CREATE_POLICY") {
    return bagOfMoney + action.payload.amount
  }
  return bagOfMoney
}

const policies = (listOfPolicies = [], action) => {
  if(action.type === "CREATE_CLAIM") {
    return [ ...listOfPolicies, action.payload ] // Updated State = copyOfCurrentState + newData
  } else if (action.type === "DELETE_POLICY"){
    return listOfPolicies.filter(name => name !== action.payload.name);
  }
  return listOfPolicies // Current State
}
```

## Store

assembly of a collection of different reducers and action creators.  
redux don't allow direct access to state, the only way to access state value is via dispatching an action.

```
const { createStore, combineReducers } = Redux;

// Create initial state object
const state = combineReducers({
  accounting,
  claimsHistory,
  policies
});

// Create Store Object - state manager
const store = createStore(state);

// Dispatch function get an action and send copy of it to each on of store reducers
const action = createPolicy("alex", 20);
store.dispatch(action);

store.dispatch(createPolicy("jim", 30));
store.dispatch(createPolicy("roni", 10));
store.dispatch(createClaim("jim", 120));
store.dispatch(deletePolicy("roni"));


store.getState() // return state object
```
