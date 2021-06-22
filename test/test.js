import assert from "assert";
import { expect } from "chai";
import sinon from "sinon";
import searchCmd from "../commands/search.js";
import saveCmd from "../commands/save.js";
import viewCmd from "../commands/view.js";
import helpCmd from "../commands/help.js";
import fs from "fs";

// Search command should get 5 items relating to the query
describe("Search Command", function () {
  it("Should return a list of 5 books", async function () {
    let resultLength = 5;
    const query = await searchCmd("dogs");
    assert.strictEqual(query.length, resultLength);
  });
});

// Save command should append the book to the text file
describe("Save Command", function () {
  before(() => saveCmd("HznMDwAAQBAJ"));
  it("Should save the book to the reading-list", async function () {
    const save = await fs.readFileSync("reading_list.txt").toString();
    expect(save).to.contain("HznMDwAAQBAJ");
  });
});

/* 
The following tests are still under development. They should incorporate the 
use of mock functions to fake user input in readline and spy on the command
functions to ensure the correct ones are called.

Each command should launch it's own function
*/
describe("General functionality", function () {
  it("Should call the help function when the user enters 'search'", function () {
    const spied = sinon.spy(searchCmd);
    spied();
    expect(spied.called).to.be.true;
  });
  it("Should call the help function when the user enters 'save'", function () {
    const spied = sinon.spy(saveCmd);
    spied();
    expect(spied.called).to.be.true;
  });
  it("Should call the help function when the user enters 'view'", function () {
    const spied = sinon.spy(viewCmd);
    spied();
    expect(spied.called).to.be.true;
  });
  it("Should call the help function when the user enters help", function () {
    const spied = sinon.spy(helpCmd);
    spied();
    expect(spied.called).to.be.true;
  });
});
