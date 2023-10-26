const submitBtn = document.querySelector("#submit-btn");
const displayMsg = document.querySelector("#display-msg");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  displayMsg.textContent = `Thank you for the feedback`;
  console.log(displayMsg);
  displayMsg.className = " green darken-2 ";
});
