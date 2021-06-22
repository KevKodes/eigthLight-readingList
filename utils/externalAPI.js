import axios from "axios";

const getBooks = async (type, detail) => {
  if (type === "save") {
    const bookURL = `https://www.googleapis.com/books/v1/volumes/${detail}`;
    return await axios.get(bookURL);
  } else if (type === "search") {
    const searchURL = `https://www.googleapis.com/books/v1/volumes?q=${detail}&maxResults=5`;
    return await axios.get(searchURL);
  } else {
    return console.error("bad API request");
  }
};

export default getBooks;
