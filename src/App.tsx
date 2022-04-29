import { useState, useEffect } from "react";
import { CardInfo, BlogCard } from "./components/BlogCard";
import "./css/App.css";

function App() {
  const [blogData, setBlogData] = useState<CardInfo[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  /* Upon first render, the component should fetch the data from the provided API and store 
  it in state so that it can be rendered*/
  useEffect(() => {
    (async () => {
      const data = await fetchData();
      // Check whether the call has returned an error or data
      if (data === "Error") {
        setIsError(true);
      } else {
        const cards = createCards(data);
        setBlogData(cards);
      }
    })();
  }, [blogData]);

  /* The blog data comes as a list of blog cards, so this creates a JSX element in the 
  form of an unordered list of blog card components*/
  const blogCards = blogData.map((card) => {
    return (
      <li key={card.id} className="col-4">
        {/*Using spread syntax to prevent Typescript error, courtesy of 
        https://stackoverflow.com/questions/59969756/not-assignable-to-type-intrinsicattributes-intrinsicclassattributes-react-js*/}
        <BlogCard {...card}></BlogCard>
      </li>
    );
  });

  /* Render the component, along with error handling and placeholders */
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
}

/**
 * Helper function to fetch the data from the API endpoint and convert it to JavaScript, or return an error if the call was unsuccessful.
 * @returns a promise that resolves to an array of JavaScript objects or an error message.
 */
const fetchData = async (): Promise<any> => {
  const url =
    "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json";

  try {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.log(error);
    return "Error";
  }
};

/**
 * Helper function to turn the received Wordpress data into an array of objects of type CardInfo
 * @param listOfJsonCards
 * @returns an array of objects of the type CardInfo
 */
const createCards = (listOfJsonCards: Array<any>): CardInfo[] => {
  return listOfJsonCards.map((card: any) => {
    return {
      // Converting to string so it fits in the CardInfo type for now
      id: card.id.toString(),
      // Ensuring there is a value in place before trying to access its nested properties
      topic: card._embedded["wp:term"][2][0]
        ? card._embedded["wp:term"][2][0].name.toUpperCase()
        : undefined,
      featuredMedia: card.featured_media,
      title: card.title.rendered,
      articleUrl: card.link,
      author:
        card._embedded && card._embedded.author[0]
          ? card._embedded.author[0].name
          : undefined,
      authorUrl:
        card._embedded && card._embedded.author[0]
          ? card._embedded.author[0].link
          : undefined,
      date: card.date,
      category:
        card._embedded &&
        card._embedded["wp:term"] &&
        card._embedded["wp:term"][0] &&
        card._embedded["wp:term"][0][0]
          ? card._embedded["wp:term"][0][0].name
          : undefined,
    };
  });
};

export default App;
