import assert, { doesNotMatch } from "assert";
import { expect } from "chai";
import searchCmd from "../commands/search.js";
import saveCmd from "../commands/save.js";
import fs, { read } from "fs";

// Search command should get 5 items relating to the query
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
  before(() => saveCmd("HznMDwAAQBAJ"));
  it("Should save the book to the reading-list", function () {
    const save = fs.readFileSync("reading_list.txt").toString();
    expect(save).to.contain("HznMDwAAQBAJ");
  });
});
