const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

function toggleSidebar(){

    document.querySelector(".sidebar")
    .classList.toggle("active");

}
