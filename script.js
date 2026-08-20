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
<<<<<<< HEAD

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
=======
>>>>>>> a1d5d8d8e2166eaf13f9d236c985aa3d2ef3cf09
