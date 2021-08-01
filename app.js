const container = document.querySelector(".container");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const nat_flow = document.querySelector(".nat-flow");
const float = document.querySelector(".float");
const float_clear = document.querySelector(".float-clear");
const text = document.querySelector(".text");

function naturalFlow() {
  first.classList.add("remove-float");
  second.classList.add("remove-float");
  text.innerText =
    "This is natural flow. All block elements are stacked one by one in natural order of HTML. All elements are positioned as static.";
}

nat_flow.addEventListener("click", function () {
  naturalFlow();
});

float.addEventListener("click", function () {
  container.classList.remove("clearfix");
  first.classList.remove("remove-float");
  second.classList.remove("remove-float");
  text.innerText =
    "When applying folat propery to left or right, applied elements are taken out from normal flow";
});

float_clear.addEventListener("click", function () {
  container.classList.add("clearfix");
});

naturalFlow();
