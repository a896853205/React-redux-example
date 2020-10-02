import { all } from 'redux-saga/effects';

import articlesSaga from '../page/Articles/saga';

export default function* () {
  yield all([articlesSaga()]);
}
