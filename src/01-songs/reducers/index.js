/**
  Reducers
   - - reducer made for learning process - - 
  each reducer get called with an relevant state and action,
  its propose is to model state base on action and return updated state.
  */

// initial state: static data
const songsReducer = () => {
   return [
      { title: "Barbie Girl", duration: "4:05" },
      { title: "No Scrubs", duration: "3:55" },
      { title: "All Star", duration: "3:15" },
      { title: "I Want it That Way", duration: "1:45" },
   ];
};

// Initial State: null, then selected song
const selectedSongReducer = (selectedSong = null, action) => {
   if (action.type === "SONG_SELECTED") {
      return action.payload;
   }
   return selectedSong;
};
