const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelector("[data-nav-links]");
const filterButtons = document.querySelectorAll("[data-filter]");
const menuCards = document.querySelectorAll(".menu-card");
const bookingForm = document.querySelector("[data-booking-form]");
const formStatus = document.querySelector("[data-form-status]");
const dateInput = document.querySelector("#date");

const iconPaths = {
  menu: '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
  "cake-slice":
    '<path d="M7.5 7.5 21 12l-1.8 6.2a2.5 2.5 0 0 1-2.4 1.8H6.2a2.5 2.5 0 0 1-2.4-3.2L5 12z"/><path d="M7.5 7.5 5 12"/><path d="M7.5 7.5c1.2-2.7 3.5-4 6-3.1 1.7.6 2.8 2 3.5 3.6"/><path d="M8 15h.01"/><path d="M12 16h.01"/><path d="M16 15h.01"/>',
  "calendar-check":
    '<path d="M8 2v4"/><path d="M16 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18"/><path d="m9 16 2 2 4-5"/>',
  sparkles:
    '<path d="M12 3 9.6 8.4 4 11l5.6 2.6L12 19l2.4-5.4L20 11l-5.6-2.6z"/><path d="M5 3v4"/><path d="M3 5h4"/><path d="M19 17v4"/><path d="M17 19h4"/>',
  "party-popper":
    '<path d="M5.8 11.3 3 21l9.7-2.8"/><path d="m4 20 9.2-9.2"/><path d="M15 5h.01"/><path d="M18 8h.01"/><path d="M19 2l1 3-3 1"/><path d="m10 4 2 2"/><path d="m16 10 2 2"/><path d="M8 7c2 1 4 3 5 5"/>',
  croissant:
    '<path d="M4.6 15.5C3.4 13.2 3.6 9.6 6 7c1.8-2 4.3-2.5 6-1"/><path d="M19.4 15.5C20.6 13.2 20.4 9.6 18 7c-1.8-2-4.3-2.5-6-1"/><path d="M7 15c1.2 2.6 3 4 5 4s3.8-1.4 5-4"/><path d="M7 15c1.5-1.8 3.2-2.7 5-2.7s3.5.9 5 2.7"/><path d="M10 6c.8 1.7.8 3.4 0 5"/><path d="M14 6c-.8 1.7-.8 3.4 0 5"/>',
  star:
    '<path d="m12 2 3.1 6.3 6.9 1-5 4.8 1.2 6.9-6.2-3.3L5.8 21 7 14.1 2 9.3l6.9-1z"/>',
  instagram:
    '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  send: '<path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>',
  "map-pin": '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  phone:
    '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  facebook:
    '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.2l.8-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  "message-circle":
    '<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.7 8.7 0 0 1-3.9-.9L3 21l1.4-4.9A8.5 8.5 0 1 1 21 11.5z"/><path d="M8 10h8"/><path d="M8 14h5"/>',
};

const renderFallbackIcons = () => {
  document.querySelectorAll("i[data-lucide]").forEach((icon) => {
    const name = icon.dataset.lucide;
    const paths = iconPaths[name] || iconPaths.star;
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "2");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    svg.setAttribute("data-local-icon", name);
    svg.innerHTML = paths;
    icon.replaceWith(svg);
  });
};

try {
  if (window.lucide) {
    window.lucide.createIcons();
  }
} catch (error) {
  renderFallbackIcons();
}

renderFallbackIcons();

const setHeaderState = () => {
  header.classList.toggle("scrolled", window.scrollY > 18);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  document.body.classList.toggle("nav-open", isOpen);
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
    document.body.classList.remove("nav-open");
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    menuCards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

const revealItems = document.querySelectorAll("[data-reveal]");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const sections = document.querySelectorAll("main section[id]");
const navItems = navLinks.querySelectorAll("a");

const activeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.getAttribute("id");
      navItems.forEach((item) => {
        item.classList.toggle("active", item.getAttribute("href") === `#${id}`);
      });
    });
  },
  {
    rootMargin: "-40% 0px -55% 0px",
    threshold: 0,
  }
);

sections.forEach((section) => activeObserver.observe(section));

if (dateInput) {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  dateInput.min = `${yyyy}-${mm}-${dd}`;
}

if (bookingForm) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent = "Thank you. Your cake request is ready to be confirmed by the Celebration Point team.";
    bookingForm.reset();
    if (dateInput) {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, "0");
      const dd = String(today.getDate()).padStart(2, "0");
      dateInput.min = `${yyyy}-${mm}-${dd}`;
    }
  });
}

document.querySelector("[data-year]").textContent = new Date().getFullYear();
