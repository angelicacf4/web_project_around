export const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button-save-disabled",
};

export const closePopup = document.querySelector(".popup");
export const closeOverlayAdd = document.querySelector("#overlayadd");
export const closePopupWindow = document.querySelector("#popupwindow");
export const closeWindow = document.querySelector("#closewindow");
// Cerrar con tecla ESC
//Ventana emergente
export function cerrarPopupWindow(evt) {
  let popupWindow = document.querySelector("#popupwindow");

  popupWindow.classList.remove("visible");
  document.removeEventListener("keydown", closeOnEscape);
}

function cerrarpopup(evt) {
  const popup = document.querySelector(".popup");

  popup.classList.remove("visible");
  document.removeEventListener("keydown", closeOnEscape);
}
function cerrarOverlayadd(evt) {
  let overlayAdd = document.querySelector("#overlayadd");

  overlayAdd.classList.remove("visible");
  document.removeEventListener("keydown", closeOnEscape);
}

export function closeOnEscape(evt) {
  console.log("tecla presionada:", evt.key);
  if (evt.key === "Escape") {
    cerrarpopup();
    cerrarOverlayadd();
    cerrarPopupWindow();
  }
}
