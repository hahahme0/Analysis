// إظهار الكروت بشكل تدريجي
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("visible");
      }, index * 300);
    });
    const vision = document.querySelector(".vision-section");
    setTimeout(() => {
      vision.classList.add("visible");
    }, cards.length * 300 + 500);
  });
