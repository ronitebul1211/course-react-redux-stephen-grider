export default (state = [], action) => {
   switch (action.type) {
      case "FETCH_POSTS":
         return action.payload;
      default:
         return state;
   }
};

/**
 * if type isn't fetch post return current state - not undefined anyway
 */
