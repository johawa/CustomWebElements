export default class MyElement extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: "open" });
    this.message = document.createElement("div");
    this.message.textContent = "Custom Element!";
    this.addEventListener();
  }

  connectedCallback() {
    this.root.appendChild(this.message);
  }

  addEventListener() {
    this.root.addEventListener("click", () => {
      const evt = new CustomEvent("onWobble", {
        detail: {
          m: "%c WOBBLE!",
          s: "color:red"
        },
        bubbles: true
      });
      this.dispatchEvent(evt);
    });
  }
}

customElements.define("my-element", MyElement);
