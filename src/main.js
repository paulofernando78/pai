import { loadConstruto } from "./js/pages/construto";
import { loadMyControl } from "./js/pages/my-control";

document.getElementById("constructoLink").addEventListener("click", (e) => {
  e.preventDefault();
  loadConstruto();
});

document.getElementById("my-control-link").addEventListener("click", (e) => {
  e.preventDefault();
  loadMyControl();
});
