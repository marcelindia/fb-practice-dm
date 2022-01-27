//import our restaurants--bringing in restaurants
const restaurants = require("./restaurants.json");

//console.log(restaurants[0].name); ---to make sure first import works

//import set of tools to talk to Firebase && Firestore
const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");

//import our credentials---private key (no one can see)
const credentials = require("./credentials.json");

//connect to firebase services---connecting to firebase project
initializeApp({
  credential: cert(credentials),
});
//connect to Firestore----connected to database

const db = getFirestore();

//create a collection called "restaurants"

//add each restaurant
db.collection("restaurants")
  .add(restaurants[0])
  .then((doc) => {
    console.log("Added restaurant", doc.id);
  })
  .catch((err) => {
    console.error(err);
  });
