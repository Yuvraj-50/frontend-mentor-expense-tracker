// let data;
// fetch("data.json")
//   .then((res) => res.json())
//   .then((data) => {
//     createAndRenderBars(data);
//   });

// let highestAmount = 0;
// const chart = document.querySelector(".chart");

// function createAndRenderBars(data) {
//   getHighestValue(data);
//   data.forEach((dataEl) => {
//     const html = `
//     <div class="bars">
//         <div class="bar"></div>
//         <p class="day" data-height = "${dataEl.amount}">${dataEl.day}</p>
//     </div>
//     `;
//     chart.insertAdjacentHTML("beforeend", html);
//   });
// }

// function getHighestValue(data) {
//   console.log(data);
//   data.forEach((dataEl) => {
//     if (dataEl.amount > highestAmount) highestAmount = dataEl.amount;
//     return highestAmount;
//   });
// }

const bars = document.querySelectorAll(".bar");

const amountHover = document.createElement("div");
amountHover.className = "amount-hover";

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < bars.length; i++) {
      bars[i].addEventListener("mouseover", function () {
        amountHover.innerHTML = `$${data[i].amount}`;
        bars[i].appendChild(amountHover);
      });

      bars[i].addEventListener("mouseout", function () {
        bars[i].removeChild(amountHover);
      });
    }
  });
