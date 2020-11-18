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
