const root = document.documentElement;
const toggle = document.getElementById("theme-toggle");

const stored = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
root.classList.toggle("dark", stored ? stored === "dark" : prefersDark);

toggle.addEventListener("click", () => {
  const isDark = root.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.12 }
);

for (const el of document.querySelectorAll(".section, .hero")) {
  el.classList.add("reveal");
  observer.observe(el);
}
