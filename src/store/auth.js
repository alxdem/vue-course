import firebase from "firebase";

const tmp = () => console.log('tmp 2');

export default {
  actions: {
    async login({dispatch, commit}, {email, password}) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (e) {
        tmp();
        console.log('Error', dispatch + commit + e);
        throw e;
      }
    }
  }
}
