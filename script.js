// variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: ` "yinmu" `,
    person: "Frank",
  },
  {
    quote: `"you too do"`,
    person: `Sabi girl`,
  },
  {
    quote: `"leave me arone"`,
    person: `Rhodes`,
  },
  {
    quote: `"Na who give up, Fuck up"`,
    person: `White Fish`,
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
