const hobbyPage = () => {
  const banner = document.querySelector(".banner");
  banner.classList.add("no-display");
  const resume = document.querySelector(".resume");
  resume.classList.add("no-display");
  const skill = document.querySelector(".skill");
  skill.classList.add("no-display");
  const hobby = document.querySelector(".hobby");
  hobby.classList.add("margin-top2");
  hobby.classList.remove("no-display");
  const language = document.querySelector(".language");
  language.classList.add("no-display");
  const menu = document.querySelector(".menu");
  menu.classList.remove("no-display");
}

const hobbyClick = () => {
  const hobbyButton = document.querySelectorAll(".hobby-button");
  hobbyButton.forEach ((element) => {
    element.addEventListener("click", (event) => {
      hobbyPage();
    })
  })
}

export { hobbyClick };

