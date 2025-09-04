export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this.items = items; //lista de cartas inicial
    this.renderer = renderer; //proceso para agregar las cartas al html
    this.itemsContainer = document.querySelector(containerSelector); //elemento donde agregare las cartas
  }

  rendererItems() {
    this.items.forEach((item) => {
      this.renderer(item);
    });
  }

  addItem(item) {
    this.itemsContainer.prepend(item);
  }
}
