import {takeEvery,take,put, call} from 'redux-saga/effects'
//takeEvery listens to events

import {IMAGES} from '../constants'

function* workerSaga(){
    // console.log("Hi Iam worker Saga");
    // console.log(put({type:'ACTION_FROM_WORKER'}));
    // yield put({type:'ACTION_FROM_WORKER'})
}

// function* byeSaga(){
    // console.log('Bye Saga');
// }

function* handleImagesLoad(){
    console.log('Fetching images from unsplash');
}

// function* handleDang(){
//     console.log('DANG!!');
// }

//watcher Saga 
function* rootSaga(){

    yield takeEvery(IMAGES.LOAD, handleImagesLoad)
    // yield take("DANG")
    // yield call(handleDang)
    // yield take(IMAGES.LOAD)
    // yield call(handleImagesLoad)
    
    // console.log("hi");
    // yield takeEvery('LOGIN', workerSaga)
    // yield take('LOGIN')
    // yield call(workerSaga)
    // yield take('ADD_TO_CART');
    // yield take('BUY')
    // yield take("LOGOUT")
    // yield call(byeSaga)
}

export default rootSaga;