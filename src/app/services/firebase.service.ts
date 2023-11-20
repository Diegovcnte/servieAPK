import { Injectable, inject } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail} from 'firebase/auth';
import { User } from '../models/user.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore, setDoc, doc, getDoc, addDoc, collection, collectionData, query ,  updateDoc, deleteDoc} from '@angular/fire/firestore';
import { UtilsService } from './utils.service';
import {AngularFireStorage} from '@angular/fire/compat/storage';
import  {getStorage, uploadString, ref, getDownloadURL, deleteObject }  from "firebase/storage";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);
  utilsSvc = inject(UtilsService);
  storage = inject(AngularFireStorage);


  //auth

  getAuth(){
    return getAuth;
  }


  //login

  signIn(user: User){
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  //crear user
  signUp(user: User){
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  //cerrar sesion
  signOut(){
    getAuth().signOut();
    localStorage.removeItem('user');
    this.utilsSvc.routerLink('auth');
  }

  //update user
  updateUser(displayName:string) {
    return updateProfile(getAuth().currentUser, {displayName});
  }

  //rerstablecer contra

  sendRecoveryEmail(email:string){
    return sendPasswordResetEmail(getAuth(), email);
  }

  //BD

  setDocument(path: string,data:any){
    return setDoc(doc(getFirestore(),path),data);
  }

  async getDocument(path: string){
    return (await getDoc(doc(getFirestore(), path))).data();

  }

  //addDocument

  addDocument(path: string,data:any) {
    return addDoc(collection(getFirestore(),path),data);
  }

  //obtener docs de una collection
  getCollectionData(path: string, collectionQuery?: any){
    const ref = collection(getFirestore(),path);
    return collectionData(query(ref,collectionQuery), {idField:'id'});
  }

  updateDocument(path: string,data:any){
    return updateDoc(doc(getFirestore(),path),data);
  }

  deleteDocument(path: string){
    return deleteDoc(doc(getFirestore(),path));
  }


  deleteFile(path:string){
    return deleteObject(ref(getStorage(),path));
  }


  

}
