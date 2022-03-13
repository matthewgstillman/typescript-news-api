interface Topic {
  topic: string;
}

interface Category {
  category: string;
}

interface IndividualArticle {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  title: string;
  url: string;
  urlToImage: string;
}

type FormValues = {
  topic: string;
};
