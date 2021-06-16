import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyAHsGfYoJcs2mk57funGbTXgor_RTtoYD4",
    authDomain: "netflix-fa604.firebaseapp.com",
    projectId: "netflix-fa604",
    storageBucket: "netflix-fa604.appspot.com",
    messagingSenderId: "116036223051",
    appId: "1:116036223051:web:850ae4dc61832ec8930dce"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };