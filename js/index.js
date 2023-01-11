import { GENERATED_LINKS } from "./data/data.js";
import { addElements, copyText, createElement } from "./helpers/helpers.js";

const $menuBtn = document.querySelector(".nav-toggle");
const $urlFrom = document.querySelector("form");

//function will toggle menu on mobile
$menuBtn.onclick = function () {
  document.querySelector(".header-wrapper").classList.toggle("active");
};

///function will submit form
$urlFrom.addEventListener("submit", (e) => {
  e.preventDefault();
  //get value of url input
  const {
    url: { value: url },
  } = e.target;

  //remove error styles before function will start
  document.querySelector(".form-wrapper").classList.remove("error");

  if (!url.trim()) {
    //check if value is empty gives an error
    document.querySelector(".form-wrapper").classList.add("error");
  } else {
    //if value is not empty push it on local storage

    const newLink = {
      old_link: url.trim(),
      new_link: "https://ril.ink/skd5kf",
    };

    GENERATED_LINKS.push(newLink);
    localStorage.setItem("links", JSON.stringify(GENERATED_LINKS));

    //append element to document
    addElements(createElement(newLink));

    //reset form
    e.target.reset();
  }
});

function appendFromLocal() {
  const html = GENERATED_LINKS.map((item) => {
    return createElement(item);
  });

  addElements(html.join(" "));
}

document.onclick = function (e) {
  const { target } = e;

  //check if target element is copy button
  if (target.className === "copy-btn") {
    //call function to copy text
    copyText(target);
  }
};

appendFromLocal();
