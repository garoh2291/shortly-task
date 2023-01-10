const $menuBtn = document.querySelector(".nav-toggle");
const $urlFrom = document.querySelector("form");
const $copyBtn = document.querySelector(".copy-btn");

const generatedLinks = JSON.parse(localStorage.getItem("links")) || [];

const links = [
  {
    old_link: "www.facebook.com",
    new_link: "https://ril.ink/skd3kf",
  },

  {
    old_link: "www.instagram.com",
    new_link: "https://ril.ink/skd4kf",
  },
];

$menuBtn.onclick = function () {
  document.querySelector(".header-wrapper").classList.toggle("active");
};

$urlFrom.addEventListener("submit", (e) => {
  e.preventDefault();
  const {
    url: { value: url },
  } = e.target;

  localStorage.setItem("links", JSON.stringify(links));
  //   fetch(`https://api.shrtco.de/v2/shorten?url=${url}/very/long/link.html`)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
});

function create() {
  const html = generatedLinks.map((item) => {
    return `<div class='generated-item'>
        <p>${item.old_link}</<p>
        <div class='new-link'>
            <p>${item.new_link}</p>
            <button class='copy-btn'>Copy</button>
        </div>
    </div>`;
  });

  document
    .querySelector(".generator-wrapper")
    .insertAdjacentHTML("beforeend", html.join(""));
}

window.onload = create;

if ($copyBtn) {
  $copyBtn.addEventListener("click", (e) => {
    console.log(e.target);
  });
}
