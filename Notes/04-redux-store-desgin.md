# General Data Loading with Redux

1. render some component onto the screen
2. that component needs to get a data from endpoint in order to displayed correctly.
3. action creator will invoked from componentDidMount
4. action creator will run code to make an http request
5. endpoint response with data
6. action creator will return the action object contain payload property with fetched data.
7. dispatch is going to dispatch that action and send it off to all the different reducers inside the app.
8. reducer will return payload and from up piece of state in the store with fetched data
9. any time fetched data will update, his consumers get updated data via props and re-rendered

# Reducers directory structure

-  each reducer function create in separate file and exported,
-  it imported to index.js (reducers)
-  refereed in combine reducers function

# Reducers Rules

1. must return any value beside of undefined

   -  trow an error
   -  can return any other value, null, num, object
   -  the rule apply to whole lifetime od the reducer
   -  why? sometimes default values assign to start up reducer,  
      the implementation of default value without es6 check the equality of value to undefined,
      if reducer value assign to undefined, during runtime it it will re-assign to the default value.

2. produces "state" / data to be used inside the app using only previous state and the action
3. must not return reach "out of itself" to decide what value to return  
   the idea here is that when reducer get called (reducers are pure)
   it supposed to look at the previous state value and the action object to decide what to return.  
   value we're not supposed to reach out of this function e.g.  
   make an API request, read file, user input,try to pull div / label / input value from the DOM.
4. must not mutate its input state argument
   part of redux reducer implementation

   ```
   let hasChanged = false;

   //Declare type of nextState var
   const nextState: StateFromReducersMapObject<typeof reducers> = {};

   //Loop through the reducers
   for (let i = 0; i < finalReducerKeys.length; i++) {
    const key = finalReducerKeys[i];
    const reducer = finalReducers[key];
    const previousStateForKey = state[key];

    //Send to the reducer prev state, action and save returned value in next state key
    const nextStateForKey = reducer(previousStateForKey, action);

    //When new state is undefined throw an error
    if (typeof nextStateForKey === "undefined") {
        const errorMessage = getUndefinedStateErrorMessage(key, action);
        throw new Error(errorMessage);
    }
    nextState[key] = nextStateForKey;

    //in next and prev state as the same memory address has changed = false
    hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
   }
   hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
   return hasChanged ? nextState : state;
   ```

   when reducer return new value with new memory address,  
   state set to next value and the consumers of this state get notify.  
   when reducer return new value on the same memory address,  
   state set to prev value and consumers of this state not notify.
