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
