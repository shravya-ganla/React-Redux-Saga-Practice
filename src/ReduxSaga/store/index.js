import {createStore, applyMiddleware,compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers';
import rootSaga from '../saga';
import imagesSaga from '../saga/imagesSaga';

const configureStore = () =>{
   
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    ); 
    sagaMiddleware.run(imagesSaga); 

    store.dispatch({type: 'Hello'});
    store.dispatch({type: 'LOGOUT'});
    store.dispatch({type: 'LOGIN'});
    store.dispatch({type: 'LOGIN'});
    store.dispatch({type: 'LOGIN'});
    store.dispatch({type: 'LOGOUT'});
    // store.dispatch({type:'DANG'})
    return store;
}

export default configureStore;