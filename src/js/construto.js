import "/src/css/construto.css";
import "/src/global.css";
import construtoHtml from "../pages/construto.html?raw";

export function loadConstructo() {
  const app = document.getElementById("app");
  /*html*/
  app.innerHTML = construtoHtml;

  const container = document.querySelector(".construto-container");

  let isDown = false;
  let startX, startY, scrollLeft, scrollTop;

  container.addEventListener("mousedown", (e) => {
    isDown = true;
    container.classList.add("active");
    startX = e.pageX - container.offsetLeft;
    startY = e.pageY - container.offsetTop;
    scrollLeft = container.scrollLeft;
    scrollTop = container.scrollTop;
  });

  container.addEventListener("mouseup", () => {
    isDown = false;
    container.classList.remove("active");
  });

  container.addEventListener("mouseleave", () => {
    isDown = false;
    container.classList.remove("active");
  });

  container.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const y = e.pageY - container.offsetTop;
    container.scrollLeft = scrollLeft - (x - startX);
    container.scrollTop = scrollTop - (y - startY);
  });
}
