
import {createStore} from 'redux';
import rootReducer from "./reducers";
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window);

export default store;

