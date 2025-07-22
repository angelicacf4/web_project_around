function enableValidation(settings) {
  const formList = document.querySelectorAll(settings.formSelector);
  formList.forEach(function (form) {
    const inputList = Array.from(form.querySelectorAll(settings.inputSelector));
    console.log(inputList);
    setEventListener(form, inputList, settings);
  });
}

function setEventListener(form, inputList, settings) {
  const buttonElement = form.querySelector(settings.submitButtonSelector);
  validateButton(buttonElement, inputList, settings);
  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
  });
  inputList.forEach(function (input) {
    input.addEventListener("input", function () {
      showInputError(input);
      validateButton(buttonElement, inputList, settings);
    });
  });
}

function validateButton(buttonElement, inputList, settings) {
  if (checkInputsValidity(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(settings.inactiveButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(settings.inactiveButtonClass);
  }
}

function checkInputsValidity(inputList) {
  return inputList.some(function (input) {
    return !input.validity.valid;
  });
}

function showInputError(input) {
  const spanElement = document.getElementById(`${input.id}-error`);
  spanElement.textContent = input.validationMessage;
}

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button-save-disabled",
});
