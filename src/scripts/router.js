const routes = {
    "/": "src/pages/home.html",
    "/about": "src/pages/about.html",
    "/projects": "src/pages/projects.html",
    "/statements": "src/pages/statements.html",
    "/contact": "src/pages/contact.html",
};  

function route(event) {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    handleLocation();
}

async function handleLocation() {
    const divApp = document.getElementById("app");

    const divElements = divApp.querySelectorAll("div");

    if (divElements.length >= 5) {
        console.log("Limite de elementos alcançado.");
        return; 
    }

    for (const key of Object.keys(routes)) {
        const html = await fetch(routes[key]).then(response => response.text());
        const keyReplace = key.replace("/", "");

        const div = document.createElement("div");
        div.innerHTML = html;
        div.id = `div-${keyReplace}`; 
        divApp.appendChild(div);
    }
}

window.onpopstate = handleLocation;

document.addEventListener("DOMContentLoaded", () => {
    handleLocation();
});