
document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const mobileNav = document.getElementById("mobileNav");

    hamburgerMenu.addEventListener("click", () => {
        mobileNav.classList.toggle("active");
    });

    // Close modal when clicking outside content
    mobileNav.addEventListener("click", (event) => {
        if (!event.target.closest(".mobile-nav-content")) {
            mobileNav.classList.remove("active");
        }
    });
});
