import { api } from "./Api.js";
export default class Card {
  constructor(data, handleCardClick, handleDeleteCard) {
    this._link = data.link;
    this._title = data.name;
    this._id = data._id;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._ownerId = data.owner;
    this._isLiked = data.isLiked;
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(".template")
      .content.querySelector(".card")
      .cloneNode(true);
    console.log("cardId", this._id);
    return cardElement;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__text").textContent = this._title;
    if (this._isLiked) {
      this._element
        .querySelector(".card__like-button")
        .classList.add("card__like-black");
    }
    return this._element;
  }
  _setEventListeners() {
    //Evento like
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLike();
      });

    //Evento eliminar card
    this._element
      .querySelector(".card__trash")
      .addEventListener("click", () => {
        this._handleRemove();
      });

    //Evento abrir ventana emergente
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleCardClick(this._title, this._link);
      });
  }
  _handleLike() {
    const isLike = this._element
      .querySelector(".card__like-button")
      .classList.contains("card__like-black");
    if (isLike === true) {
      api.deleteLikeCard(this._id);
    } else {
      api.likeCard(this._id);
    }
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-black");
  }
  _handleRemove() {
    this._handleDeleteCard(this._id, this._element);
  }
}
