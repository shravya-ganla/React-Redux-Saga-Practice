import loadingReducer from './loadingReducer'
import errorReducer from './errorReducers'
import imagesReducer from './imagesReducer'

import {combineReducers} from 'redux';
import pageReducer from './pageReducer';


const rootReducer = combineReducers({
    isLoading  : loadingReducer,
    images : imagesReducer,
    error : errorReducer,
    nextPage : pageReducer
});

export default rootReducer;