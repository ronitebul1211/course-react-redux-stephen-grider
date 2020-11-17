# Install Redux

npm install --save redux react-redux

# How React Redux work

create 2 components of type:

1. Provider
2. Connect

the **store** object, passed in to the **provider** component,  
that should be the root of app hierarchy (wrap app component).  
**provider** get reference to **store** holding **state** and it can provide it to the all app.  
each component that need an access to the **state** will be wrap with **connect** component.  
the **connect** component communicate with the **provider** via context system,  
that allow every parent component to communicate directly with his child's.  
than, **connect** configured that when its rendered  
it will let the provider know what piece of state it need.  
provider send initial data + updates to connect component,  
that will pass data to relevant component via props.

# Project Structure

-  actions
-  components
-  reducers
-  index.js

as convention index.js file will crete in action, reducers directories.  
when imported, path to the directory will auto import index files.

# Work Flow

1. **create actions creators**
   -  inside actions/index.js
   -  add action creator functions
   -  export each
2. **create reducers**
   -  inside reducers/index.js
   -  add reducer functions
   -  import combineReducers from redux
   -  pass in state object ( key + reducer returned value )
   -  export default the returned value from combineReducer
3. **wrap app with state provider**

   -  inside index.js
   -  import { Provider } from react-redux
   -  import { createStore } from redux
   -  import reducers
   -  wrap app with provider
   -  create store with app reducers and pass it to the provider wrap app component
      ```
      <Provider store={createStore(songsAppReducers)}>
         <SongsApp />
      </Provider>
      ```

4. **configure connect component inside state consumer component**

   -  import { connect } from react-redux
   -  define outside of component (class / function) above export statement  
       function that get called with app state, and return the part that component want to "listen / watch"  
      key pass in to current component as props.

      ```
      // name by convention
      const mapStateToProps = (state) => {
         return { songs: state.songs };
      };
      ```

   -  update export statement ->
      ```
      export default connect(mapStateToProps)(SongList);
      ```
      connect function first arg is define which part of state is going to passed as props to current component.  
       the second arg passed as an arg to inner function return from connect.
   -  from component props there is an access to relevant state, dispatch function
