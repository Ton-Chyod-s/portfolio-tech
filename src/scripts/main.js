import { fetchData } from "./modules/api.js";
import { setupNavbar } from "./components/navbar.js";

document.addEventListener("DOMContentLoaded", () => {
    setupNavbar();
    fetchData();
});
