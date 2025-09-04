import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import { settings } from "../utils/utils.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupwithImage from "../components/PopupWithImage.js";
import PopupwithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

//Abrir ventana emergente
const openImage = new PopupwithImage("#popupwindow");
openImage.setEventListeners();

const openPopup = new Popup(".popup");
openPopup.setEventListeners();
//Formulario perfil

const UserProfileconfg = {
  name: ".profile__title",
  job: ".profile__subtitle",
};
const UserProfile = new UserInfo(UserProfileconfg.name, UserProfileconfg.job);

const popupProfile = new PopupwithForm("#overlay", (data) => {
  console.log(data);
  UserProfile.setUserInfo(data.name, data.job);
});
popupProfile.setEventListeners();
//Formulario añadir cartas
const popupAddCards = new PopupwithForm("#overlayadd", (data) => {
  console.log(data);
  const card = new Card(data.title, data.url, (title, link) => {
    openImage.open(title, link);
  });
  const cardElement = card.generateCard();
  cardSeccion.addItem(cardElement);
});

popupAddCards.setEventListeners();

const formAdd = document.querySelector("#formAdd");

//Validacion formularios
const formProfile = new FormValidator(miFormulario, settings);
formProfile.enableValidation();
const addCard = new FormValidator(formAdd, settings);
addCard.enableValidation();

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

//Seccion añadir cards
const cardSeccion = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item.name, item.link, (title, link) => {
        openImage.open(title, link);
      });
      const cardElement = card.generateCard();
      cardSeccion.addItem(cardElement);
    },
  },
  ".elements__card"
);
cardSeccion.rendererItems();

//Formulario 1
const openBtn = document.querySelector(".profile__button-edit");
// Abrir boton lapiz
openBtn.addEventListener("click", () => {
  popupProfile.open();
});

//Formulario2
const addBtn = document.querySelector(".profile__button");
// Boton +
addBtn.addEventListener("click", () => {
  popupAddCards.open();
});
