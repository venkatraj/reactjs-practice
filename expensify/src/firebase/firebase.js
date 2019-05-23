import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCecm8u40wq23Lbwywp4ZcmDABH5Ue04EQ",
  authDomain: "expensify-1ff3a.firebaseapp.com",
  databaseURL: "https://expensify-1ff3a.firebaseio.com",
  projectId: "expensify-1ff3a",
  storageBucket: "expensify-1ff3a.appspot.com",
  messagingSenderId: "479937246844",
  appId: "1:479937246844:web:1e4a27e1585a4cf5"
};

firebase.initializeApp(config);

firebase.database().ref().set({
  name: 'Venkat Raj'
})