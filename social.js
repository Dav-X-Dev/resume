function goToLinked() {
    window.location.href = "https://www.linkedin.com/in/david-adeleye-262208197?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app";
}

document.addEventListener("DOMContentLoaded", () => {
    const linkedInText = document.getElementById("linkedin-text");
    linkedInText.addEventListener("click", goToLinkedIn);
});
