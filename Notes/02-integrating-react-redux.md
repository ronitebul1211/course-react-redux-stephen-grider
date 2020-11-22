# Install Redux

npm install --save redux react-redux

# How React Redux work

create 2 components of type:

1. Provider
2. Connect

the **store** object (createStore(reducers)), passed to the **provider** component via props,  
that wrap app component.  
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

4. **configure Connect component to Consume state**

   -  import { connect } from react-redux
   -  define mapStateToProps function - define what piece of state current component will get via props.  
      the function get app state and return an object represent state piece component "watch" for.

      ```
      // name by convention
      const mapStateToProps = (state) => {
         return { songs: state.songs };
      };
      ```

   -  update export statement (wrapping the component with connect component)->
      ```
      export default connect(mapStateToProps)(SongList);
      ```
   -  pass to second parenthesis ref to current component its passed to inner function  
      that return from connect with wrapped component (for passing additional props).
   -  Now component props there is an access to relevant state, dispatch function.

5. **configure Connect component to Set state**

   -  import relevant action creators
   -  pass to connect function second arg -> action creator functions object  
      consist from key value paris of function name + ref
      ```
      const actionCreatorsObject = {actionCreator1, actionCreator2}
      export default connect(mapStateToProps, actionCreatorsObject )(SongList);
      ```
   -  set state via action creator
      ```
      props.actionCreator1(arg...)
      ```
      **NOTE**  
       when action creators object passed to connect fun,  
       the ref to dispatch fun replaced by ref to passed action creators func (in props).
   -  **Why we didn't use action creator directly**  
       **instead of passing it to connect function and get reference from props?**
      -  Redux doesn't automatically detect action creator being called
      -  Redux doesn't automatically detect function returning action object
   -  **So, What happen ?**  
       action creator declare as plain JS function and imported to component who need to update state  
       if its get called directly it will return an action object, and that it!  
       to deliver action to the reducer -> dispatch(action) should get called  
      when functions object passed to connect function,  
      its wrap each of these function
      in new function that will create an action and dispatch it,  
       reference to the new function passed to the component via props.
