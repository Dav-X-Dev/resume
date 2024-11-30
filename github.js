function goToGit() {
    window.location.href = "https://dav-x-dev.github.io";
}

document.addEventListener("DOMContentLoaded", () => {
    const goToGit = document.getElementById("github");
    linkedInText.addEventListener("click", goToGit);
});