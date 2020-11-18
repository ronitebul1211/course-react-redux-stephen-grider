import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
   renderList() {
      return this.props.songs.map((song) => {
         return (
            <div className="item" key={song.title}>
               <div className="right floated content">
                  <button className="ui button primary">SELECT</button>
               </div>

               <div className="content">{song.title}</div>
            </div>
         );
      });
   }
   render() {
      return <div className="ui divided list">{this.renderList()}</div>;
   }
}

const mapStateToProps = (state) => {
   return { songs: state.songs };
};

//connect function return function, SongList component passed in as arg to the function return from connect
// first arg is rference to function get called with whole state and return object that will shows as props in component
export default connect(mapStateToProps)(SongList);
