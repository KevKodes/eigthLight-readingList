import assert, { doesNotMatch } from "assert";
import { expect } from "chai";
import sinon from "sinon";
// import sinon from "./node_modules/sinon/pkg/sinon-esm.js";
import searchCmd from "../commands/search.js";
import saveCmd from "../commands/save.js";
import fs, { read } from "fs";
import readline from "readline";
import helpCmd from "../commands/help.js";

// Search command should get 5 items relating to the query
describe("Search Command", function () {
  it("Should return a list of 5 books", async function () {
    let resultLength = 5;
    const query = await searchCmd("dogs");
    assert.strictEqual(query.length, resultLength);
  });
});

// Save command should append the book to the text file
// describe("Save Command", function () {
//   before(() => saveCmd("HznMDwAAQBAJ"));
//   it("Should save the book to the reading-list", function () {
//     const save = fs.readFileSync("reading_list.txt").toString();
//     expect(save).to.contain("HznMDwAAQBAJ");
//   });
// });

// Each command should launch it's own function
describe("General functionality", function () {
  it("Should call the help function when the user enters help", function () {
    const spied = sinon.spy(helpCmd);
    spied(); // change this to the user calling from readline
    expect(spied.called).to.be.true;
  });
});
