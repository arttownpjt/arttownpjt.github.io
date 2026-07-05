document.addEventListener("DOMContentLoaded", function () {
  var y = document.getElementById("copyright-year");
  if (y) y.textContent = new Date().getFullYear();
});
