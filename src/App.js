import React, { Fragment, useState, useEffect } from "react";
import Login from "./components/Login";
import Header from "./components/Header";

function App() {
	const [user, setUser] = useState("Reese");

	useEffect(() => {
		document.title = user ? `${user}'s Feed` : "Please log in";
	}, [user]);

	if (!user) {
		// if no user, go to login page
		return <Login setUser={setUser} />;
	}

	return (
		<Fragment>
			<Header user={user} setUser={setUser} />
			<h1>App</h1>
		</Fragment>
	);
}

export default App;
