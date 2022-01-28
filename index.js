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
const restRef = db.collection("restaurants");

// // //add each restaurant >>> db.---go into firestore and....
// restRef
//   .add(restaurants[3])
//   .then((doc) => {
//     console.log("Added restaurant", doc.id);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//read one document---go into collection and get a single doc
// restRef
//   .doc("zGeeMU6247M2AWbadu8m")
//   .get()
//   .then((doc) => {
//     console.log(doc.id, " =>", doc.data());
//   })
//   .catch((err) => console.error(err));

//get all documents
// restRef
//   .get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       console.log(doc.id, " => ", doc.data());
//     });
//   })
//   .catch(console.error);

//querying a collection >> find a document(s)---->collection of Bolay's---dont know id but want to get a specific rest
restRef
  .where("name", "==", "McDonald's")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.data());
    });
  })
  .catch(console.error);
