const rugbyIcon = document.getElementById("rugby-icon");
const rugbyDescription = document.querySelector(".rugby");

const tennisIcon = document.getElementById("tennis-icon");
const tennisDescription = document.querySelector(".tennis");

const runIcon = document.getElementById("run-icon");
const runDescription = document.querySelector(".run");

const webIcon = document.getElementById("web-icon");
const webDescription = document.querySelector(".web-developer");




const iconPage = (description) => {
  description.classList.remove("no-display");
};

const iconClose = (description) => {
  description.classList.add("no-display")
};

const iconClick = () => {
  rugbyIcon.addEventListener("click", (event) => {
    iconPage(rugbyDescription);
    iconClose(tennisDescription);
    iconClose(runDescription);
    iconClose(webDescription);
  })
  tennisIcon.addEventListener("click", (event) => {
    iconPage(tennisDescription);
    iconClose(rugbyDescription);
    iconClose(runDescription);
    iconClose(webDescription);
  })
  runIcon.addEventListener("click", (event) => {
    iconPage(runDescription);
    iconClose(rugbyDescription);
    iconClose(tennisDescription);
    iconClose(webDescription);

  })
  webIcon.addEventListener("click", (event) => {
    iconPage(webDescription);
    iconClose(rugbyDescription);
    iconClose(tennisDescription);
    iconClose(runDescription);
  })
}

export { iconClick };
