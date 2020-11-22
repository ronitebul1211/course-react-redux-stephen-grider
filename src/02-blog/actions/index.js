import jsonPlaceholder from "../apis/jsonPlaceholder";

/**
 * Action object : {
 *    type: "FETCH_POST"
 *    payload: <optional>
 * }
 */

export const fetchPosts = async () => {
   const response = await jsonPlaceholder.get("/posts");
   console.log(response);
   return {
      type: "FETCH_POST",
      payload: response,
   };
};

/**
 Breaking the rules of action creators
 get error: Action must be plains objects. 
            Use custom middleware for async actions
 */
