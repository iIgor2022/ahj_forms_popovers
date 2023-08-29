export default class Popover {
  constructor (element) {
    this.relatedElement = element;
    this.title = this.relatedElement.dataset.popoverTitle;
    this.content = this.relatedElement.dataset.popoverContent;
    this.html = this.createPopover();

    this.removePopover = this.removePopover.bind(this);
  }

  createPopover() {
    const popover = document.createElement("div");
    popover.classList.add("popover");

    const popoverTitle = document.createElement("div");
    popoverTitle.classList.add("popover-header");
    popoverTitle.textContent = this.title;
    popover.appendChild(popoverTitle);

    const popoverContent = document.createElement("div");
    popoverContent.classList.add("popover-body");
    popoverContent.textContent = this.content;
    popover.appendChild(popoverContent);

    return popover;
  }

  showPopover() {
    this.relatedElement.parentElement.appendChild(this.html);
    const { offsetTop: top, offsetLeft: left, offsetWidth: width } = this.relatedElement;
    this.html.style.top = `${top - this.html.offsetHeight - 5}px`;
    this.html.style.left = `${left + width / 2 - this.html.offsetWidth / 2}px`
  }

  // eslint-disable-next-line class-methods-use-this
  removePopover() {
    const currentPopover = document.querySelector(".popover");
    if (currentPopover) {
      currentPopover.remove();  
    }
  }
}