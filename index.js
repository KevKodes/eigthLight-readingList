import searchCmd from "./commands/search.js";

const libraryDirectory = () => {
  const myArgs = process.argv.slice(2);
  console.log("myArgs: ", myArgs);

  let command = myArgs[0] || "help";

  switch (command) {
    case "search":
      console.log("search the keyword: ", myArgs[1]);
    default:
      console.error(
        'Command not found. Enter "my-library --help" for more information'
      );
  }
};

export default libraryDirectory;
