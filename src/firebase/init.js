import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: 'AIzaSyBVPmt-oPTtPT0GepwX8mYzJ_aiKomJlwU',
  authDomain: 'jayga-240907.firebaseapp.com',
  databaseURL: 'https://jayga-240907.firebaseio.com',
  projectId: 'jayga-240907',
  storageBucket: '',
  messagingSenderId: '884162021375',
  appId: '1:884162021375:web:fd791117382820ec'
}

firebase.initializeApp(config)
