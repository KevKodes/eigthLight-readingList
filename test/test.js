import assert from "assert";
import searchCmd from "../commands/search.js";
// import saveCmd from "../commands/save.js";

// Search command should get 5 items relating to the query and console.log their
//  title, author, and publisher
describe("Search Command", async function () {
  // const query = await searchCmd("dogs");

  it("should return a list of 5 books", async function () {
    let resultLength = 5;
    const query = await searchCmd("dogs");
    console.log(query.length);
    assert.strictEqual(query.length, resultLength);
  });

  it("should reverse the input string and output the same capitalization", function () {
    let test = reverseString("Apple");
    let result = "elppA";

    assert.strictEqual(test, result);
  });
});

// Save command should append the book to the text file

// View command should print each of the books from the reading list
//    empty reading list does not cause error in code

// Help command should log the available commands

// Improper command should log the help command
