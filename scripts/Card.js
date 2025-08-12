import { closeOnEscape } from "./utils.js";
export default class Card {
  constructor(title, link) {
    this._link = link;
    this._title = title;
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(".template")
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__text").textContent = this._title;

    return this._element;
  }
  _setEventListeners() {
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLike();
      });
    this._element
      .querySelector(".card__trash")
      .addEventListener("click", () => {
        this._handleRemove();
      });
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleOpenCard();
      });
    this._element.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
  }
  _handleLike() {
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-black");
  }
  _handleRemove() {
    this._element.remove();
  }
  _handleCreateCard() {
    const titleInput = document.querySelector("#title");
    const urlInput = document.querySelector("#url");
    const cardDescription = document.querySelectorAll(".card__description");
    cardDescription.textContent = titleInput.value;

    const cardImage = document.querySelector(".card__image");
    cardImage.textContent = urlInput.value;
    const saveBtn = document.querySelector("#saveBtn");
    saveBtn.addEventListener("click", () => {
      this._element.add();
    });
  }
  _handleOpenCard() {
    const popupImage = document.querySelector(".popup__image");
    const imageTitle = document.querySelector("#imagetitle");
    let popupWindow = document.querySelector("#popupwindow");
    popupWindow.classList.add("visible");
    document.addEventListener("keydown", closeOnEscape);
    const imageSrc = this._link;
    const title = this._title;
    popupImage.src = imageSrc;
    imageTitle.textContent = title;
  }
}
