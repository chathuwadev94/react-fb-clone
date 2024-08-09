import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {

};

const firebaseApp = firebase.initializeApp(firebaseConfig);
console.log(firebaseApp); //
// Initialize Firestore and Auth services
const db = firebaseApp.firestore();
const auth = firebase.auth();

// Set up the Google Auth provider
const provider = new firebase.auth.GoogleAuthProvider();

// Export the auth, provider, and db objects
export { auth, provider };
export default db;