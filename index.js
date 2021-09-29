const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-btn");
const errorMessage = document.querySelector("#error-message");
const notes = document.querySelectorAll(".no-of-notes");

// Putting all the notes in an Array
const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

// Hiding the p tag
function hideMessage() {
  errorMessage.style.display = "none";
}
//message Function
const showMessage = (message) => {
  errorMessage.style.display = "block";
  errorMessage.innerText = message;
};

//Change calculation function
function calculateChange(amount) {
  for (let i = 0; i < availableNotes.length; i++) {
    // no of notes needed for the denomination
    const numberOfNotes = Math.trunc(amount / availableNotes[i]);

    // amount left after calculating the number of notes neeeded
    amount = amount % availableNotes[i];

    // updating the no og notes in the table for the current amount
    notes[i].innerText = numberOfNotes;
  }
}

function validateBillAmount() {
  hideMessage(); // Not showing any message
  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      const amountToBeReturned = cashGiven.value - billAmount.value;

      calculateChange(amountToBeReturned);
    } else {
      showMessage("The cash provided is not enough!");
    }
  } else {
    showMessage("Invalid Bill Amount");
  }
}
checkButton.addEventListener("click", validateBillAmount);
