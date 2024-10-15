import createSagaMiddleware from '@redux-saga/core';
import {configureStore} from '@reduxjs/toolkit'
import { rootsaga } from '../saga/rootsaga';
import weatherslice from '../slice/weatherslice'
import userslice from '../slice/userslice'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['weather'], // Only persist the weather slice
};


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer : {
        weather : weatherslice,
        user:userslice
      },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootsaga);


export default store; 