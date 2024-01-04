# co42b487d95fbd5b5c8f9c4a8

Warning: Vite enforces using jsx syntax inside jsx/tsx files, so it will complain about that. Solution: rename `.js` files to `.jsx` :)

Quick start:

```
$ npm install
$ npm start
````

Head over to https://vitejs.dev/ to learn more about using vite
## About Scrimba

At Scrimba our goal is to create the best possible coding school at the cost of a gym membership! 💜
If we succeed with this, it will give anyone who wants to become a software developer a realistic shot at succeeding, regardless of where they live and the size of their wallets 🎉
The Frontend Developer Career Path aims to teach you everything you need to become a Junior Developer, or you could take a deep-dive with one of our advanced courses 🚀

- [Our courses](https://scrimba.com/allcourses)
- [The Frontend Career Path](https://scrimba.com/learn/frontend)
- [Become a Scrimba Pro member](https://scrimba.com/pricing)

Happy Coding!





// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD84Use_nVHgkc_s_mp-G7rXvzGk9Ry7SQ",
  authDomain: "react-notes-28eb3.firebaseapp.com",
  projectId: "react-notes-28eb3",
  storageBucket: "react-notes-28eb3.appspot.com",
  messagingSenderId: "315056199634",
  appId: "1:315056199634:web:f3cf6e572f9632db17da0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);