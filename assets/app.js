// Put your Fiverr gig or profile link here. Every "Order on Fiverr" button uses it.
const FIVERR_URL = "https://www.fiverr.com/s/jyeWxGv";

const TECHS = [
  { id: "html-css", label: "HTML + CSS", src: null,
    about: "Hand-coded tables with inline styles. Paste it into any email platform as it is." },
  { id: "tailwind", label: "Tailwind", src: "html",
    about: "Tailwind classes while building, turned into plain inline HTML for the inbox." },
  { id: "maizzle", label: "Maizzle", src: "vue",
    about: "Components plus Tailwind, for teams that keep many emails in one codebase." },
  { id: "mjml", label: "MJML", src: "mjml",
    about: "Short, readable markup that compiles into Outlook-safe tables. Easy to edit later." },
  { id: "bootstrap-email", label: "Bootstrap", src: "html",
    about: "The Bootstrap classes you already know, compiled into email-safe HTML." },
];

const $ = (id) => document.getElementById(id);
const state = { folder: "All", tech: "html-css", view: "desktop", id: null };
const mobile = matchMedia("(max-width: 899px)");

document.querySelectorAll("[data-fiverr]").forEach((a) => { a.href = FIVERR_URL; a.target = "_blank"; a.rel = "noopener"; });

const fileFor = (id, tech) => `emails/${tech}/${id}.html`;
function sourceFor(id, tech) {
  const t = TECHS.find((x) => x.id === tech);
  return t.src ? `source/${tech}/${id}.${t.src}` : fileFor(id, tech);
}
function pressed(group, value, attr) {
  group.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset[attr] === value)));
}

// Folders
const counts = { All: DESIGNS.length };
DESIGNS.forEach((d) => { counts[d.cat] = (counts[d.cat] || 0) + 1; });
$("folders").innerHTML = ["All", ...CATEGORIES].map((c) =>
  `<button type="button" data-folder="${c}" aria-pressed="${c === "All"}">${c}<span>${counts[c]}</span></button>`).join("");
$("folders").addEventListener("click", (e) => {
  const b = e.target.closest("button"); if (!b) return;
  state.folder = b.dataset.folder; pressed($("folders"), state.folder, "folder"); renderList();
});

// Message list
function renderList() {
  const items = DESIGNS.filter((d) => state.folder === "All" || d.cat === state.folder);
  $("count").textContent = `${items.length} emails`;
  $("list").innerHTML = items.map((d) => `
    <li><button type="button" data-id="${d.id}" aria-current="${d.id === state.id}">
      <span class="avatar" style="background:${d.color}">${d.from[0]}</span>
      <span class="msg">
        <span class="row"><b>${d.from}</b><em>${d.cat}</em></span>
        <span class="subj">${d.subject}</span>
        <span class="pre">${d.pre}</span>
      </span>
    </button></li>`).join("");
}
$("list").addEventListener("click", (e) => {
  const b = e.target.closest("button[data-id]"); if (b) open(b.dataset.id, true);
});

// Reader
$("techs").innerHTML = TECHS.map((t) => `<button type="button" data-tech="${t.id}" aria-pressed="${t.id === state.tech}">${t.label}</button>`).join("");
$("techs").addEventListener("click", (e) => {
  const b = e.target.closest("button"); if (b) setTech(b.dataset.tech);
});
document.querySelector('[aria-label="Screen size"]').addEventListener("click", (e) => {
  const b = e.target.closest("button"); if (!b) return;
  state.view = b.dataset.view; pressed(b.parentElement, state.view, "view");
  $("stage").classList.toggle("phone", state.view === "phone");
});

function setTech(tech) {
  state.tech = tech; pressed($("techs"), tech, "tech");
  if (state.id) load();
}
function load() {
  const url = fileFor(state.id, state.tech);
  $("frame").src = url; $("open-tab").href = url;
}
function open(id, fromUser) {
  const d = DESIGNS.find((x) => x.id === id);
  state.id = id;
  $("r-subject").textContent = d.subject;
  $("r-from").textContent = `${d.from}, ${d.cat} email`;
  $("r-avatar").textContent = d.from[0];
  $("r-avatar").style.background = d.color;
  document.querySelectorAll("#list button[data-id]").forEach((b) => b.setAttribute("aria-current", String(b.dataset.id === id)));
  load();
  if (fromUser && mobile.matches) { document.body.classList.add("reading"); $("back").focus(); }
}
$("back").addEventListener("click", () => document.body.classList.remove("reading"));

// Code viewer
$("code-btn").addEventListener("click", async () => {
  const path = sourceFor(state.id, state.tech);
  const tech = TECHS.find((t) => t.id === state.tech).label;
  $("code-title").textContent = `${tech} source: ${path.split("/").pop()}`;
  $("code-box").textContent = "Loading...";
  $("code-dialog").showModal();
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(res.status);
    $("code-box").textContent = await res.text();
  } catch {
    // fetch() is blocked when the page is opened as a file, so point to the file instead.
    $("code-box").textContent = `The code can't load here. Open this file instead: ${path}`;
  }
});
$("close-btn").addEventListener("click", () => $("code-dialog").close());
$("copy-btn").addEventListener("click", async () => {
  try { await navigator.clipboard.writeText($("code-box").textContent); $("copy-btn").textContent = "Copied"; }
  catch { $("copy-btn").textContent = "Select and copy"; }
  setTimeout(() => { $("copy-btn").textContent = "Copy"; }, 1500);
});

// Technologies section: each one can open the inbox in that format
$("tech-list").innerHTML = TECHS.map((t) => `
  <li><h3>${t.label}</h3><p>${t.about}</p>
  <button type="button" class="link-btn" data-show="${t.id}">See the emails in ${t.label}</button></li>`).join("");
$("tech-list").addEventListener("click", (e) => {
  const b = e.target.closest("button[data-show]"); if (!b) return;
  setTech(b.dataset.show);
  $("inbox").scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
});

renderList();
open(DESIGNS[0].id, false);
