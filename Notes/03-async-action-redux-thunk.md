# Install Redux thunk

npm install --save redux-thunk

# Redux Thunk

the middleware of redux library are essentially functions  
that is going to slightly change the behavior of the redux store.  
So new capabilities/features have been added to the redux side of the application.  
redux-thunk is a middleware that helps to make network requests from reducers.

# Fetch data with Redux

1. render some component onto the screen
2. that component needs to get a data from endpoint in order to displayed correctly.
3. action creator will invoked from componentDidMount
4. action creator will run code to make an http request
5. endpoint response with data
6. action creator will return the action object contain payload property with fetched data.
7. dispatch is going to dispatch that action and send it off to all the different reducers inside the app.
8. reducer will return payload and from up piece of state in the store with fetched data
9. any time fetched data will update, his consumers get updated data via props and re-rendered

### Summery

-  component's responsible fetching data they need by calling action creator.
-  action creator responsible for making API request (with redux thunk)
-  updated state, will send to state consumers via props after update

# Making network request from Action Creator

-  **BAD APPROACH !**

   ```
   export const fetchPosts = async () => {
     const response = await jsonPlaceholder.get("/posts");
     return {
         type: "FETCH_POST",
         payload: response,
     };
   };
   ```

   Breaking the rules of action creators:  
   get **Error**: Action must be plains objects.
   Use custom middleware for async actions

### Whats Wrong ?

-  **Action creators must return plain JS objects with a type property (it is not!)**  
   async await syntax has gets transpired down to ES2015 to run on browser,  
    the code run on browser different from the ES6 written code.  
   instead of returning action object, request object returned first. (babel IO)

-  **by the time actions gets to a reducer, data wasn't fetched**  
   even if we remove async await syntax, and save to promise instead.  
   because the following flow execute in fraction of second:  
   Action creator called -> Action returned -> Action sent to all reducers -> Reducers run

### Middleware in Redux

when action creator executes in an async way, middleware needed.  
Action creator -> Action -> dispatch -> middleware -> reducers -> state

-  middleware function get called with every dispatched action.
-  it has the ability to stop / modify / mess around with actions

### Action Creator rules

-  Sync
   -  must return an action object
   -  that object must have type property
   -  optionally have payload
-  Async
   -  must return action object OR function
   -  if object must have type property
   -  if object optionally have payload

### Behind the Scenes of Redux Thunk

1. Action creator return object (sync) / function (async)
2. dispatch() pass the returned value from the action creator to the thunk middleware
3. redux thunk test action

   -  Object case: redux-thunk pass the action object to the reducers
   -  Function case:

      -  redux thunk invoke the function with 2 args: dispatchRef, getStateRef
      -  inside that function dispatch going to get called manually when async operation will end and pass an action object.
      -  action object passed to the reducers
      -  redux-thunk implementation

      ```
      function createThunkMiddleware(extraArgument) {
         return ({ dispatch, getState }) => (next) => (action) => {
            if (typeof action === 'function') {
               return action(dispatch, getState, extraArgument);
            }

            return next(action);
         };
      }

      const thunk = createThunkMiddleware();
      thunk.withExtraArgument = createThunkMiddleware;

      export default thunk;
      ```
