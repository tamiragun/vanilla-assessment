import { useState, useEffect } from "react";
import { CardInfo, BlogCard } from "./components/BlogCard";
import { fetchData } from "./utils/fetchData";
import { createCards } from "./utils/createCards";
import "./css/App.css";

const App = (): JSX.Element => {
  const [blogData, setBlogData] = useState<CardInfo[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const url =
    "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json";

  /* Upon first render, the component should fetch the data from the provided API and store 
  it in state so that it can be rendered*/
  useEffect(() => {
    (async () => {
      const data = await fetchData(url);
      // Check whether the call has returned an error or data
      if (data === "Error") {
        setIsError(true);
      } else {
        const cards: CardInfo[] = createCards(data);
        setBlogData(cards);
      }
    })();
  }, [blogData]);

  /* The blog data comes as a list of blog cards, so this creates a JSX element in the 
  form of an unordered list of blog card components*/
  const blogCards: JSX.Element[] = blogData.map((card: CardInfo) => {
    return (
      <li key={card.id} className="col-4 blog-card-container">
        {/*Using spread syntax to prevent Typescript error, courtesy of 
        https://stackoverflow.com/questions/59969756/not-assignable-to-type-intrinsicattributes-intrinsicclassattributes-react-js*/}
        <BlogCard {...card}></BlogCard>
      </li>
    );
  });

  /* Render the component in grid form, along with error handling and placeholders */
  return (
    <div className="App">
      <div className="p-strip">
        {isError ? (
          <div>There was an error fetching the blog data.</div>
        ) : blogData ? (
          <ul className="row">{blogCards}</ul>
        ) : (
          <div>Fetching the blog data...</div>
        )}
      </div>
    </div>
  );
};

export default App;
