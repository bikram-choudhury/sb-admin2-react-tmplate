import { auth, google, facebook, github } from "./../../firebase";

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
};

// Social logins
const loginWithGoogle = () => auth.signInWithPopup(google);
const loginWithFacebook = () => auth.signInWithPopup(facebook);
const loginWithGithub = () => auth.signInWithPopup(github);

export {
    authenticateUser,
    createUserAndLogin,
    resetPassword,
    loginWithGoogle,
    loginWithFacebook,
    loginWithGithub
};