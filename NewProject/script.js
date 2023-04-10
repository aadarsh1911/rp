// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js';
import {
	getFirestore,
	collection,
	addDoc,
} from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAfhMIm-OOxewMQ1MJE3k2k-xjgIIyBCzg',
	authDomain: 'blogapp-38078.firebaseapp.com',
	projectId: 'blogapp-38078',
	storageBucket: 'blogapp-38078.appspot.com',
	messagingSenderId: '990045005593',
	appId: '1:990045005593:web:518967642b8428e0f60788',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const emailsCollection = collection(db, 'emails');

async function subscribe(event) {
	event.preventDefault();
	const email = {
		email: event.target[0].value,
	};
	await addDoc(emailsCollection, email)
		.then((docRef) => {
			console.log('Email added with ID: ', docRef.id);
		})
		.catch((error) => {
			console.error('Error adding email: ', error);
		});
	console.log(event.target[0].value);
}

document.getElementById('subscribe-form').addEventListener('submit', subscribe);
