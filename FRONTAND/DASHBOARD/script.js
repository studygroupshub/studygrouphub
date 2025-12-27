document.addEventListener("DOMContentLoaded", () => {

  // 1. MOBILE MENU LOGIC (Hamburger)

  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle("hidden");
    });
  }

  // 2. MOBILE TEAM DROPDOWN (Accordion)

  const mobileTeamBtn = document.getElementById("mobile-team-btn");
  const mobileTeamSubmenu = document.getElementById("mobile-team-submenu");
  const mobileTeamArrow = document.getElementById("mobile-team-arrow");

  if (mobileTeamBtn && mobileTeamSubmenu) {
    mobileTeamBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileTeamSubmenu.classList.toggle("hidden");

      // Rotate Arrow
      if (mobileTeamArrow) {
        if (mobileTeamSubmenu.classList.contains("hidden")) {
          mobileTeamArrow.style.transform = "rotate(0deg)";
        } else {
          mobileTeamArrow.style.transform = "rotate(180deg)";
        }
      }
    });
  }


  // 3. DESKTOP TEAM DROPDOWN (Click to Open)

  const desktopTeamBtn = document.getElementById("desktop-team-btn");
  const desktopTeamMenu = document.getElementById("desktop-team-menu");
  const desktopTeamArrow = document.getElementById("desktop-team-arrow");

  if (desktopTeamBtn && desktopTeamMenu) {
    desktopTeamBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Click ko failne se roko
      desktopTeamMenu.classList.toggle("hidden");

      // Rotate Arrow logic
      if (desktopTeamArrow) {
        if (desktopTeamMenu.classList.contains("hidden")) {
          desktopTeamArrow.style.transform = "rotate(0deg)";
        } else {
          desktopTeamArrow.style.transform = "rotate(180deg)";
        }
      }
    });
  }


  // 4. CLOSE EVERYTHING WHEN CLICKING OUTSIDE

  document.addEventListener("click", (e) => {
    // Close Mobile Menu if open
    if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
      if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.add("hidden");
      }
    }

    // Close Desktop Dropdown if open
    if (desktopTeamMenu && !desktopTeamMenu.classList.contains("hidden")) {
      if (
        !desktopTeamMenu.contains(e.target) &&
        !desktopTeamBtn.contains(e.target)
      ) {
        desktopTeamMenu.classList.add("hidden");
        // Reset Arrow
        if (desktopTeamArrow) desktopTeamArrow.style.transform = "rotate(0deg)";
      }
    }
  });
});
