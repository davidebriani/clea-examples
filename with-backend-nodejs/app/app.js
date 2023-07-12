export default {
    mount: (container, appProps, settings) => {
        container.innerHTML = "Querying the backend...";
        fetch("http://localhost:5001/")
            .then(response => response.json())
            .then(data => {
                container.innerHTML = data.message;
            })
            .catch(() => {
                container.innerHTML = "Failed to query the backend.";
            });
    },
    unmount: (container) => {
        container.innerHTML = "";
    }
};
