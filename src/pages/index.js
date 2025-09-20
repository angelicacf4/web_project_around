import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import { settings } from "../utils/utils.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import popupWithImage from "../components/popupWithImage.js";
import popupWithForm from "../components/popupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import { api } from "../components/Api.js";
import PopupWithConfirmation from "../components/PopupwithConfirmation.js";

const formAdd = document.querySelector("#formAdd");
const UserProfileconfg = {
  name: ".profile__title",
  job: ".profile__subtitle",
  avatar: ".profile__image",
};
// Función para actualizar la información del usuario en la página
function upDateUserProfile(userData) {
  // 1. Actualizar nombre
  document.querySelector(".profile__title").textContent = userData.name;

  // 2. Actualizar descripción
  document.querySelector(".profile__subtitle").textContent = userData.about;

  // 3. Actualizar avatar
  const profileImage = document.querySelector(".profile__image");
  profileImage.src = userData.avatar;
}

api.getUserInfo().then(function (userData) {
  upDateUserProfile(userData);
});

api.getInitialCards().then(function (initialCards) {
  //Seccion añadir cards
  const cardSeccion = new Section(
    {
      items: initialCards,
      renderer: (data) => {
        const card = new Card(
          data,
          (title, link) => {
            openImage.open(title, link);
          },
          (cardId, element) => {
            popupDeleteCard.open();
            popupDeleteCard.setSubmitAction(() =>
              api.deleteCard(cardId).then(() => element.remove())
            );
          }
        );
        const cardElement = card.generateCard();
        cardSeccion.addItem(cardElement);
      },
    },
    ".elements__card"
  );
  cardSeccion.rendererItems();

  const popupDeleteCard = new PopupWithConfirmation("#popupdeletecard");
  popupDeleteCard.setEventListeners();

  //Validacion formularios
  const formProfile = new FormValidator(miFormulario, settings);
  formProfile.enableValidation();
  const addCard = new FormValidator(formAdd, settings);
  addCard.enableValidation();

  //Abrir ventana emergente
  const openImage = new popupWithImage("#popupwindow");
  openImage.setEventListeners();

  const openPopup = new Popup(".popup");
  openPopup.setEventListeners();

  //Formulario perfil
  const UserProfile = new UserInfo(
    UserProfileconfg.name,
    UserProfileconfg.job,
    UserProfileconfg.avatar
  );

  const popupProfile = new popupWithForm(
    "#overlay",
    (data) => {
      //obtiene la informacion del form (data)
      //actualiza la interfaz
      console.log(data);
      UserProfile.setUserInfo(data.name, data.job);
      //actualizar la api
      api.editProfile(data.name, data.job).then(() => {
        popupProfile.close();
        const btn = popupProfile.formElement.querySelector(
          ".popup__button-save"
        );
        btn.innerText = "Guardar";
      });
    },
    "Guardando..."
  );
  popupProfile.setEventListeners();

  //Formulario añadir cartas
  const popupAddCards = new popupWithForm(
    "#overlayadd",
    (data) => {
      console.log(data);
      api.createCard(data.title, data.url).then(function (card) {
        const addCard = new Card(
          card,
          (title, link) => {
            openImage.open(title, link);
          },
          (cardId, element) => {
            popupDeleteCard.open();
            popupDeleteCard.setSubmitAction(() =>
              api.deleteCard(cardId).then(() => element.remove())
            );
          }
        );
        const cardElement = addCard.generateCard();
        cardSeccion.addItem(cardElement);
        popupAddCards.close();
        const btn = popupAddCards.formElement.querySelector(
          ".popup__button-save"
        );
        btn.innerText = "Crear";
      });
    },
    "Creando..."
  );

  popupAddCards.setEventListeners();

  //Cambio, imagen perfil
  const popupImageProfile = new popupWithForm(
    "#avatar",
    (data) => {
      UserProfile.setUserAvatar(data.avatarImg);
      api.upDateImageProfile(data.avatarImg).then(() => {
        popupImageProfile.close();
        const btn = popupImageProfile.formElement.querySelector(
          ".popup__button-save"
        );
        btn.innerText = "Guardar";
      });
    },
    "Guardando..."
  );
  popupImageProfile.setEventListeners();

  //Formulario cambio,imagen de perfil
  const btnAvatar = document.querySelector(".profile__edit-avatar");
  //Abrir al pulsar foto de perfil
  btnAvatar.addEventListener("click", () => {
    popupImageProfile.open();
  });

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
});
