import React from "react";
import { CardInfo, BlogCard } from "./components/BlogCard";
import "./css/App.css";

const mockCard: CardInfo = {
  topic: "CLOUD AND SERVER",
  featuredMedia: "featuredMediaUrl",
  title: "The power of installed-base snap metrics",
  articleUrl: "ArticleUrl",
  author: "cprov",
  authorUrl: "authorUrl",
  date: "27 November 2018",
  category: "Article",
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*Using spread syntax to prevent Typescript error, courtesy of 
        https://stackoverflow.com/questions/59969756/not-assignable-to-type-intrinsicattributes-intrinsicclassattributes-react-js*/}
        <BlogCard {...mockCard}></BlogCard>
      </header>
    </div>
  );
}

export default App;
