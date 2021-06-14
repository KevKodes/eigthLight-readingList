import searchCmd from "./commands/search.js";
import saveCmd from "./commands/save.js";

const libraryDirectory = () => {
  const myArgs = process.argv.slice(2);
  // console.log("myArgs: ", myArgs);

  let command = myArgs[0] || "help";

  switch (command) {
    case "search":
      const keyword = myArgs[1];
      console.log("Searching library for keyword: ", keyword);
      searchCmd(keyword);
      break;
    case "save":
      const id = myArgs[1];
      console.log(`Saving book ${id} to reading list`);
      saveCmd(id);
      break;
    case "help":
      console.log("set up the help function");
      break;
    default:
      console.error(
        'Command not found. Enter "my-library help" for more information'
      );
  }
};

export default libraryDirectory;
