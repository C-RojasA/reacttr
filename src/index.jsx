import React from 'react'
import { render } from 'react-dom'
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyBax1Kpd7jXcjXcLsNgkV6Mcd0t8g37WlU',
  authDomain: 'curso-react-984f9.firebaseapp.com',
  databaseURL: ' https://curso-react-984f9.firebaseio.com',
  projectId: 'curso-react-984f9',
  storageBucket: '',
  messagingSenderId: '77704771423'
})

import App from './components/App'

render(<App />, document.getElementById('root'))
