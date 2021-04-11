import React, { useEffect, useState } from "react";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import Header from "./components/header/header.component";
import "./App.css";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { Switch, Route, Redirect } from "react-router-dom";
import CurrentUserContext from "./contexts/current-user/current-user.context";

const App = () => {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
			}

			setCurrentUser(userAuth);
		});
	}, []);

	return (
		<div>
			<CurrentUserContext.Provider value={currentUser}>
				<Header />
			</CurrentUserContext.Provider>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
				<Route exact path="/checkout" component={CheckoutPage} />
				<Route
					exact
					path="/signin"
					render={() =>
						currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
					}
				/>
			</Switch>
		</div>
	);
};

export default App;
