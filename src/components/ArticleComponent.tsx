import React, { useState, useEffect, FC } from "react";

const ArticleComponent: FC<IndividualArticle> = ({
  urlToImage,
  title,
  description,
  publishedAt,
  content,
  url,
  author,
}) => {
  return (
    <div>
      <div datatest-id="articleCard" className="card">
        <img
          datatest-id="imageFromUrl"
          className="image"
          src={urlToImage}
          alt="imageFromUrl"
        />
        <h1>{title}</h1>
        <h2>
          <i>{description}</i>
        </h2>
        <h6>
          {author} - {publishedAt}
        </h6>
        <p>{content}</p>
        <a href={url}>Read Full Article</a>
      </div>
    </div>
  );
};

export default ArticleComponent;
