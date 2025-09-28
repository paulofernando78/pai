import { loadConstruto } from "./js/construto";
import { loadMyControl } from "./js/my-control";

document.getElementById("constructoLink").addEventListener("click", (e) => {
  e.preventDefault();
  loadConstruto();
});

document.getElementById("my-control-link").addEventListener("click", (e) => {
  e.preventDefault();
  loadMyControl();
});
