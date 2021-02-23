// In step1.js, write a function, cat.

// It should take one argument, path, and it should read the file with that path, and print the contents of that file.

// Then, write some code that calls that function, allowing you to specify the path argument via the command line.

const fs= require('fs');

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



const argv = process.argv;

if(argv.length >=3){
    cat(argv[2])
}


// module.exports = {
//     fs: fs,
//     cat: cat
// }