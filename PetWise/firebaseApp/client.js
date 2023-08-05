import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { FIREBASE_AUTH } from './config.js'

export const singUpWithEmail = async (email, password, activePet) => {
  console.log(activePet);
  try{
    const response = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
  }catch(err){
    throw new Error(err)
  }
}

export const loginWithEmail = async (email, password) => {
  try{
    await signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
  }catch(err){
    throw new Error(err)
  }
}