import searchCmd from "./commands/search.js";
import saveCmd from "./commands/save.js";
import helpCmd from "./commands/help.js";
import viewCmd from "./commands/view.js";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "reading_list> ",
});

rl.prompt();

rl.on("line", async (line) => {
  const userInput = line.trim().split(" ");
  let command = userInput[0] || "help";

  switch (command) {
    case "search":
      const keyword = userInput[1];
      await searchCmd(keyword);
      break;
    case "save":
      const id = userInput[1];
      await saveCmd(id);
      break;
    case "view":
      await viewCmd();
      break;
    case "help":
      await helpCmd();
      break;
    case "exit":
      console.log("Have a great day!");
      process.exit(0);
    default:
      console.error(`Command not found. Enter "help" for more information`);
      break;
  }
  rl.prompt();
}).on("close", () => {
  console.log("Have a great day!");
  process.exit(0);
});
