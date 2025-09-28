import { loadConstruto } from "./js/construto";
import { loadControl } from "./js/control";

document.getElementById("constructoLink").addEventListener("click", (e) => {
  e.preventDefault();
  loadConstruto();
});

document.getElementById("controlLink").addEventListener("click", (e) => {
  e.preventDefault();
  loadControl();
});
