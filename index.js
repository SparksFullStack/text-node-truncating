let currentPage = 1;
let baseHeight = 250;
let maxHeight = baseHeight;
const testSpan = '<span id="test-span">test</span>'

function splitParagraph() {
  // getting and splitting the text
  const paragraphText = $('#test-content'); // target the paragraph
  const splitText = this.splitInput(paragraphText[0].innerHTML.split(' ')); // split the paragraph
  splitText.firstHalf.push(testSpan); // drop a span in the middle
  
  // joining text and updating the DOM
  const rejoinedText = splitText.firstHalf.concat(splitText.secondHalf).join(' '); // rejoin the text
  paragraphText[0].innerHTML = rejoinedText; // update the dom
  
  // checking the span's offset
  const selectedTestSpan = $('#test-span'); // select the test span
  const testSpanOffset = selectedTestSpan.offset(); // get the offset
  
  // conditionally handling the offset
  if (testSpanOffset.top >= maxHeight) {
    // remove the old id
    // add the breaker class
    // iterate the page
    // re-calculate the max height
    // NOTE: Should we check here to see if the middle of this is still too big?
  } else {
    
  }
  // if it's not
  // remove the old span
  // cut the input size by 1/4
  // // repeat the inserting logic
};

function splitInput(inputArr) {
  let start = 0;
  let stop = inputArr.length - 1;
  let middle = Math.floor((start + stop) / 2);

  const firstHalf = inputArr.slice(start, middle);
  const secondHalf = inputArr.slice(middle, stop);
  
  return { firstHalf, secondHalf };
};