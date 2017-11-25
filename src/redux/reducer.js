import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux'
import newsReducer, {moduleName as newsModule} from '../ducks/news'

export default combineReducers({
    router,
    [newsModule]: newsReducer
})