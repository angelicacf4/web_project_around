export default class FormValidator {
  constructor(form, settings) {
    this._form = form; // 1 formulario
    this._settings = settings;
  }
  enableValidation() {
    this.inputList = Array.from(
      this._form.querySelectorAll(this._settings.inputSelector)
    ); // 1 lista de inputs
    this._setEventListener(); // 1 metodo
  }
  _setEventListener() {
    this.buttonElement = this._form.querySelector(
      this._settings.submitButtonSelector
    ); // 1 boton
    this._form.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    this.inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._showInputError(input);
        this._validateButton();
      });
    });
  }
  _showInputError(input) {
    const spanElement = document.getElementById(`${input.id}-error`);
    spanElement.textContent = input.validationMessage;
  }

  _validateButton() {
    if (this.checkInputsValidity(this.inputList)) {
      this.buttonElement.disabled = true;
      this.buttonElement.classList.add(this._settings.inactiveButtonClass);
    } else {
      this.buttonElement.disabled = false;
      this.buttonElement.classList.remove(this._settings.inactiveButtonClass);
    }
  }

  checkInputsValidity(inputList) {
    return inputList.some((input) => {
      return !input.validity.valid;
    });
  }
}
