// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBnX6fm4dbtte3AnuS1qIh07XjkCKxHJyw',
  authDomain: 'insta-next-app.firebaseapp.com',
  projectId: 'insta-next-app',
  storageBucket: 'insta-next-app.appspot.com',
  messagingSenderId: '624103018984',
  appId: '1:624103018984:web:72c70c1af95626484a545d',
  measurementId: 'G-EJRZNV794C',
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
