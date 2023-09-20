import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCeMI9eJeAKN2-Hq3Q5KGqQAFC6GcC7-zs",
    authDomain: "ben-j-blog-cdn.firebaseapp.com",
    projectId: "ben-j-blog-cdn",
    storageBucket: "ben-j-blog-cdn.appspot.com",
    messagingSenderId: "742661104578",
    appId: "1:742661104578:web:0a7f5d11aaa803f611ac5b",
    measurementId: "G-SX001S28FE"

  };
  
  const app = initializeApp(firebaseConfig);


export default {
    app: app
}
