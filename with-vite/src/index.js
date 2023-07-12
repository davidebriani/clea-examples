import { add } from "./math.js";
import viteLogo from "./vite.svg?inline";
import style from "./style.css?inline";

export default {
  mount: (container, appProps, settings) => {
      const result = add(1, 1);
      container.innerHTML = `
        <div id="app">
          <style>${style}</style>
          <a href="https://vitejs.dev" target="_blank">
            <img src="${viteLogo}" alt="Vite logo" width="100px"></img>
          </a>
          <p>1 + 1 = ${result}</p>
        </div>
      `;
  },
  unmount: (container) => {
      container.innerHTML = "";
  }
};
