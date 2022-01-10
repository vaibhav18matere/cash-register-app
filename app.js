const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const cashGivenDiv = document.querySelector(".cash-given-div");
const resultSectionDiv = document.querySelector(".result_section");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", validateBillAndCashAmount = () => {
    hideMessage();

    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
            resultSectionDiv.style.display = "flex";
        } else {
            showMessage(
                "Cash provided should be equal to the bill amount")
        }
    } else {
        showMessage("Invalid bill amount");
    }
});

const calculateChange = (amountToBeReturned) => {
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);

        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

const hideMessage = () => {
    message.style.display = "none";
}

const showMessage = (msg) => {
    message.style.display = "block";
    message.innerText = msg;
}

const showNextContainer = () => {
    cashGivenDiv.style.display = "block";
}

billAmount.addEventListener("change", showNextContainer)


