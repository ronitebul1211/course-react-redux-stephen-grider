import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
// App List
import SongsApp from "./01-songs/components/SongsApp";
import songsAppReducers from "./01-songs/reducers";

ReactDOM.render(
   <Provider store={createStore(songsAppReducers)}>
      <SongsApp />
   </Provider>,
   document.querySelector("#root"),
);
