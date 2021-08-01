const container = document.querySelector(".container");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const nat_flow = document.querySelector(".nat-flow");
const float_p = document.querySelector(".float-p");
const float_h2 = document.querySelector(".float-h2");
const clearSibling = document.querySelector(".clear-sibling");
const clearParent = document.querySelector(".clear-parent");
const text = document.querySelector(".text");
const heading = document.querySelector(".heading");
const afterElement = document.getElementsByClassName("aft-el");
const para = document.querySelector(".paragraph");
const keyPoint = document.querySelector(".key-point");

function naturalFlow() {
  somelink = "https://developer.mozilla.org/en-US/docs/Web/CSS/position";
  const anchor_tag = `<a href="${somelink}">MDN DOC</a>`;
  first.classList.add("remove-float");
  second.classList.add("remove-float");
  para.classList.add("hidden");
  text.innerHTML = `This is natural flow. All block elements are stacked one by one in natural order of HTML. All elements are positioned as static. ${"<br>"} ${"<br>"}If you have doubt, please refer ${anchor_tag}.`;
  para.classList.add("remove-float");
}

nat_flow.addEventListener("click", function () {
  naturalFlow();
});

float_p.addEventListener("click", function () {
  somelink = "https://css-tricks.com/all-about-floats/";
  const anchor_tag = `<a href="${somelink}">CSS Tricks</a>`;
  container.classList.remove("clearfix");
  first.classList.remove("remove-float");
  second.classList.remove("remove-float");
  para.classList.remove("remove-float");
  para.classList.remove("hidden");
  text.innerHTML = `When applying folat propery to left or right for some elements which are taken out from normal flow. Still floated elements are remaining a part of the flow of the web page. In this case First Block and Second Blocks are floating left. Since p element is coming after floating element text are trying to wrap around the floating element. ${"<br>"}  ${"<br>"}If you have doubt, please refer ${anchor_tag}.`;
});

float_h2.addEventListener("click", function () {
  somelink = "https://www.youtube.com/watch?v=xara4Z1b18I";
  const anchor_tag = `<a href="${somelink}">Youtube</a>`;
  para.classList.add("hidden");
  para.classList.remove("remove-float");
  heading.classList.remove("remove-float");
  container.classList.remove("clearfix");
  text.innerHTML = `In this case h2 is floating around the floated elements of First Block and Second Block.After h2 Check Block is positioned. If you check in develper tool this page you can easily visualize what is going on.${"<br>"}  ${"<br>"}If you have still doubt, please refer ${anchor_tag}.`;
});

clearSibling.addEventListener("click", function () {
  for (let i = 0; i < afterElement.length; i++) {
    afterElement[i].classList.add("remove-float");
  }
  text.innerHTML = `If we don't want to float the adjecent element of floated elements then we can set clear property to clear: both; or same we can set to parent container by clearfix method. In this case we are fixing by clear the adjecent element. Means next sibling element of floated element`;
});

clearParent.addEventListener("click", function () {
  container.classList.add("clearfix");
  text.innerHTML = `If we don't want to float the adjecent element of floated elements then we can set clear property to clear: both; or same we can set to parent container by clearfix method. In this case we are fixing by clearfix method means selecting parent container then using after pseudo element. i.e,container::after{content:""; clear:both; display:block;}`;
});

keyPoint.addEventListener("click", function () {
  text.innerHTML = `1. We can create layouts by floating${"<br>"}2. Floating elements are taken out from natural flow. But, still remaining in web-page${"<br>"}3. Next element to the floated element is occupying the floated elements space${"<br>"}4. If next element is text element then it will wrap around the floated elements${"<br>"}5. If we don't want to wrap around the text or next element don't want to move the floated element's space then we can fix either clearing the float for adjacent sibling element or using clear fix method to parent container`;
});

naturalFlow();
