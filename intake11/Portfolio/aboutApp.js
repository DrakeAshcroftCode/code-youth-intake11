// Flag to determine the state of the floppy (inserted or not)
let isInserted = false;

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const floppy = document.querySelector(".floppy");
    const confirmationMessage = document.querySelector(".confirmation-message");

    // Only insert the floppy if it's not already inserted
    if (!isInserted) {
        floppy.style.transform = "translateY(110px)"; 
        setTimeout(() => {
            confirmationMessage.style.display = "block";
        }, 600);
        isInserted = true;
    } else {
        confirmationMessage.textContent = "Floppy is already inserted!";
    }
});

// Eject button functionality
document.getElementById("ejectButton").addEventListener("click", function() {
    const floppy = document.querySelector(".floppy");
    const confirmationMessage = document.querySelector(".confirmation-message");

    if (isInserted) {
        floppy.style.transform = "translateY(0)";
        confirmationMessage.style.display = "none";
        document.getElementById("contactForm").reset();
        isInserted = false;
    } else {
        confirmationMessage.textContent = "Floppy is already ejected!";
    }
});
