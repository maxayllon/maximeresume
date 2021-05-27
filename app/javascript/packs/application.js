// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';

document.addEventListener('turbolinks:load', () => {

  const resumePage = () => {
    const banner = document.querySelector(".banner");
    banner.classList.add("no-display");
    const resume = document.querySelector(".resume");
    resume.classList.add("margin-top");
    resume.classList.remove("no-display");
    const language = document.querySelector(".language");
    console.log(language);
    language.classList.add("no-display")
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

  resumeClick();

});
