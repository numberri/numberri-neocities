function meow() {
    const nya=["nya :3", "meow!", "mrow", "meow meow meow meow meow",
    ":3", "mroww!", "meow", "purrrr...", ":3c", ">:3", "nyaa", "mew"];

    const randomIndex = Math.floor(Math.random() * nya.length);
    const theChosenMeow = nya[randomIndex];

    alert(theChosenMeow);
}

document.getElementById("meow-button")
    .addEventListener("click", meow);