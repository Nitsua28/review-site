import { takeEvery, put, all, select } from "@redux-saga/core/effects";
import { getAllItems, Item } from "../api/api-requests";


export function* getAllItemsByRequest(){
    console.log("askjnflak");
    const items:Item[] = yield getAllItems();
    
    yield put({type:"GET_ALL_ITEMS", payload: items});
}

export function* watchRequestGetAllItems(){
    yield takeEvery("REQUEST_GET_ALL_ITEMS", getAllItemsByRequest);
}

export function* rootSaga(){
    yield all([watchRequestGetAllItems()]);
}