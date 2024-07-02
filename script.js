document.addEventListener("DOMContentLoaded", function() {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const container = document.querySelector(".container");
    const newContent = document.querySelector(".new-content");

    yesButton.addEventListener("click", function() {
        // Hide all content in the container
        container.innerHTML = '';
        // Show only the new content
        container.appendChild(newContent);
        newContent.style.display = 'flex';
    });

    noButton.addEventListener("mouseover", function() {
        const offsetX = Math.random() * window.innerWidth * 0.8;
        const offsetY = Math.random() * window.innerHeight * 0.8;

        noButton.style.left = `${offsetX}px`;
        noButton.style.top = `${offsetY}px`;
    });
});