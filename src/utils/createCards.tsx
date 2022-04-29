import { CardInfo } from "../components/BlogCard";

/**
 * Helper function to turn the received Wordpress data into an array of objects of type CardInfo
 * @param listOfJsonCards
 * @returns an array of objects of the type CardInfo
 */
export const createCards = (listOfJsonCards: Array<any>): CardInfo[] => {
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
      // Covert the string to a formatted date
      date: new Date(card.date).toLocaleString("en-UK", {
        day: "numeric",
        year: "numeric",
        month: "long",
      }),
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
