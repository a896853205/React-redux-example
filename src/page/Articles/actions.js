import { createActions } from 'redux-actions';

export const actionTypes = {
  ADD_ARTICLE: 'ADD_ARTICLE',
};

export const { addArticle } = createActions({
  [actionTypes.ADD_ARTICLE]: articles => ({ articles }),
});
