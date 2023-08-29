import Element from "./initElement"

document.querySelectorAll(".btn").forEach((el) => {
  const element = new Element(el);
  element.init();
});
