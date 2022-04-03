import "firebase/compat/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import { config } from "./Config";

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const firestore = app.firestore();
export const db = firebase.firestore();
// export const storage = app.storage();

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export async function createUser(userId, user) {
  try {
    // console.log("creating user with " + userId);
    await db.collection("users").doc(userId).set(user);
  } catch (err) {
    console.error(err);
  }
}

export async function updateUser(userId, user) {
  try {
    console.log(userId);
    await db.collection("users").doc(userId).update(user);
  } catch (err) {
    console.error(err);
  }
}