import { NegotiationController } from "./controllers/negotiation-controller.js";
const controller = new NegotiationController();
const form = document.querySelector(".form");
if (!form) {
    throw Error("object form return null");
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    controller.add();
});
