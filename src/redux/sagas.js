import { all } from 'redux-saga/effects';

import articlesSaga from '../page/Articles/sagas';

export default function* () {
  yield all([articlesSaga()]);
}
