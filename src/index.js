import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
// // 01 - Songs App
// import SongsApp from "./01-songs/components/SongsApp";
// import songsAppReducers from "./01-songs/reducers";
// ReactDOM.render(
//    <Provider store={createStore(songsAppReducers)}>
//       <SongsApp />
//    </Provider>,
//    document.querySelector("#root"),
// );

// 01 - Blog App
import BlogApp from "./02-blog/components/BlogApp";
import reducers from "./02-blog/reducers";

ReactDOM.render(
   <Provider store={createStore(reducers)}>
      <BlogApp />
   </Provider>,
   document.querySelector("#root"),
);
