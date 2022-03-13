import React, { useState, useEffect, FC, ChangeEvent } from "react";
import "../App.css";
import { useForm, SubmitHandler } from "react-hook-form";
import ArticleComponent from "./ArticleComponent";

const APIComponent: FC = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [topic, setTopic] = useState<string | "">("James%Harden");
  const [articles, setArticles] = useState<IndividualArticle[]>([]);

  const formatText = (unformattedText: string) => {
    const formattedString = unformattedText.replace(/ /g, "%20");
    return formattedString;
  };

  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(formatText(data.topic));
    setTopic(formatText(data.topic));
    console.log(`Topic is now: ${formatText(data.topic)}`);
    getData(data.topic);
    // return requestUrl;
  };

  const getData = async (topic: string) => {
    console.log(`Getting data again now that the topic is ${topic}`);
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${topic}&from=2022-03-10&sortBy=publishedAt&language=en&sortby=popularity&apiKey=${apiKey}`
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
        <h1>News API</h1>
        <br />
        <h1>Choose a news topic</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("topic")} />
          <input type="submit" />
        </form>
        {topic}
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

export default APIComponent;
