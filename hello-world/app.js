export default {
    mount: (container, appProps, settings) => {
        const text = JSON.stringify({ appProps, settings }, null, 2);
        container.innerHTML = `<pre style="overflow: auto">${text}</pre>`;
    },
    unmount: (container) => {
        container.innerHTML = "";
    }
};
