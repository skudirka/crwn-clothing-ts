import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
/// <reference path="firebase/index.d.ts" />
import {IUser} from '../redux/user/user.types';
import {IShopCollection, IShopCollectionMap} from '../redux/shop/shop.types';

export interface IFirestoreData extends firebase.firestore.DocumentData {
    uid?:string;
}

const config = {
    apiKey: "AIzaSyC8LvsGLquNCd4pxQPQDG-u5WiLIjqN7-s",
    authDomain: "crwn-db-8f52a.firebaseapp.com",
    databaseURL: "https://crwn-db-8f52a.firebaseio.com",
    projectId: "crwn-db-8f52a",
    storageBucket: "",
    messagingSenderId: "945156179165",
    appId: "1:945156179165:web:24b6d8589c9de598"
};

type DocumentReference<IFirestoreData> = firebase.firestore.DocumentReference<IFirestoreData> | undefined;
export const createUserProfileDocument = async (userAuth:IUser, additionalData?:object):Promise<DocumentReference<IFirestoreData>> => {
    if( !userAuth ) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    
    if( !snapShot.exists ){
        // add to DB
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error){
            console.log('Error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (collectionKey:string, objectsToAdd:object[]) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections:firebase.firestore.QuerySnapshot) => {
    const transformedCollection:IShopCollection[] = collections.docs.map(doc => {
        const {title, items} = doc.data();

        return {
            routeName: encodeURI( title.toLowerCase() ),
            id: doc.id,
            title,
            items
        } as IShopCollection;
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {} as IShopCollectionMap);
};

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    });
};

export const getUserCartRef = async (userId:string) => {
    const cartRef = firestore.collection('carts').where('userId', '==', userId);

    const snapShot = await cartRef.get();
    
    if (snapShot.empty) {
        const cartDocRef = firestore.collection('carts').doc();
        await cartDocRef.set({ userId, cartItems: [] });
        return cartDocRef;
      } else {
        return snapShot.docs[0].ref;
      }
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;