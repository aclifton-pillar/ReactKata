import {reduxFirestore} from "redux-firestore";
import {compose, createStore} from "redux";
import * as firebase from "react-native-firebase";
import rootReducer from "./reducer";

export default function configureStore() {
    const firebaseConfig = {};
    firebase.initializeApp(firebaseConfig);

    firebase.firestore();

    // Provide timestamp settings to silence warning about deprecation
    firebase.firestore().settings({timestampsInSnapshots: true})

    const createStoreWithFirebase = compose(
        reduxFirestore(firebase),
    )(createStore);

    const rootReducer = combineReducers({
        firestore: rootReducer
    });

    const initialState = {};
    return createStoreWithFirebase(rootReducer, initialState);
}
