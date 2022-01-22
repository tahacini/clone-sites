const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const width = p1.parentElement.offsetWidth;

marquee(p1, 0);
marquee(p2, width);

function marquee(element, num) {
  let elementWidth = element.offsetWidth;
  let parentWidth = element.parentElement.offsetWidth;
  let position = num;

  setInterval(() => {
    element.style.marginLeft = `${position--}px`;

    if (elementWidth === -position) {
      position = parentWidth;
    }
  }, 10);
}

// SLIDER

const slider = document.querySelector(".slider-inner");

let sliderGrabbed = false;

slider.addEventListener("mouseenter", () => {
  slider.style.cursor = "grab";
});

slider.addEventListener("mousedown", () => {
  sliderGrabbed = true;
  slider.style.cursor = "grabbing";
});

slider.addEventListener("mouseup", () => {
  sliderGrabbed = false;
  slider.style.cursor = "grab";
});

slider.addEventListener("mouseleave", () => {
  sliderGrabbed = false;
  slider.style.cursor = "grab";
});

slider.addEventListener("mousemove", (e) => {
  if (sliderGrabbed) {
    slider.parentElement.scrollLeft -= e.movementX;
  }
});
