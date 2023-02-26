const btn = document.querySelector(".switchMode");
const theme = document.querySelector("#theme");
btn.addEventListener("click", function() {
  if (theme.getAttribute("href") == "style.css") {
    theme.href = "style-dark.css";
  } else {
    theme.href = "style.css";
  }
});
