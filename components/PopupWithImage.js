import Popup from "./Popup.js";

export default class PopupwithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._link = this.popupElement.querySelector(".popup__image");
    this._title = this.popupElement.querySelector(".popup__text");
  }
  open(title, link) {
    super.open();
    this._link.src = link;
    this._title.textContent = title;
  }
}
