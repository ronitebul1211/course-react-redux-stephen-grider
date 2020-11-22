import { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends Component {
   componentDidMount() {
      this.props.fetchPosts();
   }

   render() {
      return (
         <div className="ui relaxed divided list">
            {this.props.posts.map((post) => (
               <div key={post.id} className="item">
                  <Post title={post.title} body={post.body} />
                  <UserHeader userId={post.userId} />
               </div>
            ))}
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);

const Post = ({ title, body }) => {
   return (
      <Fragment>
         <i className="large middle aligned icon user" />
         <div className="content">
            <h2>{title}</h2>
            <p>{body}</p>
         </div>
      </Fragment>
   );
};
