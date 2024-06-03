const { initializeApp } = require("firebase/app");
const {
  deleteDoc,
  doc,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc
} = require("firebase/firestore");

// Firebase config and initialization
// Prod applications might use config file
const { FIRE_API_KEY, FIRE_DOMAIN, FIRE_PROJECT_ID } = process.env;
const firebaseConfig = {
  apiKey: FIRE_API_KEY,
  authDomain: FIRE_DOMAIN,
  projectId: FIRE_PROJECT_ID,
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Firestore data management functions

async function setStore(session) {
  const { accessToken, storeHash, uuid } = session;
  // Only set on app install or update
  if (!accessToken) return null;

  console.log(session, "sesstoin");

  const ref = doc(db, "store", storeHash);
  const data = { accessToken, uuid };

  await setDoc(ref, data);
}

async function updateStore() {
  const storeDoc = await getDoc(doc(db, 'store', storeHash));
  const ref = doc(db, "store", storeHash);
  await updateDoc(ref, data);
}

async function getStore(storeHash) {
  const storeDoc = await getDoc(doc(db, 'store', storeHash));
  // console.log(storeDoc, "storeDoc")
}

async function deleteStore() {
  const ref = doc(db, "store", storeHash);

  await deleteDoc(ref);
}

module.exports = { setStore, deleteStore , getStore};
