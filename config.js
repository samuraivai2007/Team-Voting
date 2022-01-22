import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCHGv7hiUmYuIsdE1Wt7apTX4QCn5bF0pU",
    authDomain: "c67-bdd0b.firebaseapp.com",
    databaseURL: "https://c67-bdd0b-default-rtdb.firebaseio.com",
    projectId: "c67-bdd0b",
    storageBucket: "c67-bdd0b.appspot.com",
    messagingSenderId: "445657997653",
    appId: "1:445657997653:web:4cd96e45bd8ca74d6b0fdc",
    measurementId: "G-MTB4CLHDRV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();