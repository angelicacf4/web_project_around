const nameInput = document.querySelector("#name");
const jobInput = document.querySelector("#job");
const popupForm = document.querySelector("#miFormulario");

const openBtn = document.querySelector(".profile__button-edit");
openBtn.addEventListener("click", () => {
  abrirPopup();
});
function abrirPopup(evt) {
  let popup = document.querySelector(".popup");
  popup.classList.add("visible");
}

const closeBtn = document.querySelector(".popup__button-close");
closeBtn.addEventListener("click", () => {
  cerrarpopup();
});

function cerrarpopup(evt) {
  let popup = document.querySelector(".popup");

  popup.classList.remove("visible");
}

function popupcontainer(evt) {
  evt.preventDefault();
}

function handlerprofileform(evt) {
  evt.preventDefault();

  const profileTitle = document.querySelector(".profile__title");
  console.log(profileTitle.textContent);
  profileTitle.textContent = nameInput.value;

  const profileSubtitle = document.querySelector(".profile__subtitle");
  console.log(profileSubtitle.textContent);
  profileSubtitle.textContent = jobInput.value;
}

popupForm.addEventListener("submit", handlerprofileform);

const likeEmpty = document.querySelector(".card__icon");
const likeFull = document.querySelector(".card__icon-black");

likeEmpty.addEventListener("click", handlerlike);
function handlerlike(evt) {
  evt.target.classList.add("card__icon-hidden");
  evt.target.classList.remove("card__icon-visible");
  console.log(evt.target.nextSibling.nextElementSibling);
  evt.target.nextSibling.nextElementSibling.classList.add("card__icon-visible");
  evt.target.nextSibling.nextElementSibling.classList.remove(
    "card__icon-hidden"
  );
}
