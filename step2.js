// Step 2
// Copy over your step1.js code to step2.js

const fs= require('fs');
const axios=require('axios');
const process = require('process');

function cat(path) {

    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
          // handle possible error
          console.error("There's an error", err);
          // kill the process and tell the shell it errored
          process.exit(1);
        }
        // otherwise success
        console.log(`file contents: ${data}`);
      });

}





// Add a new function, webCat. This should take a URL and, using axios, should read the content of that URL and print it to the console.



function webCat(URL) {
    axios.get(URL).then( resp => console.log(resp.data)    
    ).catch( err => console.log("I'm sorry there was an error:", err))

}

//better way with async function

// async function webCat(url) {
//     try {
//       let resp = await axios.get(url);
//       console.log(resp.data);
//     } catch (err) {
//       console.error(`Error fetching ${url}: ${err}`);
//       process.exit(1);
//     }
//   }
  



// Modify the code that invoked cat so that, based on the command-line args, it decides whether the argument is a file path or a URL 
//and calls either cat or webCat, respectively.

const argv = process.argv;

if(argv.length >=3){
    if(argv[2].startsWith("http")){
        webCat(argv[2])
    } else {
        cat(argv[2])
    }
    
}

