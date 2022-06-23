let toggler = document.querySelector("header .toggler");
let nav = document.querySelector("header nav ul");
let slider = document.querySelector(".hero-area .slider .slides");
let slidesCount = slider.childElementCount;
let prevButton = document.querySelector(".hero-area .prev");
let nextButton = document.querySelector(".hero-area .next");
let curentButton = document.querySelector(".hero-area .slider .curent");
var curentSlide = 0;
let _slider = document.querySelector(".client .slides");
let _slidesCount = _slider.childElementCount;
let _prevButton = document.querySelector(".client .prev-button");
let _nextButton = document.querySelector(".client .next-button");
var _curentSlide = 0;

toggler.addEventListener("click", () => {
  if (nav.parentElement.style.maxHeight) nav.parentElement.style.maxHeight = "";
  else nav.parentElement.style.maxHeight = nav.clientHeight + "px";
});

slider.style.width = `calc(100vw * ${slidesCount})`;
_slider.style.width = `calc(100vw * ${_slidesCount})`;

function resetCurent() {
  curentButton.innerHTML = "0" + (curentSlide + 1);
}

function move(dir) {
  if (dir == "next") {
    dir = {
      n: 1,
      lastCurent: slidesCount - 1,
      transform: "translateX(0)",
      afterLast: 0,
    };
  } else {
    dir = {
      n: -1,
      lastCurent: 0,
      transform: `translateX(${(slidesCount - 1) * -100}vw)`,
      afterLast: slidesCount - 1,
    };
  }
  if (curentSlide == dir.lastCurent) {
    slider.style.transform = dir.transform;
    curentSlide = dir.afterLast;
    resetCurent();
    return;
  }
  curentSlide = curentSlide + dir.n;
  let translateValue = curentSlide * -100 + "vw";
  slider.style.transform = `translateX(${translateValue})`;
  resetCurent();
}

function _move(dir) {
  if (dir == "next") {
    dir = {
      n: 1,
      lastCurent: _slidesCount - 1,
      transform: "translateX(0)",
      afterLast: 0,
    };
  } else {
    dir = {
      n: -1,
      lastCurent: 0,
      transform: `translateX(${(_slidesCount - 1) * -100}vw)`,
      afterLast: _slidesCount - 1,
    };
  }
  if (_curentSlide == dir.lastCurent) {
    _slider.style.transform = dir.transform;
    _curentSlide = dir.afterLast;
    return;
  }
  _curentSlide = _curentSlide + dir.n;
  let translateValue = _curentSlide * -100 + "vw";
  _slider.style.transform = `translateX(${translateValue})`;
}

prevButton.addEventListener("click", move.bind(null, "prev"));
nextButton.addEventListener("click", move.bind(null, "next"));

_prevButton.addEventListener("click", _move.bind(null, "prev"));
_nextButton.addEventListener("click", _move.bind(null, "next"));

setInterval(() => {
  move("next");
  _move("next");
}, 5000);
