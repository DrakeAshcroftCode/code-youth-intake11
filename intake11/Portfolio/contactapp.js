document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Floppy animation into the drive
    const floppy = document.querySelector(".floppy");
    floppy.style.transform = "translateY(110px)"; // this value will push the floppy inside the disk drive

    setTimeout(() => {
        document.querySelector(".confirmation-message").style.display = "block";
    }, 600);  // Adjusted time to ensure animation completes

    // Reset form after a while (for this demo, after 2.5 seconds)
    setTimeout(() => {
        floppy.style.transform = "translateY(0)";
        document.querySelector(".confirmation-message").style.display = "none";
        event.target.reset();
    }, 2500);
});
