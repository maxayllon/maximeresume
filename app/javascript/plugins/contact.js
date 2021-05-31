const skillPage = () => {
  const banner = document.querySelector(".banner");
  banner.classList.add("no-display");
  const resume = document.querySelector(".resume");
  resume.classList.add("no-display");
  const hobby = document.querySelector(".hobby");
  hobby.classList.add("no-display");
  const skill = document.querySelector(".skill");
  skill.classList.add("margin-top");
  skill.classList.remove("no-display");
  const language = document.querySelector(".language");
  language.classList.add("no-display");
  const menu = document.querySelector(".menu");
  menu.classList.remove("no-display");
}

const skillClick = () => {
  const skillButton = document.querySelectorAll(".skill-button");
  skillButton.forEach ((element) => {
    element.addEventListener("click", (event) => {
      skillPage();
    })
  })
}

export { skillClick };
