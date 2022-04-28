import React, { useState, useEffect } from "react";
import { CardInfo, BlogCard } from "./components/BlogCard";
import "./css/App.css";

const listOfMockCards: CardInfo[] = [
  {
    id: "1",
    topic: "CLOUD AND SERVER",
    featuredMedia: "featuredMediaUrl1",
    title: "The power of installed-base snap metrics",
    articleUrl: "ArticleUrl1",
    author: "cprov",
    authorUrl: "authorUrl1",
    date: "27 November 2018",
    category: "Article",
  },
  {
    id: "2",
    topic: "CLOUD AND SERVER",
    featuredMedia: "featuredMediaUrl2",
    title: "ubuntu at KubeCon & CloudNativeCon",
    articleUrl: "ArticleUrl2",
    author: "Canonical",
    authorUrl: "authorUrl2",
    date: "26 November 2018",
    category: "Article",
  },
  {
    id: "3",
    topic: "CLOUD AND SERVER",
    featuredMedia: "featuredMediaUrl3",
    title: "Ubuntu, security & compliance",
    articleUrl: "ArticleUrl3",
    author: "James Nunns",
    authorUrl: "authorUrl3",
    date: "21 November 2018",
    category: "Article",
  },
];

function App() {
  const [blogData, setBlogData] = useState<CardInfo[]>([]);

  useEffect(() => {
    setBlogData(listOfMockCards);
  }, blogData);

  const blogCards = blogData.map((card) => {
    return (
      <li key={card.id}>
        {/*Using spread syntax to prevent Typescript error, courtesy of 
        https://stackoverflow.com/questions/59969756/not-assignable-to-type-intrinsicattributes-intrinsicclassattributes-react-js*/}
        <BlogCard {...card}></BlogCard>
      </li>
    );
  });

  return (
    <div className="App">
      <header className="App-header">{blogData && <ul>{blogCards}</ul>}</header>
    </div>
  );
}

export default App;
