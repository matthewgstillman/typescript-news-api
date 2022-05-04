# Getting Started with Create React App'
# OMDB API Project

This document will go over some of the components used in this React project that allow you to search for information about your favorite movies and television shows.

## OMDB API Key
**It's important that you obtain an API Key from the [Open Movie Database API](https://www.omdbapi.com/) after signing up for a free account**

Once an API Key has been obtained, create a **.env.local** file in the root folder and create an environment variable called **REACT_APP_API_KEY**.

## Components Used

There are three components that are used in the **OMDB API Project**
- API Component
- Article Component
- Image Carousel Component

### API Component
The **APIComponent** handles the API requests using **fetch**. This component is also where the form component is located as well.

**When submitting a movie or television show title, please make sure to format the title it as closely as possible to the exact title to ensure results.**

### Article Component
The **ArticleComponent** is a component used to display the movie and television show information after typing in your title.

### Image Carousel Component
The **ImageCarouselComponent** is a React Bootstrap component to show different movie poster images before the user submits a title parameter. Once a movie or television show title has been submitted, the **ImageCarouselComponent** will dissapear.

## Packages Used##
Here is a list of packages used in this project.
- **[React Bootstrap](https://react-bootstrap.github.io/)**
   To install **React Bootstrap**, enter **npm install react-bootstrap bootstrap**

- **[React Hook Form](https://react-hook-form.com/)**
   To install **React Hook Form**, enter **npm install react-hook-form**