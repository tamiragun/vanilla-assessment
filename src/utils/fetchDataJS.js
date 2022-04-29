/**
 * Helper function to fetch the data from the API endpoint and convert it to JavaScript, or return an error if the call was unsuccessful.
 * @returns a promise that resolves to an array of JavaScript objects or an error message.
 */
export const fetchData = async () => {
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
