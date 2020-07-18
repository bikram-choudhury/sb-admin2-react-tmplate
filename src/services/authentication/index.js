import { auth } from "./../../firebase";

const authenticateUser = ({ username: email, password }) => {
    auth.signInWithEmailAndPassword(email, password)
        .catch(error => {
            console.log(error);
            alert(error.message);
        })
};

const createUserAndLogin = ({ username: email, password }) => {
    auth.createUserWithEmailAndPassword(email, password)
        .catch(error => {
            console.log(error);
            alert(error.message);
        })
};

const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
}

export { authenticateUser, createUserAndLogin, resetPassword };