import React, { Fragment } from "react";
import { UserContext } from "../App";

function Post({ image, content, user }) {
	//const isCurrentUser = currentUser === user;
	// <--- deconstructed post object
	return (
		<UserContext.Consumer>
			{(currentUser) => (
				<Fragment>
					{image && (
						<img
							style={{ height: 100, width: 200, objectFit: "cover" }}
							src={URL.createObjectURL(image)}
							alt="Post cover"
						/>
					)}
					<p>{content}</p>
					<div style={{ color: currentUser === user && "green" }}>{user}</div>
				</Fragment>
			)}
		</UserContext.Consumer>
	);
}

export default Post;
