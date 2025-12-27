document.addEventListener("DOMContentLoaded", () => {
  // 1. MOBILE MENU TOGGLE (Hamburger)
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle("hidden");
    });
  }

  // 2. CLOSE MENU WHEN CLICKING OUTSIDE
  document.addEventListener("click", (e) => {
  
    if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
      if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.add("hidden");
      }
    }
  });
});
