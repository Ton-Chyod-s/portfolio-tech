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

    Object.keys(routes).forEach(async (key) => {
        const html = await fetch(routes[key]).then(response => response.text());
        const div = document.createElement("div");
        div.innerHTML = html;
        div.id = `div-${key}`; 
        document.body.appendChild(div);
    });

}

window.onpopstate = handleLocation;

document.addEventListener("DOMContentLoaded", () => {
    handleLocation();
});