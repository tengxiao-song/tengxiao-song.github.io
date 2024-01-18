var list = document.querySelectorAll(".drum");
for (var i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function () {
        makesound(this.textContent);
        buttonAnime(this.textContent);
    })
}
document.addEventListener("keydown", function (event) {
    makesound(event.key);
    buttonAnime(event.key);
})

function makesound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom2 = new Audio("sounds/tom-3.mp3");
            tom2.play();
            break;
        case "d":
            var tom2 = new Audio("sounds/tom-4.mp3");
            tom2.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/snare.mp3");
            tom2.play();
            break;
        case "k":
            var tom2 = new Audio("sounds/crash.mp3");
            tom2.play();
            break;
        case "l":
            var tom2 = new Audio("sounds/kick-bass.mp3");
            tom2.play();
            break;
        default:
            break;
    }
}

function buttonAnime(key) {
    var active = document.querySelector("." + key);
    active.classList.add("pressed");
    setTimeout(function () {
        active.classList.remove("pressed");
    }, 100);
}