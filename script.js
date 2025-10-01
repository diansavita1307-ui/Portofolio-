// Scroll-to-Top Button
const btn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
btn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Alert saat klik LinkedIn
const linkedInBtn = document.getElementById("linkedinBtn");
linkedInBtn.onclick = function () {
  alert("Menghubungkan ke LinkedIn saya...");
};
