import getBooks from "../utils/externalAPI.js";

const searchCmd = async (keyword) => {
  console.log("Searching library for keyword: ", keyword);

  try {
    const returnList = await getBooks("search", keyword);
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
