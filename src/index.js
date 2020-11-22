// // 01 - Songs App
// import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { createStore } from "redux";
// import SongsApp from "./01-songs/components/SongsApp";
// import songsAppReducers from "./01-songs/reducers";
// ReactDOM.render(
//    <Provider store={createStore(songsAppReducers)}>
//       <SongsApp />
//    </Provider>,
//    document.querySelector("#root"),
// );

// 02 - Blog App
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import BlogApp from "./02-blog/components/BlogApp";
import reducers from "./02-blog/reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
   <Provider store={store}>
      <BlogApp />
   </Provider>,
   document.querySelector("#root"),
);
