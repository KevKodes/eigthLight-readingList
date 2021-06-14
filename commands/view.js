import fs, { read } from "fs";

const viewReadingListCB = (err, readingList) => {
  if (err) {
    console.error("An error occurred while trying to view the reading list.");
  } else if (!readingList) {
    console.log(
      "Your reading list is empty. Save books with `my-library save [book ID]`."
    );
  } else {
    console.log(readingList);
  }
};

const viewCmd = async () => {
  return await fs.readFile("reading_list.txt", "utf8", viewReadingListCB);
};

export default viewCmd;
