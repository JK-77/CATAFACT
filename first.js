let URL = "https://catfact.ninja/fact?max_length=140";
const text = document.querySelector("#fax");
const btn = document.querySelector("#btn");

const getFacts = async () => {
    try {
        let response = await fetch(URL);
        let data = await response.json();
        text.innerText = `${data.fact}`;
    } catch (error) {
        console.error("Error fetching cat facts:", error);
    }
}; 

btn.addEventListener("click", getFacts);

document.addEventListener("DOMContentLoaded", function() {
    var meowSound = document.getElementById("meowSound");

    btn.addEventListener("click", function() {
        meowSound.play();
    });
});
