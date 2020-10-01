import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Article from './components/Article/Article';
import AddArticle from './components/AddArticle/AddArticle';
import { addArticle } from './actions';

const Articles = () => {
  const dispatch = useDispatch();

  const saveArticle = articles => {
    // 逻辑代码稍后更新
    dispatch(addArticle(articles));
  };

  let articles = useSelector(state => state.article.articles);
  return (
    <div>
      <AddArticle saveArticle={saveArticle} />
      {articles.map(article => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Articles;
