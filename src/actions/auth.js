import { firebase, googleAuthProvider } from '../firebase/firebase';
import { auth,provider } from '../firebase/firebase';

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const startLogin = () => {
  return () => {
    return auth.signInWithPopup(provider);
  };
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return auth.signOut();
  };
};
