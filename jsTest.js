let barProgress = document.querySelector("#fill");
let quantityInput = document.querySelector("#quantity");
let goalInput = document.querySelector("#goal");
let percentageText = document.querySelector("#percentage");
let progressBar = document.querySelector("#bar");
let barPercentageText = document.querySelector("#barPercentageText");
let instructionsText = document.querySelector("#intructionsText");
let easterEgg = document.querySelector("#easterEgg");

let updateProgess = () => {
  let newGoal = goalInput.value;
  let newQuantity = quantityInput.value;
  let newWidth = (1/(newGoal/newQuantity)*100);

  console.log(newWidth);

  if(newWidth > 100) {
    barProgress.style.width = `100%`;
    percentageText.innerHTML = "Percentage higher than 100";
  } else if(newWidth < 0) {
    barProgress.style.width = `0%`;
    percentageText.innerHTML = "Percentage lower than 0";
  } else if(!newWidth) {
    barProgress.style.width = `0%`;
    percentageText.innerHTML = "Input error, maybe divison by zero?";
  } else {
    barProgress.style.width = `${newWidth}%`;
    percentageText.innerHTML = newWidth;
  }
  
}

document.querySelector("#quantity").addEventListener("change", updateProgess);
document.querySelector("#goal").addEventListener("change", updateProgess);

document.querySelector("#hideProgressBar").addEventListener("click", () => {
  progressBar.toggleAttribute("hidden");
});

document.querySelector("#hidePercentage").addEventListener("click", () => {
  barPercentageText.toggleAttribute("hidden");
});

document.querySelector("#hideInstructions").addEventListener("click", () => {
  instructionsText.toggleAttribute("hidden");
});

document.querySelector("#showEasterEgg").addEventListener("click", () => {
  easterEgg.toggleAttribute("hidden");
});