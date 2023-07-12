export default {
    mount: (container, appProps, settings) => {
        container.innerHTML = `
            <link href="${settings.themeUrl}" type="text/css" rel="stylesheet"></link>
            <button type="button" class="btn btn-primary">Button</button>
        `;
    },
    unmount: (container) => {
        container.innerHTML = "";
    }
};
