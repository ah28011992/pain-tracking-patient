import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./database";
import Layout from "./Layout";

function Dashboard() {
	const auth = getAuth();
	const [userDetails, setUserDetails] = useState(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (user) => {
			if (user) {
				try {
					const userDocRef = doc(db, "users", user.uid);
					const userDoc = await getDoc(userDocRef);

					if (userDoc.exists()) {
						const userData = userDoc.data();
						setUserDetails(userData);
					} else {
						console.log("User data not found in Firestore");
					}
				} catch (error) {
					console.error("Error fetching user data:", error.message);
				}
			} else {
				// User is signed out
				setUserDetails(null);
			}
		});

		return () => unsubscribe(); // Cleanup on component unmount
	}, [auth]);

	return (
		<div>
			<Layout>
				{userDetails ? (
					<>
						<div>
							<h1>
								Welcome {userDetails.firstName}
								{userDetails.lastName}
							</h1>
						</div>
					</>
				) : (
					<p>...Loading</p>
				)}
			</Layout>
		</div>
	);
}

export default Dashboard;
