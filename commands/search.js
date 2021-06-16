import axios from "axios";

const searchCmd = async (keyword) => {
  console.log("Searching library for keyword: ", keyword);

  try {
    const searchURL = `https://www.googleapis.com/books/v1/volumes?q=${keyword}&maxResults=5`;
    const returnList = await axios.get(searchURL);
    const books = returnList.data.items;
    books.forEach((book) => {
      console.log(`
      Title: ${book.volumeInfo.title}
      Author(s): ${book.volumeInfo.authors}
      Publisher: ${book.volumeInfo.publisher}
      ID: ${book.id}
      `);
    });
    return books;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default searchCmd;
