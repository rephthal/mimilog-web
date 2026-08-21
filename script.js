function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}
function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

    document.getElementById("menu").classList.remove("active");
}


function toggleMenu() {
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("overlay");

    menu.classList.toggle("active");
    overlay.classList.toggle("active");
}

function closeMenu() {
    document.getElementById("menu").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}

function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

    closeMenu();
}

document.getElementById("overlay").addEventListener("click", closeMenu);

let count = localStorage.getItem("visitorCount");

if (count === null) {
    count = 1;
} else {
    count = Number(count) + 1;
}

localStorage.setItem("visitorCount", count);

document.getElementById("visitor-count").textContent = count;