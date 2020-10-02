import { call, put, takeLatest } from 'redux-saga/effects';

import { addArticle, asyncAddArticle } from './actions';

// 异步函数
const asyncFn = time => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

const effects = {
  asyncAddArticle: function* ({ payload }) {
    try {
      yield call(asyncFn, 2000);
      yield put(addArticle(payload.articles));
    } catch (error) {
      console.log(error);
    }
  },
};

export default function* () {
  yield takeLatest(asyncAddArticle, effects.asyncAddArticle);
}
