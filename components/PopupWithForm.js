import Popup from "./Popup.js";

export default class PopupwithForm extends Popup {
  constructor(popupSelector, callback) {
    super(popupSelector);

    this.handleSubmit = callback;
  }

  _getInputValues() {
    this.inputList = this.formElement.querySelectorAll(".popup__input"); //Seleccionamos todos los input de los formularios

    const data = {};

    this.inputList.forEach((input) => {
      data[input.id] = input.value;
    });

    return data;
  } //se va a encargar de dar como resultado la lista de los valores de input

  close() {
    super.close();
    this.formElement.reset();
  }

  setEventListeners() {
    this.formElement = this.popupElement.querySelector("form");
    super.setEventListeners();
    this.formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      console.log(this._getInputValues());
      this.handleSubmit(this._getInputValues());
      this.close();
    });
  }
}
