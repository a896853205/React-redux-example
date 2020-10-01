import { handleActions } from 'redux-actions';

import { actionTypes } from './actions';

const initialState = {
  articles: [
    { id: 1, title: 'post 1', body: 'Quisque cursus, metus vitae pharetra' },
    { id: 2, title: 'post 2', body: 'Quisque cursus, metus vitae pharetra' },
  ],
};

export default handleActions(
  {
    [actionTypes.ADD_ARTICLE]: (state, { payload: { articles } }) => {
      const newArticle = {
        id: Math.random(),
        title: articles.title,
        body: articles.body,
      };
      return {
        ...state,
        articles: state.articles.concat(newArticle),
      };
    },
  },
  initialState
);