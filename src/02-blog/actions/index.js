import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async (dispatch) => {
   const response = await jsonPlaceholder.get("/posts");

   dispatch({ type: "FETCH_POSTS", payload: response.data });
};
// export const fetchPosts = async () => async (dispatch) => {
//    const response = await jsonPlaceholder.get("/posts");
//    dispatch({ type: "FETCH_POSTS", payload: response });
// };

/**
 * Syntax
 * fetch post is async arrow function that return anonymous function that make network request and dispatch it
 */
