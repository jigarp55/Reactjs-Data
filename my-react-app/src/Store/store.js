import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import itemReducer from '../slice/itemSlice';
import weatherReducer from '../slice/weatherSlice';
import userReducer from '../slice/userSlice';
import user1Reducer from '../slice/userSlicee';
import userSaga from '../Saga/userSaga';
import comments from '../slice/comments';

const sagaMiddleware = createSagaMiddleware();


const store = configureStore({
    reducer: {
        items: itemReducer,
        weather: weatherReducer,
        user: userReducer,
        user1: user1Reducer,
        comments:comments,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(userSaga);

export default store;