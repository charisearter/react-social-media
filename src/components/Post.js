import React, { Fragment } from "react";

function Post({ image, content, user }) {
	// <--- deconstructed post object
	return (
		<Fragment>
			{image && (
				<img
					style={{ height: 100, width: 200, objectFit: "cover" }}
					src={URL.createObjectURL(image)}
					alt="Post cover"
				/>
			)}
			<p>{content}</p>
			<div>{user}</div>
		</Fragment>
	);
}

export default Post;
