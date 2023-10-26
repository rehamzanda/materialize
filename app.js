const submitBtn = document.querySelector("#submit-btn");
const displayMsg = document.querySelector("#display-msg");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  displayMsg.textContent = `Thank you for chose us!`;
  console.log(displayMsg);
  displayMsg.className = " green darken-2 flow-text";

  //set 3 seconds to message dissapear from screen:
  setTimeout(() => {
    displayMsg.style.display = "none";
  }, 3000);
});
