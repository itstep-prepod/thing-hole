import { initializeApp } from "firebase/app";
import { 
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged
} from 'firebase/auth';
import { 
    getFirestore,
    collection,
    addDoc,
    getDocs,
    setDoc,
    arrayUnion,
    arrayRemove,
    doc,
    getDoc,
    updateDoc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDmagxSst0fIf8pOHIgvN2U8E-keyFWHg",
  authDomain: "things-506f9.firebaseapp.com",
  projectId: "things-506f9",
  storageBucket: "things-506f9.appspot.com",
  messagingSenderId: "712772224006",
  appId: "1:712772224006:web:bca395dd8b1abaab5eaf87"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export const getUserDoc = async ({uid, email}) => {
    /* получаем ссылку на конкретного юзера*/
    const userDoc = doc(db, `users/${uid}`);
    const userData = await getDoc(userDoc);

    console.log('user doc', userDoc);
    if (userData.exists()) {
        return userDoc;
    } else {
        // добавлять нового юзера с указанным айди
        const userDoc = await setDoc(doc(db, 'users', uid), {
            things: [],
            email
        });
        return userDoc;
    }
};

export const addThingToUserDB = async (userDoc, thing) => {
    const data = await updateDoc(userDoc, 'things', arrayUnion(thing));

    console.log(data);
};

export const removeThingsFromUserDB = async () => {};

export const getUserThings = async (uid) => {
    // const usersCollectionRef = collection(db, 'users');
    const userDoc = doc(db, 'users', uid);
    const userData = await getDoc(userDoc);

    return userData.data();

    // const usersDocs = await getDocs(usersCollectionRef);
    // usersDocs.forEach((data) => {
    //     console.log(data.id); // user.uid
    //     console.log(data);
    //     // console.log(data.data());
    // })
};






const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account'
})

export const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
    .then((result) => {
        console.log(result);
        // result.user.uid
    })
    .catch((err) => {
        console.log(err);
    })
};

export const logOut = () => signOut(auth).then((res) => console.log('signout', res));


onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log('user is here', user);
    } else {
        console.log('user is logged out');
    }
})

export const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
        console.log('user has been created', res);
        return res;
    })
    .catch((err) => {
        console.log('user creation failed', err);
        return err;
    })
};

export const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
        console.log('user has been logged in', res);
        return res;
    })
    .catch((err) => {
        console.log('user login failed', err);
        return err;
    })
};

