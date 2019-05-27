import * as firebase from 'firebase'
import moment from 'moment'

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

const database = firebase.database()

database
  .ref('expenses')
  .on('child_removed', snapshot => {
    console.log(snapshot.key, snapshot.val())
  })

database
  .ref('expenses')
  .on('child_changed', snapshot => {
    console.log(snapshot.key, snapshot.val())
  })

// const onValueChange = database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = []
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses)
//   })


// database.ref('expenses').push({
//   description: 'Gas',
//   note: 'For Cooking',
//   amount: 76500,
//   createdAt: moment(0).subtract(4, 'days').valueOf()
// })


// database.ref('expenses').push({
//   description: 'Rent',
//   note: 'Final Payment',
//   amount: 400000,
//   createdAt: moment(0).valueOf()
// })

// database.ref('expenses').push({
//   description: 'Water',
//   note: '',
//   amount: 2500,
//   createdAt: moment(0).add(4, 'days').valueOf()
// })


// const onValueChange = database.ref().on('value', (snapshot) => {
//   const data = snapshot.val()
//   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`)
// })

// database.ref().set({
//   name: 'Venkat Raj',
//   age: 45,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Salem',
//     state: 'Tamilnadu',
//     country: 'India'
//   }
// }).then(() => {
//   console.log('Data saved!')
// }).catch((e) => {
//   console.log('Error: ', e)
// })

// database.ref().update({
//   name: 'Mike',
//   'job/title': 'Software Engineer',
//   'job/company': 'Uber'
// })

// database.ref().off('value', onValueChange)


// database.ref('name').set('Andrew')



// database.ref()
//   .update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
//   })
//   .then(() => {
//     console.log('Data updated!')
//   })
//   .catch(e => {
//     console.log('Data did not updated', e)
//   })