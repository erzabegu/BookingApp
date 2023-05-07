import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC5JRJ7k7QbkVIBw3kPkZQpDyUSIoCelh8",
    authDomain: "bookingapp-a2603.firebaseapp.com",
    projectId: "bookingapp-a2603",
    storageBucket: "bookingapp-a2603.appspot.com",
    messagingSenderId: "633251074283",
    appId: "1:633251074283:web:e41b0a84b420f2c92beeae",
    measurementId: "G-C4BM1J1J19"
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth();
export default firebaseApp;