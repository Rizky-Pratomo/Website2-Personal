document.addEventListener("DOMContentLoaded", () => {
    const toggleDarkMode = document.getElementById("toggleDarkMode");
    const body = document.body;

    // Cek dan terapkan status dark mode dari localStorage
    const isDarkMode = localStorage.getItem("dark-mode") === "enabled";
    if (isDarkMode) {
        body.classList.add("dark-mode");
        toggleDarkMode.innerText = "Light Mode ☀️";
    }

    // Event listener untuk tombol dark mode
    toggleDarkMode.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        const darkModeAktif = body.classList.contains("dark-mode");
        toggleDarkMode.innerText = darkModeAktif ? "Light Mode ☀️" : "Dark Mode 🌙";
        localStorage.setItem("dark-mode", darkModeAktif ? "enabled" : "disabled");
    });
});
