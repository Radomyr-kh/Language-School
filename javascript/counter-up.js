let wasRun = false;

const startCounter = () => {
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const increment = target / 100;

    // start point = 0
    let x = 0;

    const updateCounter = () => {
      const count = x;
      if (count < target) {
        let result = count + increment;
        x = result; // (full) float result
        counter.innerText = Math.trunc(result); // show only integer part of result
        setTimeout(updateCounter, 60);
      } else {
        counter.innerText = target + "+";
      }
    };
    updateCounter();
  });
};

window.addEventListener("scroll", () => {
  if (!wasRun) {
    if (window.pageYOffset > 150) {
      startCounter();
      wasRun = true;
    }
  }
});
