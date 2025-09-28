import { loadConstructo } from "./js/construto";

document.getElementById("constructoLink").addEventListener("click", (e) => {
  e.preventDefault();
  loadConstructo();
});
