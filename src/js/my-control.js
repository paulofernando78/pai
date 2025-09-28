import "/src/css/my-control.css";
import "/src/global.css";

import { renderPage } from "../utils/renderHTML";
import myControlHtml from "../pages/my-control.html?raw";

export function loadMyControl() {
  renderPage(myControlHtml)
}
