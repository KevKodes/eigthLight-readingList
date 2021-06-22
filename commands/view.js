import fs, { read } from "fs";

// const viewReadingListCB = (err, readingList) => {
//   if (err) {
//     console.error("An error occurred while trying to view the reading list.");
//   } else if (!readingList) {
//     console.log(
//       "Your reading list is empty. Save books with `my-library save [book ID]`."
//     );
//   } else {
//     console.log(readingList);
//   }
// };

const viewCmd = async () => {
  try {
    const file = fs.readFileSync("reading_list.txt").toString();
    console.log(file);
  } catch (error) {
    console.error(`An error occurred. ${error}`);
  }
};

export default viewCmd;
