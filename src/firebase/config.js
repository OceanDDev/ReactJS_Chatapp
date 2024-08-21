import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC4Xu-3l-WDguQHBx0ZZCGoxg3GkcNGnFQ",
  authDomain: "app-chatt-6f256.firebaseapp.com",
  projectId: "app-chatt-6f256",
  storageBucket: "app-chatt-6f256.appspot.com",
  messagingSenderId: "715598883831",
  appId: "1:715598883831:web:fd01da3ea610ba3b4cdcf2",
  measurementId: "G-5R0DPQEKM2"
};
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Khởi tạo các dịch vụ Firebase mà bạn sử dụng
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const db = getFirestore(app);
  
  export { app, analytics, auth, db };