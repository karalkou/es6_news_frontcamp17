import {appName} from '../config'
import {Record, List} from 'immutable'
import {put, call, takeEvery} from 'redux-saga/effects'

/**
 * Constants
 * */
export const moduleName = 'news';
const prefix = `${appName}/${moduleName}`;

/**
 * Reducer
 * */
const ReducerState = Record({
    entities: new List([])
});

const NewsRecord = Record({
    id: null,
    author: null,
    description: null,
    publishedAt: null,
    sourceId: null,
    sourceName: null,
    title: null,
    url: null,
    urlToImage: null
});

export default function reducer(state = new ReducerState(), action) {
    const {type, payload} = action;

    switch (type) {

        default:
            return state
    }
}
/**
 * Selectors
 * */

/**
 * Action Creators
 * */

/**
 *Sagas
 * */
export function * saga() {
    console.log('---', 'saga up and running');
}