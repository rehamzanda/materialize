const submitBtn = document.querySelector("#submit-btn");
const displayMsg = document.querySelector("#display-msg");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  displayMsg.textContent = `Thank you for choosing us!`;
  displayMsg.className = "green darken-2 flow-text";
  displayMsg.style.display = "block"; // Ensure the element is visible
});

// Set 3 seconds for the message to disappear from the screen:
setTimeout(() => {
  displayMsg.style.display = "none"; // Hide the element after 3 seconds
}, 3000);
