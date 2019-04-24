import firebase from 'firebase'
var config = {
	apiKey: "AIzaSyCKU96HK4Ih2ZEeFj-O7Q3hqRxmTNcMZkg",
	authDomain: "fish-trak.firebaseapp.com",
	databaseURL: "https://fish-trak.firebaseio.com",
	projectId: "fish-trak",
	storageBucket: "fish-trak.appspot.com",
	messagingSenderId: "360850092049"
};
firebase.initializeApp(config);
export default firebase;