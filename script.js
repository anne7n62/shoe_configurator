document.addEventListener("DOMContentLoaded", start);

let elementToPaint;

async function start() {
  let response = await fetch("shoe.svg");
  let mySvgData = await response.text();
  document.querySelector("#shoebox").innerHTML = mySvgData;
  startManipulatingTheSvg();
}

function startManipulatingTheSvg() {
  console.log("manipulating");
  document.querySelectorAll(".colorize").forEach((cap) => {
    cap.addEventListener("click", the_click);
    cap.addEventListener("mouseover", the_mouseover);
    cap.addEventListener("mouseout", the_mouseout);
  });

  document.querySelectorAll(".color_btn").forEach((btn) => {
    btn.addEventListener("click", color_click);
  });
}

function the_click() {
  elementToPaint = this;
  this.style.fill = "grey";
}

function the_mouseover() {
  console.log(this);

  this.style.stroke = "blue";
}

function the_mouseout() {
  console.log(this);

  this.style.stroke = "none";
}

function color_click() {
  console.log("KLIk", this.getAttribute("fill"));
  if (elementToPaint != undefined) {
    elementToPaint.style.fill = this.getAttribute("fill");
  }
}
