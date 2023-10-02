// intersection Observer Animate on Scroll
const sections = document.querySelectorAll(".section1");
const options = {
  root: null,
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("section--animation");
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});

// slider with breadcrumbs
const sliderBtn = document.querySelectorAll(".slider__button");
const sliderCard = document.querySelectorAll(".slider__cards");
let currentSlide = 0;
let defaultClick = document.querySelector(".default");

sliderBtn.forEach((sliderBt, index) => {
  sliderBt.addEventListener("click", () => {
    for (let i = 0; i < sliderCard.length; i++) {
      sliderCard[i].style.opacity = "0";
      sliderBtn[i].classList.remove("active");
    }
    sliderCard[index].style.opacity = "1";
    sliderBtn[index].classList.add("active");
    currentSlide = index;
  });
});
defaultClick.click();

const btnNext = document.querySelector(".slider__button--next");
const btnPrev = document.querySelector(".slider__button--prev");

btnNext.addEventListener("click", () => {
  if (currentSlide === sliderCard.length - 1) {
    currentSlide = 0;
    sliderBtn[currentSlide].click();
  } else {
    sliderBtn[currentSlide + 1].click();
  }
});

btnPrev.addEventListener("click", () => {
  if (currentSlide === 0) {
    currentSlide = sliderCard.length - 1;
    sliderBtn[currentSlide].click();
  } else {
    sliderBtn[currentSlide - 1].click();
  }
});

// touch control slider

let sliderHeader = document.querySelector(".header");

let initialX, initalY, initialTime;

sliderHeader.addEventListener("touchstart", (e) => {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
  initialTime = new Date();
});

const touch = (targetArea, buttonForward, buttonBackward) => {
  targetArea.addEventListener("touchend", (e) => {
    let deltaX = e.changedTouches[0].clientX - initialX;
    let deltaY = e.changedTouches[0].clientY - initialY;
    let deltaTime = new Date() - initialTime;

    if (deltaX > 40 && deltaY < 100 && deltaTime <= 300) {
      buttonBackward.click();
    }
    if (deltaX <= -40 && deltaY < 100 && deltaTime <= 300) {
      buttonForward.click();
    }
  });
};

touch(sliderHeader, btnNext, btnPrev);

// Wedding Party Tabs
const tabBtn = document.querySelectorAll(".wedparty__tab--btn");
const tabCards = document.querySelectorAll(".wedparty__body--card");
const dOn = document.querySelector(".defaultOn");
let currentTab = 0;

tabBtn.forEach(function (tabBt, index) {
  tabBt.addEventListener("click", () => {
    for (let i = 0; i < tabCards.length; i++) {
      tabCards[i].style.transform = "translate(0, 1210px)";
      tabBtn[i].style.color = "black";
    }
    tabCards[index].style.transform = "translate(0, 0%)";
    tabBt.style.color = "pink";
    currentTab = index;
  });
});
dOn.click();

// touch control wedparty
let partyHeader = document.querySelector("#wedparty");

const wedNext = document.querySelector(".wed__button--next");
const wedPrev = document.querySelector(".wed__button--prev");

wedNext.addEventListener("click", () => {
  if (currentTab === tabCards.length - 1) {
    currentTab = 0;
    tabBtn[currentTab].click();
  } else {
    tabBtn[currentTab + 1].click();
  }
});

wedPrev.addEventListener("click", () => {
  if (currentTab === 0) {
    currentTab = tabCards.length - 1;
    tabBtn[currentTab].click();
  } else {
    tabBtn[currentTab - 1].click();
  }
});

partyHeader.addEventListener("touchstart", (e) => {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
  initialTime = new Date();
});

touch(partyHeader, wedNext, wedPrev);

// countdown
const deadline = new Date("January 05 2024");

function getValue(endTime) {
  const total = Date.parse(endTime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return {
    total,
    seconds,
    minutes,
    hours,
    days,
  };
}

function initializeClock(id, endtime) {
  const clock = document.querySelector(id);
  const secondSpan = clock.querySelector(".second");
  const minuteSpan = clock.querySelector(".minute");
  const hourSpan = clock.querySelector(".hour");
  const daySpan = clock.querySelector(".day");
  const timeInterval = setInterval(() => {
    const t = getValue(endtime);
    secondSpan.innerHTML = ("0" + t.seconds).slice(-2);
    minuteSpan.innerHTML = ("0" + t.minutes).slice(-2);
    hourSpan.innerHTML = ("0" + t.hours).slice(-2);
    daySpan.innerHTML = ("0" + t.days).slice(-3);
    if (t.total <= 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
}

initializeClock("#countdown", deadline);
