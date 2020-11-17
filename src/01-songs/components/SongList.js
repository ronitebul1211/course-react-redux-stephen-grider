import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
   state = {};
   render() {
      console.log(this.props);
      return <div>SongList</div>;
   }
}

const mapStateToProps = (state) => {
   return { songs: state.songs };
};

//connect function return function, SongList component passed in as arg to the function return from connect
// first arg is rference to function get called with whole state and return object that will shows as props in component
export default connect(mapStateToProps)(SongList);
