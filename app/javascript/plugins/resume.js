const resumePage = () => {
  const banner = document.querySelector(".banner");
  banner.classList.add("no-display");
  const hobby = document.querySelector(".hobby");
  hobby.classList.add("no-display");
  const resume = document.querySelector(".resume");
  resume.classList.add("margin-top");
  resume.classList.remove("no-display");
  const language = document.querySelector(".language");
  language.classList.add("no-display");
  const menu = document.querySelector(".menu");
  menu.classList.remove("no-display");
}


const resumeClick = () => {
  const resumeButton = document.querySelectorAll(".resume-button");
  console.log(resumeButton);
  resumeButton.forEach ((element) => {
    element.addEventListener("click", (event) => {
      resumePage();
    })
  })
}

export { resumeClick };

