import assert from "assert";
import searchCmd from "../commands/search.js";
import saveCmd from "../commands/save.js";
import fs, { read } from "fs";

// Search command should get 5 items relating to the query and console.log their
//  title, author, and publisher
describe("Search Command", function () {
  it("Should return a list of 5 books", async function () {
    let resultLength = 5;
    const query = await searchCmd("dogs");
    console.log(query.length);
    assert.strictEqual(query.length, resultLength);
  });
});

// Save command should append the book to the text file
describe("Save Command", function () {
  it("Should save the book to the reading-list", async function () {
    const savedBook = `Title: Pet That Dog!\nAuthor(s): Gideon Kidd,Rachel Braunigan\nPublisher: Quirk Books\nID: HznMDwAAQBAJ`;
    await saveCmd("HznMDwAAQBAJ");
    let save = "";
    await fs.readFile("reading_list.txt", "utf8", (err, list) => {
      if (!err) save = list;
    });
    assert.strictEqual(savedBook, save);
  });
});

// View command should print each of the books from the reading list
//    empty reading list does not cause error in code

// Help command should log the available commands

// Improper command should log the help command
