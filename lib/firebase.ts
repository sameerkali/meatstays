// import { initializeApp } from "firebase/app";
// import { getAuth, connectAuthEmulator } from "firebase/auth";

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDIInG82_IQD4rNs82n7vCTP6cRJ122moI",
//   authDomain: "meatsays.firebaseapp.com",
//   projectId: "meatsays",
//   storageBucket: "meatsays.firebasestorage.app",
//   messagingSenderId: "441616544048",
//   appId: "1:441616544048:web:ae02814bd2ec13533358f5",
//   measurementId: "G-R1PZFGDNQV"
// };
// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);

// // // Get Firebase Authentication instance
// // const auth = getAuth(app);

// // // Export both app and auth instances
// // export { app, auth };


// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);



import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIInG82_IQD4rNs82n7vCTP6cRJ122moI",
  authDomain: "meatsays.firebaseapp.com",
  projectId: "meatsays",
  storageBucket: "meatsays.firebasestorage.app",
  messagingSenderId: "441616544048",
  appId: "1:441616544048:web:ae02814bd2ec13533358f5",
  measurementId: "G-R1PZFGDNQV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Connect to the Auth emulator only in development mode
// if (process.env.NODE_ENV === 'development') {
//   connectAuthEmulator(auth, "http://localhost:9099");
// }
