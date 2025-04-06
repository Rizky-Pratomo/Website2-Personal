document.addEventListener("DOMContentLoaded", function () {
    const toggleDarkMode = document.getElementById("toggleDarkMode");
    const body = document.body;

    // Cek status mode gelap di LocalStorage
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        toggleDarkMode.innerText = "Light Mode ☀️";
    }

    toggleDarkMode.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            toggleDarkMode.innerText = "Light Mode ☀️";
        } else {
            localStorage.setItem("dark-mode", "disabled");
            toggleDarkMode.innerText = "Dark Mode 🌙";
        }
    });
});
