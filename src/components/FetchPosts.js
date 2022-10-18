import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetctPosts } from "../redux/action";
import Post from "./Post";
import Loading from "./Loading";

export default () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.fetctPosts);
  const loading = useSelector((state) => state.app.loading);
  if (loading) {
    return <Loading />;
  }
  if (!posts.length) {
    return (
      <button
        onClick={() => dispatch(fetctPosts())}
        className="btn btn-primary"
      >
        Загрузити
      </button>
    );
  }
  return posts.map((post) => <Post post={post} key={post.id} />);
};
