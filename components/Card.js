export default class Card {
  constructor(title, link, handleCardClick) {
    this._link = link;
    this._title = title;
    this._handleCardClick = handleCardClick;
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
        this._handleCardClick(this._title, this._link);
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
}
