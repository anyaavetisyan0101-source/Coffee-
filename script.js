document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.querySelector("#menu-btn");
    const closeBtn = document.querySelector("#close-menu-btn");
    const menu = document.querySelector(".menu-link");

    console.log(menuBtn, closeBtn, menu); // ստուգելու համար

    menuBtn.addEventListener("click", () => {
        menu.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        menu.classList.remove("active");
    });

});
