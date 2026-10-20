// Konfigurasi Warna Tailwind CDN via JS (Biar HTML Tetap Bersih)
if (typeof tailwind !== "undefined") {
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          emerald: {
            50: "#f0fdf4",
            100: "#dcfce7",
            600: "#059669",
            700: "#047857",
            800: "#065f46",
            900: "#064e3b",
            950: "#022c22",
          },
        },
      },
    },
  };
}

// Inisialisasi Fitur & Event Listener
document.addEventListener("DOMContentLoaded", () => {
  // 1. Inisialisasi Icon Lucide
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // 2. Smooth Scroll dengan Offset untuk Header Sticky
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});
