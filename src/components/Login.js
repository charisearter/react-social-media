import React, { useState } from "react";

function Login({ setUser }) {
	//deconstruct props ES6
	const [ username, setUsername ] = useState("");

	function handleSubmit(event) {
		event.preventDefault(); //stops auto refresh
		setUser(username); // lifted up to App via props thru a callback
	}

	return (
		<div>
			<h2>Login</h2>
			<form onSubmit={handleSubmit}>
				<input
					onChange={(event) => setUsername(event.target.value)}
					placeholder="Input username"
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default Login;
