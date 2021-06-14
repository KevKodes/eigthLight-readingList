import searchCmd from "./commands/search.js";
import saveCmd from "./commands/save.js";
import helpCmd from "./commands/help.js";
import viewCmd from "./commands/view.js";

const libraryDirectory = () => {
  const myArgs = process.argv.slice(2);

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
    case "view":
      viewCmd();
      break;
    case "help":
      helpCmd();
      break;
    default:
      console.error(
        'Command not found. Enter "my-library help" for more information'
      );
  }
};

export default libraryDirectory;
