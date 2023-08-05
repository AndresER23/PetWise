import { FIREBASE_AUTH } from '../firebaseApp/config';
import {onAuthStateChanged} from 'firebase/auth'
import { useState, useEffect } from "react";

const useUser = () => {
  const [userState, setUserState] = useState(0)
  
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, setUserState)
    console.log(userState);
  }, []);

  return userState
}
 
export default useUser;