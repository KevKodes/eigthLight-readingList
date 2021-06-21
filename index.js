import searchCmd from "./commands/search.js";
import saveCmd from "./commands/save.js";
import helpCmd from "./commands/help.js";
import viewCmd from "./commands/view.js";

import readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "OHAI> ",
});

rl.prompt();

rl.on("line", (line) => {
  switch (line.trim()) {
    case "hello":
      console.log("world!");
      break;
    default:
      console.log(`Say what? I might have heard '${line.trim()}'`);
      break;
  }
  rl.prompt();
}).on("close", () => {
  console.log("Have a great day!");
  process.exit(0);
});

const libraryDirectory = () => {
  const myArgs = process.argv.slice(2);

  let command = myArgs[0] || "help";

  switch (command) {
    case "search":
      const keyword = myArgs[1];
      searchCmd(keyword);
      break;
    case "save":
      const id = myArgs[1];
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
