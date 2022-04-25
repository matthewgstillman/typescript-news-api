import React, { useState, useEffect, FC, ChangeEvent } from "react";
import "../App.css";
import "../Styles/index.css";
import { useForm, SubmitHandler } from "react-hook-form";
import ArticleComponent from "./ArticleComponent";
import { Form, Button } from "react-bootstrap";

const APIComponent: FC = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [topic, setTopic] = useState<string | "">("America");
  const [articles, setArticles] = useState<IndividualArticle[]>([]);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const formatText = (unformattedText: string) => {
    const formattedString = unformattedText.replace(/ /g, "%20");
    return formattedString;
  };

  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setTopic(formatText(data.topic));
    setFormSubmitted(true);
    getData(data.topic);
  };

  const getData = async (topic: string) => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${topic}&from=2022-04-13&sortBy=publishedAt&language=en&sortby=popularity&apiKey=${apiKey}`
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
    getData(topic);
  }, []);

  return (
    <div>
      <div className="App">
        <div className="mainHeader">
          <h1 data-testid="mainHeader">News API</h1>
          <Form data-testid="mainForm" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="topic">
              <Form.Label data-testid="formLabel">
                Choose a News Topic
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter news topic"
                {...register("topic")}
              />
            </Form.Group>
            <Button data-testid="submitButton" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div className="mainContainer">
          <br />
          {formSubmitted ? (
            <a href="/category">Click here to select news by news category</a>
          ) : (
            <></>
          )}
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
    </div>
  );
};

export default APIComponent;
