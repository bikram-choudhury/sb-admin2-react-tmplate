import firebase from 'firebase';
import { config } from './config';

firebase.initializeApp(config);
const auth = firebase.auth();
const google = new firebase.auth.GoogleAuthProvider();
const facebook = new firebase.auth.FacebookAuthProvider();
const github = new firebase.auth.GithubAuthProvider();

export { auth, google, facebook, github };