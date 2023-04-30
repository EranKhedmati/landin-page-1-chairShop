// Navbar Menu-----------------------------------------------------

// Import elements
const menu = document.getElementById("menu"),
    menuBtn = document.getElementById("menu-btn");
let  menuIsOpen = false;

// Event for toggle menu

menuBtn.addEventListener("click",()=>{
    if(menuIsOpen) {
        // handel button
        menuBtn.classList.add("fa-bars");
        menuBtn.classList.remove("fa-x");
        menuBtn.style.color = "var(--light)";
        // set menu to show
        menu.style.display = "none";
        // Tell computer the menu is close now
        menuIsOpen = false;
    } else {
        // handle button
        menuBtn.classList.remove("fa-bars");
        menuBtn.classList.add("fa-x");
        menuBtn.style.color = "var(--black)";
        // set menu to hidden
        menu.style.display = "flex";
        // Tell computer the menu is show now
        menuIsOpen = true;
    }
})