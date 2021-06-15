# Reading List

## Command Line App - Kevin Pitzer

# Instructions

How to run:

- clone this repo
- go into the reading_list directory: `cd reading_list`
- `npm install -g .`
- run tests: `npm test`

Commands:

- `my-library help`: display command list
- `my-library search [keyword]`: search Google Books API for 5 books relating to
  the queried keyword
- `my-library save [book ID]`: save a book to your reading list by ID. IDs can
  be found in the details returned from a search
- `my-library view`: view all books saved to reading list

# Application Objectives

- Type in a query and display a list of 5 books matching that query.
- Each item in the list should include the book's author, title, and publishing company.
- A user should be able to select a book from the five displayed to save to a “Reading List”
- View a “Reading List” with all the books the user has selected from their queries -- this is a local reading list and not tied to Google Books’s account features.

# Dependencies

## Axios

This library is used since the ES6 built-in Fetch API is not implemented in node.js.
The Axios package is used to both make the get request and parse the response
from JSON.

## Mocha

Testing framework.

## Mocha-suppress-logs

Used to suppress the console logs when running unit tests.

# Obstacles

## Software Versions

When I first started out, I was running an old version of node.js. I found that
I could not use ES6 module syntax with the version I was running and went down
a rabbit hole of trying to implement libraries that would convert my syntax or
using the older 'require()' syntax. I found the simplest solution to be ensuring
that I am running the most up-to-date version of node.
