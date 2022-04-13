import React, { useState, useEffect, FC, ChangeEvent, FormEvent } from "react";
import "../App.css";
import { Form, Button } from "react-bootstrap";
import ArticleComponent from "./ArticleComponent";

const CategoryAPIComponent: FC = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [articles, setArticles] = useState<IndividualArticle[]>([]);
  const [category, setCategory] = useState<string | "">("");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setCategory(value);
    setFormSubmitted(true);
    getData(value);
  };

  const getData = async (category: string) => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`
    );
    const data = await response.json();
    setArticles(data["articles"]);
  };

  const formatDate = (utcTime: string) => {
    const year: string = utcTime.substring(0, 4);
    const month: string = utcTime.substring(5, 7);
    const date: string = utcTime.substring(8, 10);
    const formattedDate: string = `${month}-${date}-${year}`;
    return formattedDate;
  };

  useEffect(() => {
    getData(category);
  }, []);

  return (
    <div className="App">
      <h1 className="mainHeader">News API</h1>
      {formSubmitted ? (
        <a href="/">Click here to select news by specific news topic</a>
      ) : (
        <></>
      )}
      <br></br>
      <br />
      <div>
        <Form.Select
          className="selectForm"
          onChange={selectChange}
          aria-label="Default select example"
        >
          <option selected disabled>
            Choose one
          </option>
          <option value="entertainment">Entertainment</option>
          <option value="general">General</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
        </Form.Select>
        <br />
        <div>
          {articles &&
            articles.map((article: IndividualArticle) => {
              return (
                <ArticleComponent
                  urlToImage={article.urlToImage}
                  title={article.title}
                  description={article.description}
                  publishedAt={formatDate(article.publishedAt)}
                  content={article.content}
                  author={article.author}
                  url={article.url}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

const styles: { [name: string]: React.CSSProperties } = {
  container: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  select: {
    padding: 5,
    width: 200,
  },
  result: {
    marginTop: 30,
  },
};

export default CategoryAPIComponent;
