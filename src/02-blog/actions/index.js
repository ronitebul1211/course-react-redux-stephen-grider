import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

export const fetchPostAndUsers = () => async (dispatch, getState) => {
   await dispatch(fetchPosts());
   // const userIds = _.uniq(_.map(getState().posts, "userId"));
   // userIds.forEach((id) => dispatch(fetchUser(id)));
   _.chain(getState().posts)
      .map("userId")
      .uniq()
      .forEach((id) => dispatch(fetchUser(id)))
      .value();
};

export const fetchPosts = () => async (dispatch) => {
   const response = await jsonPlaceholder.get("/posts");

   dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
   const response = await jsonPlaceholder.get(`/users/${id}`);
   dispatch({ type: "FETCH_USER", payload: response.data });
};

//  Syntax
//  fetch post is async arrow function that return anonymous function that make network request and dispatch it

/**
 * To prevent multiple fetch request the get user details with the same user id
 * we will use memoize function of lodash library that save the result of function with specific set of args
 * and return cached result when it get set of arg that its result exist in memory
 * */
// export const fetchUser = function (id) {
//    return function (dispatch) {
//       _fetchUser(id, dispatch);
//    };
// };

// export const _fetchUser = _.memoize(async (id, dispatch) => {
//    const response = await jsonPlaceholder.get(`/users/${id}`);
//    dispatch({ type: "FETCH_USER", payload: response.data });
// });
