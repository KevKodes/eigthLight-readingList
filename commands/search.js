import axios from "axios";

const searchCmd = async (keyword) => {
  try {
    // check the keyword and throw an error if it is no bueno
    const searchURL = `https://www.googleapis.com/books/v1/volumes?q=${keyword}&maxResults=5`;
    const returnList = await axios.get(searchURL);
    returnList.data.items.forEach((book) => {
      console.log(`
      Author(s): ${book.volumeInfo.authors}
      Title: ${book.volumeInfo.title}
      Publisher: ${book.volumeInfo.publisher}
      `);
    });
    return returnList;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default searchCmd;
