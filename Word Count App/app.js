// getting all necessary elements
const textareaEl = document.querySelector("#textarea");
const statEl = document.querySelector("#stat");

const wordsCountEl = document.querySelector(".words-count");
const charactersCountEl = document.querySelector(".characters-count");

let text = "";
let wordCount = 0;

// console.log(textareaEl);

textareaEl.addEventListener("keyup", (e) => {
  text = e.target.value.trim();
  // console.log(text);
  // console.log(text.length);

  wordCount = countWords(text);

  // statEl.textContent = `You've written ${wordCount} words and ${text.length} characters.`;

  wordsCountEl.textContent = `${wordCount} words`;
  charactersCountEl.textContent = `${text.length} characters`;
});

// counting words function
const countWords = (text) => {
  if (text.length === 0) return 0;
  else return text.split(" ").length;
};
