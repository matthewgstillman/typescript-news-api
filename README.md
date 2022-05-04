# Getting Started with Create React App'
# OMDB API Project

Welcome to my Open News API Project using Typescript and React. This document will go over some of the components used in this React project that allow you to search for news articles by news topic or category.

## News API API Key
**It's important that you obtain an API Key from the [News API](https://newsapi.org/register) after signing up for a free account. In order to use the News API key and this in a production environment, you will need to upgrade to a Business Account [here](https://newsapi.org/pricing)**

Once an API Key has been obtained, create a **.env.local** file in the root folder and create an environment variable called **REACT_APP_API_KEY**.

## Components Used

There are three components that are used in the **OMDB API Project**
- API Component
- Article Component
- Category API Component

### API Component
The **APIComponent** handles the API requests using **fetch**. This component is also where the form component is located as well.

### Article Component
The **ArticleComponent** is a component used to display the news articles that match your news topic search terms.

### Category API Component
The **CategoryAPIComponent** is a component used to display the news articles that match your news category search terms.

## Packages Used##
Here is a list of packages used in this project.
- **[React Bootstrap](https://react-bootstrap.github.io/)**
   To install **React Bootstrap**, enter **npm install react-bootstrap bootstrap**

- **[React Hook Form](https://react-hook-form.com/)**
   To install **React Hook Form**, enter **npm install react-hook-form**

- **[React Router DOM](https://v5.reactrouter.com/web/guides/quick-start)**
   To install **React Router DOM**, enter **npm install react-router-dom**