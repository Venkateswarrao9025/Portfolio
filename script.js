// ===== Helpers =====
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ===== Theme toggle (persists) =====
const root = document.documentElement;
const themeToggle = $(".theme-toggle");
const themeIcon = $(".theme-icon");

function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  if (themeIcon) themeIcon.textContent = theme === "light" ? "☀️" : "🌙";
}

(function initTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") {
    setTheme(saved);
  } else {
    // default dark; change to "light" if you prefer
    setTheme("dark");
  }
})();

themeToggle?.addEventListener("click", () => {
  const current = root.getAttribute("data-theme") || "dark";
  setTheme(current === "dark" ? "light" : "dark");
});

// ===== Mobile nav =====
const navToggle = $(".nav-toggle");
const nav = $(".nav");

navToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close mobile nav after clicking a link
$$(".nav a").forEach((a) => {
  a.addEventListener("click", () => {
    if (nav.classList.contains("open")) {
      nav.classList.remove("open");
      navToggle?.setAttribute("aria-expanded", "false");
    }
  });
});

// ===== Footer year =====
$("#year").textContent = new Date().getFullYear();

// ===== Resume Download (optional) =====
// Put your resume file in the same folder and name it "resume.pdf"
const resumeBtn = $("#resumeBtn");
if (resumeBtn) {
  resumeBtn.setAttribute("href", "resume.pdf"); // change filename if needed
}

// ===== Projects (render + filter) =====
const projects = [
  {
    title: "Car Rental Web Portal",
    category: "frontend",
    desc: "Responsive UI + booking flow with clean components and validation.",
    tags: ["React", "UI", "Forms"],
    links: { live: "#", code: "#" }
  },
  {
    title: "Hotel Database System",
    category: "backend",
    desc: "Designed relational schema, wrote queries, and built CRUD flows.",
    tags: ["SQL", "DBMS", "CRUD"],
    links: { live: "#", code: "#" }
  },
  {
    title: "Food Waste Management",
    category: "data",
    desc: "Analytics + workflow to track and reduce waste with dashboards.",
    tags: ["ETL", "Power BI", "Analytics"],
    links: { live: "#", code: "#" }
  },
  {
    title: "Secure Microservices (Java/Spring)",
    category: "backend",
    desc: "JWT/OAuth-style authentication and scalable API patterns.",
    tags: ["Spring Boot", "Security", "REST"],
    links: { live: "#", code: "#" }
  },
  {
    title: "Portfolio Website",
    category: "frontend",
    desc: "Modern single-page site with theme toggle and project filtering.",
    tags: ["HTML", "CSS", "JavaScript"],
    links: { live: "#top", code: "#" }
  }
];

const projectGrid = $("#projectGrid");
const projectSearch = $("#projectSearch");
const projectFilter = $("#projectFilter");

function projectCard(p) {
  const tags = p.tags.map(t => `<span class="tag">${t}</span>`).join("");
  const live = p.links?.live ? `<a href="${p.links.live}" target="_blank" rel="noreferrer">Live</a>` : "";
  const code = p.links?.code ? `<a href="${p.links.code}" target="_blank" rel="noreferrer">Code</a>` : "";

  return `
    <article class="card project" data-category="${p.category}">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="tags">${tags}</div>
      <div class="project-links">${live}${code}</div>
    </article>
  `;
}

function renderProjects(list) {
  if (!projectGrid) return;
  if (!list.length) {
    projectGrid.innerHTML = `<div class="panel" style="grid-column: 1 / -1;">
      <strong>No projects found.</strong>
      <p class="muted small">Try a different keyword or choose “All”.</p>
    </div>`;
    return;
  }
  projectGrid.innerHTML = list.map(projectCard).join("");
}

function applyProjectFilters() {
  const q = (projectSearch?.value || "").toLowerCase().trim();
  const f = projectFilter?.value || "all";

  const filtered = projects.filter((p) => {
    const hay = `${p.title} ${p.desc} ${p.tags.join(" ")}`.toLowerCase();
    const matchesQuery = !q || hay.includes(q);
    const matchesFilter = f === "all" || p.category === f;
    return matchesQuery && matchesFilter;
  });

  renderProjects(filtered);
}

// Initial render
renderProjects(projects);

projectSearch?.addEventListener("input", applyProjectFilters);
projectFilter?.addEventListener("change", applyProjectFilters);

// ===== Contact form (demo) =====
const contactForm = $("#contactForm");
const formNote = $("#formNote");

contactForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const fd = new FormData(contactForm);
  const name = fd.get("name");
  const email = fd.get("email");
  const message = fd.get("message");

  // Client-side demo only:
  if (formNote) {
    formNote.textContent = `Thanks ${name}! (Demo) Your message is ready to be sent. Replace this with EmailJS / backend API when you want real sending.`;
  }

  // Optional: open default mail app with prefilled content
  const subject = encodeURIComponent("Portfolio Contact");
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;

  contactForm.reset();
});
