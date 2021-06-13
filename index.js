import searchCmd from './commands/search';

const libraryDirectory = () => {
  const myArgs = process.argv.slice(2);
  console.log('myArgs: ', myArgs);
}

export default libraryDirectory