export default class Popup {
  constructor(popupSelector) {
    this.popupElement = document.querySelector(popupSelector);
  }
  open() {
    this.popupElement.classList.add("visible");
  }
  close() {
    this.popupElement.classList.remove("visible");
  }
  _handleEscClose(evt) {
    if (evt.target.key === "Escape") {
      this.close();
    }
  }
  _handleClickOutSide(evt) {
    if (evt.target === this.popupElement) {
      this.close();
    }
  }
  setEventListeners() {
    this.popupElement.addEventListener("click", (evt) => {
      this._handleClickOutSide(evt);
    });

    this.btnClosePopup = this.popupElement
      .querySelector(".popup__button-close")
      .addEventListener("click", () => {
        this.close();
      });

    document.addEventListener("keydown", (evt) => {
      this._handleEscClose(evt);
    });
  }
}
