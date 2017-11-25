import {appName, apiKey} from '../config';
import {Record, OrderedMap} from 'immutable';
import {put, call, takeEvery} from 'redux-saga/effects';
import {fetchRequest} from './utils';
import {createSelector} from 'reselect';

/**
 * Constants
 * */
export const moduleName = 'news';
const prefix = `${appName}/${moduleName}`;

export const FETCH_ALL_REQUEST = `${prefix}/FETCH_ALL_REQUEST`;
export const FETCH_ALL_START = `${prefix}/FETCH_ALL_START`;
export const FETCH_ALL_SUCCESS = `${prefix}/FETCH_ALL_SUCCESS`;

/**
 * Reducer
 * */
const ReducerState = Record({
    loading: false,
    loaded: false,
    entities: new OrderedMap({}),
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
        case FETCH_ALL_START:
            return state.set('loading', true);

        case FETCH_ALL_SUCCESS:
            return state
                .set('loading', false)
                .set('loaded', true)
                // .set('entities', fbToEntities(payload, NewsRecord));
                .set('entities', new NewsRecord({...payload}));

        default:
            return state
    }
}
/**
 * Selectors
 * */
export const stateSelector = state => state[moduleName];
export const entitiesSelector = createSelector(stateSelector, state => state.entities);
export const loadingSelector = createSelector(stateSelector, state => state.loading);
export const loadedSelector = createSelector(stateSelector, state => state.loaded);
export const newsListSelector = createSelector(entitiesSelector, entities => entities.valueSeq().toArray());

/**
 * Action Creators
 * */

export function fetchAllNews() {
    return {
        type: FETCH_ALL_REQUEST
    }
}

/**
 *Sagas
 * */

export function* fetchAllSaga() {

    yield put({
        type: FETCH_ALL_START
    });

    let url = 'https://newsapi.org/v2/top-headlines?' +
        'sources=bbc-news&' +
        `apiKey=${apiKey}`;
    let req = new Request(url);

    let {articles} = yield call(fetchRequest, req);

    yield put({
        type: FETCH_ALL_SUCCESS,
        payload: articles
    })
}

export function * saga() {
    console.log('---', 'saga up and running');
    yield takeEvery(FETCH_ALL_REQUEST, fetchAllSaga);
}