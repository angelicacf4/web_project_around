const nameInput = document.querySelector("#name");
const jobInput = document.querySelector("#job");
const popupForm = document.querySelector("#miFormulario");

//Formulario 1
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

//Clonar tarjetas
const templateCard = document.querySelector(".template");
const elementsCard = document.querySelector(".elements__card");
const cardLikeButton = document.querySelector(".card__like-button");
const cardTrash = document.querySelector(".card__trash");
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

initialCards.forEach(function (item) {
  createCard(item.name, item.link);
});

function createCard(name, link) {
  const clonedCard = templateCard.content
    .querySelector(".card")
    .cloneNode(true);
  const cardText = clonedCard.querySelector(".card__text");
  const cardImage = clonedCard.querySelector(".card__image");
  const cardLikeButton = clonedCard.querySelector(".card__like-button");
  cardText.textContent = name;
  cardImage.src = link;
  cardLikeButton.addEventListener("click", function () {
    cardLikeButton.classList.toggle("card__like-black");
  });

  const cardTrash = clonedCard.querySelector(".card__trash");
  cardTrash.addEventListener("click", function () {
    clonedCard.remove();
  });

  elementsCard.append(clonedCard);
}

//Formulario2
const popupContainerAdd = document.querySelector("#formAdd");
const addBtn = document.querySelector(".profile__button");

addBtn.addEventListener("click", () => {
  abrirOverlayAdd();
});
function abrirOverlayAdd(evt) {
  let overlayadd = document.querySelector("#overlayadd");

  overlayadd.classList.add("visible");
}
const deleteBtn = document.querySelector("#deleteBtn");
deleteBtn.addEventListener("click", () => {
  cerrarOverlayadd();
});

//boton X
function cerrarOverlayadd(evt) {
  let overlayAdd = document.querySelector("#overlayadd");

  overlayAdd.classList.remove("visible");
}

//crear nuevas tarjetas
const titleInput = document.querySelector("#title");
const urlInput = document.querySelector("#url");
const formAdd = document.querySelector("#formAdd");

function handlerCreateCard(evt) {
  evt.preventDefault();
  const cardDescription = document.querySelectorAll(".card__description");
  console.log(cardDescription.textContent);
  cardDescription.textContent = titleInput.value;

  const cardImage = document.querySelector(".card__image");
  console.log(cardImage.textContent);
  cardImage.textContent = urlInput.value;

  createCard(titleInput.value, urlInput.value);
}

formAdd.addEventListener("submit", handlerCreateCard);

//ventana emergente
const popupWindow = document.querySelectorAll(".popup");
const popupContainerWindow = document.getElementById("#popupcontainerwindow");
const popupImage = document.querySelector(".popup__image");
const popupText = document.querySelector(".popup__text");
openImage.addEventListener("click", () => {
  abrircard();
});
function abrirPopupWindow(evt) {
  let popupWindow = document.querySelector("#popupcontainerwindow");
  popupWindow.classList.add("visible");
}
