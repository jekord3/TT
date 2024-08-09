const summaries = document.querySelectorAll("summary");

summaries.forEach((summary) => {
  summary.addEventListener("click", closeOpenedDetails);
});

function closeOpenedDetails() {
  summaries.forEach((summary) => {
    let detail = summary.parentNode;
    if (detail != this.parentNode) {
      detail.removeAttribute("open");
    }
  });
}

let changeColor = document.querySelectorAll(".reply summary");

for (var i = 0; i < changeColor.length; i++) {
  changeColor[i].addEventListener("click", (e) => {
    let clickedChangeColor;
    if (e.target.classList.contains("fonts")) {
      clickedChangeColor = e.target.parentElement;
    } else {
      clickedChangeColor = e.target.parentElement.parentElement;
    }

    clickedChangeColor.classList.toggle("changeColor");
  });
}
