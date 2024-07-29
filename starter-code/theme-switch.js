let lightText = document.getElementById('light-text')
let darkText = document.getElementById('dark-text')

export function themeSwitch() {
    document.body.classList.toggle("dark-mode");
    let icon = document.getElementById('dark-img');
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark-mode");
        icon.src = 'assets/icon-sun.svg'
        darkText.style.display = "none";
        lightText.style.display = "block"
    } else {
        localStorage.removeItem("theme");
        darkText.style.display = "block";
        lightText.style.display = "none"
        icon.src = 'assets/icon-moon.svg'
    }
}

export function applyTheme() {
    const theme = localStorage.getItem("theme");
    if (theme) {
        document.body.classList.add("dark-mode");
        darkText.style.display = "none";
        lightText.style.display = "block"
    } else {
        document.body.classList.remove("dark-mode");
        darkText.style.display = "block";
        lightText.style.display = "none"
    }
}