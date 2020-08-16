import firebase from "./Firebase";
import {ListItem} from '../components/Types'

const db = firebase.firestore();
export const createTask = (item: ListItem) => {
    return db.collection('tasks').add({...item})
};

export const updateTask = (item: ListItem) => {
    const complete = item.complete;
    return db.collection('tasks').doc(item.key).set({...item, complete});
};

export const removeTask = (key: string) => {
    return db.collection('tasks').doc(key).delete();
};

export const getTasks = (onSnapshot: (ss: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>)=> void) => {
   return db.collection("tasks").onSnapshot((snapShot)=>{
    if(onSnapshot)
        onSnapshot(snapShot);
   })
};