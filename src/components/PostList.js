import React from "react";
import Post from "./Post";

function PostList({ posts }) {
	return posts.map((
		post,
		i //i is the index of the post array
	) => (
		<Post key={i} {...post} /* <-- gets all the properties of post object */ />
	));
}

export default PostList;
