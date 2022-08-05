const accordition = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < accordition.length; i++) {
  accordition[i].addEventListener("click", function () {
    this.classList.toggle("accordition-active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
