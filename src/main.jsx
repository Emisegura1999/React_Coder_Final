import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, CSSReset, Box } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2K4Aq_R-vDPKUymbcfGOT4Gpv_JDzT8Y",
  authDomain: "e-commercesegura.firebaseapp.com",
  projectId: "e-commercesegura",
  storageBucket: "e-commercesegura.appspot.com",
  messagingSenderId: "25206479475",
  appId: "1:25206479475:web:e7b702d53320421c65e806",
  measurementId: "G-E1N17TQ1B2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



ReactDOM.createRoot(document.getElementById('root')).render( 
<ChakraProvider>
<CSSReset />
      <Box bg="black" minH="100vh">
  <App />
      </Box>
</ChakraProvider>
)