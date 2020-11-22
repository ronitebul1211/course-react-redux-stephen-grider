import { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends Component {
   componentDidMount() {
      this.props.fetchPosts();
   }

   render() {
      return (
         <div className="ui relaxed divided list">
            {this.props.posts.map((post) => (
               <Post key={post.id} title={post.title} body={post.body} />
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
      <div className="item">
         <i className="large middle aligned icon user" />
         <div className="content">
            <h2>{title}</h2>
            <p>{body}</p>
         </div>
      </div>
   );
};
