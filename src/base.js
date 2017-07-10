import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'

const app = firebase.initializeApp({
    apiKey: "AIzaSyBsg8D1sosZbThn3x-yiKbXnVxQhEQAOT4",
    authDomain: "noteherder-1a839.firebaseapp.com",
    databaseURL: "https://noteherder-1a839.firebaseio.com",
    projectId: "noteherder-1a839",
    storageBucket: "noteherder-1a839.appspot.com",
    messagingSenderId: "141296143467"
  })

const db = database(app)

export default Rebase.createClass(db)

