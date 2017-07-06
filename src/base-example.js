import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'

const app = firebase.initializeApp({
    yoStuff: "yoStuff"
})

const db = database(app)

export default Rebase.createClass(db)

