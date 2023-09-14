//Disappearing Nav Bar on scroll
let prevScrollpos = window.scrollY;
window.onscroll = () => {
  let currentScrollPos = window.scrollY;
  if (prevScrollpos < currentScrollPos && prevScrollpos > 50) {
    document.getElementById("navigation").style.transform =
      "translate(0,-250px)";
    document.getElementById("navigation").style.transition =
      "transform 0.7s ease-in";
  } else {
    document.getElementById("navigation").style.transform = "translate(0,0)";
    document.getElementById("navigation").style.transition = "transform 0.5s";
    document.querySelector(".nav").classList.add("pink--background");
  }
  prevScrollpos = currentScrollPos;
};

// close nav on pressing a button
const btn = document.querySelectorAll(".nav__link--btn");
btn.forEach((bt) => {
  bt.addEventListener("click", () => {
    const width = innerWidth;
    const check = document.querySelector("#checkbox__toggle");
    if (check.checked === true && width < 1200) {
      check.checked = false;
    }
  });
});
