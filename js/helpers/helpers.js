export const createElement = (link) => {
  return `<div class='generated-item'>
        <p>${link.old_link}</<p>
        <div class='new-link'>
            <p>${link.new_link}</p>
            <button class='copy-btn'>Copy</button>
        </div>
    </div>`;
};

export const addElements = (element) => {
  document
    .querySelector(".generator-wrapper")
    .insertAdjacentHTML("beforeend", element);
};

export const copyText = (element) => {
  const copyElement = element.previousElementSibling;

  navigator.clipboard.writeText(copyElement.textContent);
  element.classList.add("copied");
  element.textContent = "Copied!";
};
