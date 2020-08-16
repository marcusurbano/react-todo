import firebase from 'firebase';
import { firebaseConfig } from '../constants/firebase';

const config = {
    apiKey: firebaseConfig.apiKey,
    authDomain: firebaseConfig.authDomain,
    databaseURL:firebaseConfig.databaseURL,
    projectId: firebaseConfig.projectId,
  };

firebase.initializeApp(config);

export default firebase;