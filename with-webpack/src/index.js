import { add } from "./math.js";
import webpackLogo from "./webpack.svg";
import style from "./style.css";

export default {
  mount: (container, appProps, settings) => {
      const result = add(1, 1);
      container.innerHTML = `
        <div id="app">
          <style>${style}</style>
          <a href="https://webpack.js.org/" target="_blank">
            <img src="${webpackLogo}" alt="Webpack logo" width="100px"></img>
          </a>
          <p>1 + 1 = ${result}</p>
        </div>
      `;
  },
  unmount: (container) => {
      container.innerHTML = "";
  }
};
