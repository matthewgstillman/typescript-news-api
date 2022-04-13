import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ArticleComponent from "./ArticleComponent";

const mockMeal = jest.fn();

const sampleArticleData = {
  urlToImage:
    "https://images.theconversation.com/files/457469/original/file-20220411-10836-b4wq0m.jpg?ixlib=rb-1.1.0&rect=3%2C56%2C1019%2C508&q=45&auto=format&w=1356&h=668&fit=crop",
  title: "Biden announces $800M in new military aid for Ukraine",
  description:
    "President Joe Biden announced Wednesday that he has authorized an additional $800 million in weapons, ammunition and other security assistance to Ukraine.",
  publishedAt: "2022-04-13T18:32:28Z",
  content:
    "Following a call with Ukraine's President Volodymyr Zelenskyy, President Joe Biden announced Wednesday his administration is authorizing an additional $800 million for weapons, ammunition, and other … [+990 chars]",
  url:
    "https://abcnews.go.com/Politics/biden-announces-800m-military-aid-ukraine/story?id=84062563",
  author: "Molly Nagle",
};

test("Article Card is in document", () => {
  render(
    <ArticleComponent
      urlToImage={sampleArticleData.urlToImage}
      title={sampleArticleData.title}
      description={sampleArticleData.description}
      publishedAt={sampleArticleData.publishedAt}
      content={sampleArticleData.content}
      url={sampleArticleData.url}
      author={sampleArticleData.author}
    />
  );
  const titleElement = screen.getByText(sampleArticleData.title);
  const descriptionElement = screen.getByText(sampleArticleData.description);
  const contentElement = screen.getByText(sampleArticleData.content);
  expect(titleElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
  expect(contentElement).toBeInTheDocument();
});

test("Image from URL in document", () => {
  render(
    <ArticleComponent
      urlToImage={sampleArticleData.urlToImage}
      title={sampleArticleData.title}
      description={sampleArticleData.description}
      publishedAt={sampleArticleData.publishedAt}
      content={sampleArticleData.content}
      url={sampleArticleData.url}
      author={sampleArticleData.author}
    />
  );
  const imageFromUrlElement = screen.getByAltText("imageFromUrl");
  expect(imageFromUrlElement).toHaveAttribute(
    "src",
    sampleArticleData.urlToImage
  );
});

test("Link with URL in document", () => {
  render(
    <ArticleComponent
      urlToImage={sampleArticleData.urlToImage}
      title={sampleArticleData.title}
      description={sampleArticleData.description}
      publishedAt={sampleArticleData.publishedAt}
      content={sampleArticleData.content}
      url={sampleArticleData.url}
      author={sampleArticleData.author}
    />
  );
  const linkFromUrlElement = screen.getByRole("link");
  expect(linkFromUrlElement).toHaveAttribute("href", sampleArticleData.url);
});
