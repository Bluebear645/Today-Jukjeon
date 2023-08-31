// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDyWsuym09zXOtjyUlURoMLChCBfcqIOGc',
    authDomain: 'today-jukjeon.firebaseapp.com',
    projectId: 'today-jukjeon',
    storageBucket: 'today-jukjeon.appspot.com',
    messagingSenderId: '528392246599',
    appId: '1:528392246599:web:567faab209581cb9da2862',
    measurementId: 'G-ELH77DH93B',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
