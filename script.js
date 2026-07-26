function showLetter() {
    const letter = document.getElementById("letter");
    const button = document.querySelector("button");

    letter.style.display = "block";
    button.innerText = "Sorry Surendhar💌";
    button.disabled = true;
}