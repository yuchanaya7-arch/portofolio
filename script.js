/* ==========================================================
   GANTI FOTO DI SINI SAJA.
   Taruh file foto di folder  lalu isi path-nya di bawah.
   (PNG transparan / cutout paling bagus untuk hero, hello, about, cv)
   ========================================================== */
const PHOTOS = {
  hero: "foto-almet.png",            // banner kanan atas
  hello: "foto-almet.png",           // bagian "Hello and Halo!" di Home
  about: "foto-almet.png",           // halaman About
  cv: "foto-almet.png",              // foto bulat di halaman Resume
  collage1: "pkl-desk.jpg",          // 3 foto kolase di Home
  collage2: "proj-dispenduk.jpg",
  collage3: "proj-klinik.jpg",
  proj1: "proj-dispenduk.jpg",       // halaman Projects
  proj2: "proj-hello-api.jpg",
  proj3: "proj-klinik.jpg",
  skillsPhoto: "coding-klinik.jpg",  // halaman Skills
};

/* ==========================================================
   KONTAK (tampil di Resume & Contact)
   ========================================================== */
const CONTACT = {
  email:    { text: "yuchanaya7@gmail.com", href: "mailto:yuchanaya7@gmail.com" },
  whatsapp: { text: "0857-4548-5827",       href: "https://wa.me/6285745485827" },
};

document.querySelectorAll("img[data-photo]").forEach((img) => {
  img.src = PHOTOS[img.dataset.photo] || "";
});

document.querySelectorAll("[data-contact]").forEach((a) => {
  const c = CONTACT[a.dataset.contact];
  if (c) { a.textContent = c.text; a.href = c.href; }
});

/* ---------- Navigasi antar halaman (hash based) ---------- */
const links = document.querySelectorAll("#nav a");
const pages = document.querySelectorAll(".page");

function show(id) {
  const target = document.getElementById(id) ? id : "home";
  pages.forEach((p) => p.classList.toggle("active", p.id === target));
  links.forEach((a) => a.classList.toggle("active", a.dataset.page === target));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("hashchange", () => show(location.hash.slice(1)));
show(location.hash.slice(1) || "home");

/* ---------- Form kontak: membuka aplikasi email dengan pesan terisi ---------- */
const form = document.getElementById("contactForm");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const d = new FormData(form);
  const subject = "Pesan dari portofolio - " + d.get("name");
  const body = d.get("message") + "\n\n" + d.get("name") + " (" + d.get("email") + ")";
  window.location.href =
    "mailto:" + CONTACT.email.text + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  form.querySelector(".form__ok").hidden = false;
  form.reset();
});
