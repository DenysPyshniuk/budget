import { take, call, put } from "redux-saga/effects";
import entriesTypes from '../actions/entries.actions';
import axios from 'axios';
import types from '../actions/entries.actions';

export function* getAllEntries() {
  yield take(entriesTypes.GET_ENTRIES);
  console.log('where is entries');
  const result = yield call(axios, 'http://localhost:3001/entries/');
  console.log('result', result);
  yield put({type: types.POPULATE_ENTRIES, payload: result.data})
}