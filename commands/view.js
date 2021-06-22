import fs, { read } from "fs";

const viewCmd = async () => {
  try {
    const file = fs.readFileSync("reading_list.txt").toString();
    if (!file) {
      console.log(
        "Your reading list is empty. Save books with `my-library save [book ID]`."
      );
    } else {
      console.log("Your saved books are: ", file);
    }
  } catch (error) {
    console.error(`An error occurred. ${error}`);
  }
};

export default viewCmd;
