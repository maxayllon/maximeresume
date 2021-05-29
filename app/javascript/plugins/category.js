const languageFirst = document.querySelector(".first-languages");
const languageSecond = document.querySelector(".second-languages");

const itFirst = document.querySelector(".first-it");
const itSecond = document.querySelector(".second-it");

const programmingFirst = document.querySelector(".first-programming");
const programmingSecond = document.querySelector(".second-programming");


const secondPage = (category) => {
  category.classList.remove("no-display");
};

const firstClose = (category) => {
  category.classList.add("no-display")
};

const categoryHover = () => {
  languageFirst.addEventListener("mouseover", (event) => {
    firstClose(languageFirst);
    secondPage(languageSecond)
  });

  languageSecond.addEventListener("click", (event) => {
    firstClose(languageSecond);
    secondPage(languageFirst)
  });

  itFirst.addEventListener("mouseover", (event) => {
    firstClose(itFirst);
    secondPage(itSecond)
  });

  itSecond.addEventListener("click", (event) => {
    firstClose(itSecond);
    secondPage(itFirst);
  });

  programmingFirst.addEventListener("mouseover", (event) => {
    firstClose(programmingFirst);
    secondPage(programmingSecond);
  });

  programmingSecond.addEventListener("click", (event) => {
    firstClose(programmingSecond);
    secondPage(programmingFirst)
  });
}

export { categoryHover };
