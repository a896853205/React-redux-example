export const actionTypes = {
  ADD_ARTICLE: 'ADD_ARTICLE',
};

export const addArticle = articles => {
  return {
    type: actionTypes.ADD_ARTICLE,
    articles,
  };
};
