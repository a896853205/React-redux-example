import {combineReducers} from 'redux';

import articleReducer from '../page/Articles/reducers';

let reducer = combineReducers({
	article: articleReducer
})

export default reducer;