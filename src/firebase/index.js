import firebase from 'firebase';
import { config } from './config';

firebase.initializeApp(config);
const auth = firebase.auth();

export { auth };