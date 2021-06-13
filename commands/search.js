

const searchCmd = keyword => {
  console.log('The keyword you are searching is: ', keyword)
  const searchURL = `https://www.googleapis.com/books/v1/volumes?q=${keyword}`
}

export default searchCmd