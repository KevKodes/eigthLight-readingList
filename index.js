// import prompt from 'prompt';
const prompt = require('prompt')


prompt.start();

  //
  // Get the action from the user
  //
  prompt.get(['action'], function (err, result) {
    //
    // Log the results.
    //
    console.log('Command-line input received:');
    console.log('  action: ' + result.action);
    switch(result.action) {
      case 'search':
        prompt.get(['keyword']), function (err, searchKey) {
          console.log('   searching for books related to: ', searchKey.keyword)
        }
    }
  });