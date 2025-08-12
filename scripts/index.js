import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import {
  settings,
  closeOnEscape,
  cerrarPopupWindow,
  closePopup,
  closeOverlayAdd,
  closePopupWindow,
  closeWindow,
} from "./utils.js";

const formAdd = document.querySelector("#formAdd");
const formProfile = new FormValidator(miFormulario, settings);
formProfile.enableValidation();
const addCard = new FormValidator(formAdd, settings);
addCard.enableValidation();

const popupForm = document.querySelector("#miFormulario");
const elementsCard = document.querySelector(".elements__card");

const nameInput = document.querySelector("#name");
const jobInput = document.querySelector("#job");

//Formulario 1
const openBtn = document.querySelector(".profile__button-edit");
// Abir boton lapiz
openBtn.addEventListener("click", () => {
  abrirPopup();
});
function abrirPopup(evt) {
  let popup = document.querySelector(".popup");
  popup.classList.add("visible");
  document.addEventListener("keydown", closeOnEscape);
}
// Boton x
const closeBtn = document.querySelector(".popup__button-close");
closeBtn.addEventListener("click", () => {
  cerrarpopup();
});

function cerrarpopup(evt) {
  const popup = document.querySelector(".popup");

  popup.classList.remove("visible");
  document.removeEventListener("keydown", closeOnEscape);
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

  cerrarpopup();
}

popupForm.addEventListener("submit", handlerprofileform);

//Formulario2
//const popupContainerAdd = document.querySelector("#formAdd");
const addBtn = document.querySelector(".profile__button");
// Boton +
addBtn.addEventListener("click", () => {
  abrirOverlayAdd();
});
function abrirOverlayAdd(evt) {
  let overlayadd = document.querySelector("#overlayadd");

  overlayadd.classList.add("visible");
  document.addEventListener("keydown", closeOnEscape);
}
// Boton x
const deleteBtn = document.querySelector("#deleteBtn");
deleteBtn.addEventListener("click", () => {
  cerrarOverlayadd();
});

function cerrarOverlayadd(evt) {
  let overlayAdd = document.querySelector("#overlayadd");

  overlayAdd.classList.remove("visible");
  document.removeEventListener("keydown", closeOnEscape);
}

//Clonar template
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

initialCards.forEach((item) => {
  const card = new Card(item.name, item.link);
  const cardElement = card.generateCard();
  elementsCard.prepend(cardElement);
});

//Crear nuevas tarjetas
const titleInput = document.querySelector("#title");
const urlInput = document.querySelector("#url");

function handlerCreateCard(evt) {
  evt.preventDefault();
  const cardDescription = document.querySelectorAll(".card__description");
  console.log(cardDescription.textContent);
  cardDescription.textContent = titleInput.value;

  const cardImage = document.querySelector(".card__image");
  console.log(cardImage.textContent);
  cardImage.textContent = urlInput.value;
  const card = new Card(titleInput.value, urlInput.value);
  elementsCard.prepend(card.generateCard());
  cerrarOverlayadd();
}

formAdd.addEventListener("submit", handlerCreateCard);

closePopup.addEventListener("click", (evt) => {
  if (evt.target === closePopup) {
    cerrarpopup();
  }
});
closeOverlayAdd.addEventListener("click", (evt) => {
  if (evt.target === closeOverlayAdd) {
    cerrarOverlayadd();
  }
});
closePopupWindow.addEventListener("click", (evt) => {
  if (evt.target === closePopupWindow) {
    cerrarPopupWindow();
  }
});

closeWindow.addEventListener("click", () => {
  cerrarPopupWindow();
});
