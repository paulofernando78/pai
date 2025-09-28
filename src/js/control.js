import "/src/css/control.css";
import "/src/global.css";

import { renderPage } from "../utils/renderHTML";
import controlHtml from "../pages/control.html?raw";

export function loadControl() {
  renderPage(controlHtml)
}
