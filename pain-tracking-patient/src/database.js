import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAkKFof-bTeRVV5O_Ar5B0BuxIYIRiGJ8A",
	authDomain: "pain-tracker-6d511.firebaseapp.com",
	projectId: "pain-tracker-6d511",
	storageBucket: "pain-tracker-6d511.appspot.com",
	messagingSenderId: "338905644906",
	appId: "1:338905644906:web:6c911f9bfc13ab9010af13",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
