import React from "react";
import SongList from "./SongList";
import SongDetails from "./SongDetails";

const SongsApp = () => {
   return (
      <div className="ui container grid">
         <div className="ui row">
            <div className="column eight wide">
               <SongList />
            </div>
            <div className="column eight wide">
               <SongDetails />
            </div>
         </div>
      </div>
   );
};

export default SongsApp;
