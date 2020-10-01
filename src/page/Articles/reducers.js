import * as actionTypes from './actions';

const initialState = {
  articles: [
    { id: 1, title: 'post 1', body: 'Quisque cursus, metus vitae pharetra' },
    { id: 2, title: 'post 2', body: 'Quisque cursus, metus vitae pharetra' },
  ],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_ARTICLE:
      const newArticle = {
        id: Math.random(),
        title: payload.articles.title,
        body: payload.articles.body,
      };
      return {
        ...state,
        articles: state.articles.concat(newArticle),
      };
    default:
      return { ...state };
  }
};

export default reducer;
