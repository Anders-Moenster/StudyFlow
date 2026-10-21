import { initializeApp } from 'firebase/app'; //Forbinder appen med Firebase
import { getDatabase } from 'firebase/database'; // Giver appen adgang til Databasen

//Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfG1VjwCsG9rA4F8id-UPD4okkJlOtZJU",
    authDomain: "studyflow-cc92f.firebaseapp.com",
    databaseURL: "https://studyflow-cc92f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "studyflow-cc92f",
    storageBucket: "studyflow-cc92f.firebasestorage.app",
    messagingSenderId: "72201253209",
    appId: "1:72201253209:web:a66c1bfd60eb83b5201c48"
};

const app = initializeApp(firebaseConfig); //Starter forbindelsen til Firebase

const database = getDatabase(app); //Henter realtime database

export { database }; //Gør databasen tilgængelig i andre filer