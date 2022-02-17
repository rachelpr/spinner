//A function to create a spinner in the console
const spinner = function () {
  //defining the spinner characters, adding a new line so we don't see the % cursor
  let spinnerChar = "|/–\\|/–\\" + "\n"
  //console.log(spinnerChar)
  //looping through the spinner characters
  for (let i = 0; i < spinnerChar.length; i++) {
    setTimeout(() => {
      //printing them out on the same line, after a delay of 10 seconds
      process.stdout.write("\r" + spinnerChar[i])
    }, 300 * i);
  }
}

//calling the spinner function
spinner()