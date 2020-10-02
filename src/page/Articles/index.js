import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Article from './components/Article/Article';
import AddArticle from './components/AddArticle/AddArticle';
import { asyncAddArticle } from './actions';

const Articles = () => {
  const dispatch = useDispatch();

  // const saveArticle = articles => {
  //   dispatch(addArticle(articles));
  // };

  const saveAsyncArticle = articles => {
    dispatch(asyncAddArticle(articles));
  }

  let articles = useSelector(state => state.article.articles);
  
  return (
    <div>
      <AddArticle saveArticle={saveAsyncArticle} />

      {articles.map(article => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Articles;
