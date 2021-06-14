import axios from "axios";
import fs from "fs";

const saveBookCB = (err) => {
  if (err) {
    console.error("An error occurred while saving book to reading list.");
  }
};

const saveCmd = async (bookId) => {
  try {
    const bookURL = `https://www.googleapis.com/books/v1/volumes/${bookId}`;
    const book = await axios.get(bookURL);
    // console.log("found the book: ", book);
    const bookData = `Title: ${book.data.volumeInfo.title}\nAuthor(s): ${book.data.volumeInfo.authors}\nPublisher: ${book.data.volumeInfo.publisher}\nID: ${book.data.id}`;
    console.log(`Saving to reading list: ${bookData}`);
    await fs.appendFile("reading_list.txt", bookData, saveBookCB);
  } catch (error) {
    console.error(`An error occurred. ${error}`);
  }
};

export default saveCmd;
