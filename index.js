let wrapper = document.querySelector(".wrapper");
let jokeParag = document.querySelector("#joke")
let category = document.querySelector("#category")
let btn = document.querySelector("#btn");

function getData() {
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,sexist,explicit&type=single")
        .then(response => response.json())
        .then(data => {
            jokeParag.textContent = `${data.joke}`;
            category.textContent = `Category: ${data.category}`
        });
        

}
btn.addEventListener("click",getData)







