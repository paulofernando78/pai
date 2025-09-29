import "/src/css/pages/my-control.css";
import "/src/global.css";

import { head } from "../svg-imports";

import { renderPage } from "../../utils/renderHTML";
import myControlHtml from "/src/pages/my-control.html?raw";

export function loadMyControl() {
  renderPage(myControlHtml);
  document.getElementById("head").innerHTML = head;
}
