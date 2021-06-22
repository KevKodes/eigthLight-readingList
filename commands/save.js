import fs from "fs";
import getBooks from "../utils/externalAPI.js";

const saveBookCB = (err) => {
  if (err) {
    console.error("An error occurred while saving book to reading list.");
  }
};

const saveCmd = async (bookId) => {
  console.log(`Saving book ${bookId} to reading list`);

  try {
    const book = await getBooks("save", bookId);
    const bookData = `Title: ${book.data.volumeInfo.title}\nAuthor(s): ${book.data.volumeInfo.authors}\nPublisher: ${book.data.volumeInfo.publisher}\nID: ${book.data.id}`;
    await fs.appendFile("reading_list.txt", bookData, saveBookCB);
    console.log(`Success. Saved to reading list: ${bookData}`);
  } catch (error) {
    console.error(`An error occurred. ${error}`);
  }
};

export default saveCmd;
