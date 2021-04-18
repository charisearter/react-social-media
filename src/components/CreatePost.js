import React, { useState, useRef } from "react";

function CreatePost({ user, handleAddPost }) {
	const [content, setContent] = useState("");
	const [image, setImage] = useState(null);
	const imageInputRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		const post = { content, image, user }; //same name and value, so easy to condense to single value ex. content: content
		handleAddPost(post);
		setContent(""); // clear content input after submit
		imageInputRef.current.value = ""; //clears image input after submit
	};

	return (
		<div>
			<h1>Create New Post</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Add Post Content"
					onChange={(event) => setContent(event.target.value)}
					value={content}
				/>
				{/* event.target.files => array (file list), and want to find first element in array and pass it to set Image */}
				<input
					type="file"
					onChange={(event) => setImage(event.target.files[0])}
					ref={imageInputRef}
				/>

				<button type="submit">Submit Post</button>
			</form>
		</div>
	);
}

export default CreatePost;
