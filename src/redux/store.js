import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {persistStore} from 'redux-persist';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
// export const persistor = persistStore(store);
