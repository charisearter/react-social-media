import React, { Fragment, useState, useEffect, useCallback } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

function App() {
	const [user, setUser] = useState("Reese");
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		document.title = user ? `${user}'s Feed` : "Please log in";
	}, [user]);

	const handleAddPost = useCallback( // renders when posts changes only 
		(newPost) => {
			setPosts([newPost, ...posts]);
		},
		[posts]
	);

	if (!user) {
		// if no user, go to login page
		return <Login setUser={setUser} />;
	}

	return (
		<Fragment>
			<Header user={user} setUser={setUser} />
			<CreatePost user={user} handleAddPost={handleAddPost} />
			<PostList posts={posts} />
		</Fragment>
	);
}

export default App;
