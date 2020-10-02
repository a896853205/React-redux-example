import { createActions } from 'redux-actions';

export const actionTypes = {
  ADD_ARTICLE: 'ADD_ARTICLE',
  ASYNC_ADD_ARTICLE: 'ASYNC_ADD_ARTICLE',
};

export const { addArticle, asyncAddArticle } = createActions({
  [actionTypes.ADD_ARTICLE]: articles => ({ articles }),
  [actionTypes.ASYNC_ADD_ARTICLE]: articles => ({ articles }),
});
