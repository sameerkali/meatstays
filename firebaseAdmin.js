// config/firebase/firebaseAdmin.js
const admin = require("firebase-admin");
const serviceAccount = require("./meatsays-firebase-adminsdk-fbsvc-61d23b0a7d.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
