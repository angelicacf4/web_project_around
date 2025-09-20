import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._deleteButton = this.popupElement.querySelector(".popup__button-save");
  }
  // Método para establecer qué función ejecutar al confirmar
  setSubmitAction(action) {
    this._handleSubmitCallback = action;
  }

  setEventListeners() {
    super.setEventListeners(); // Mantiene los eventos de la clase padre

    this._deleteButton.addEventListener("click", (evt) => {
      evt.preventDefault();
      this._handleSubmitCallback(); // Ejecuta la función que se pasó

      this.close();
    });
  }
}
