import * as firebase from 'firebase';

const config = {
  /*
    Insert Firebase Config Here
  */
};

firebase.initializeApp(config);

export const firebaseAuth = firebase.auth;
export const firebaseDB = firebase.database();
export const firebaseStorage = firebase.storage();

export const getFirebaseImageLink = path => {
  return firebaseStorage
    .ref('' + path)
    .getDownloadURL();
};
