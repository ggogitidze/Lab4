
const darkModeToggle = document.getElementById("darkModeToggle");
const currentTheme = localStorage.getItem("darkMode");

if (currentTheme === "enabled") {
    document.body.classList.add("dark-mode");
}

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});


if (window.location.pathname.includes("page2.html")) {
    const params = new URLSearchParams(window.location.search);
    const resultsDiv = document.getElementById("results");

    let output = "<div class='result-grid'>";
    params.forEach((value, key) => {
        output += `<div class='row'><strong>${key}:</strong> ${value}</div>`;
    });
    output += "</div>";

    resultsDiv.innerHTML = output;
}
