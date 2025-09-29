import "/src/css/pages/construto.css";
import "/src/global.css";
import { renderPage } from "../../utils/renderHTML";
import construtoHtml from "/src/pages/construto.html?raw";

export function loadConstruto() {
  renderPage(construtoHtml);

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

  function stopDragging() {
    isDown = false;
    container.classList.remove("active");
  }

  container.addEventListener("mouseup", stopDragging);
  container.addEventListener("mouseleave", stopDragging);

  container.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const y = e.pageY - container.offsetTop;

    const walkX = x - startX;
    const walkY = y - startY;
    container.scrollLeft = scrollLeft - walkX;
    container.scrollTop = scrollTop - walkY;
  });
}
