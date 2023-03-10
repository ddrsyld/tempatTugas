// random quote
const quoteApiUrl = "https://api.quotable.io/random?minLength=80&maxLength=100";
const quoteSection = document.getElementById("quote");
const userInput = document.getElementById("quote-input");
let quote = "";
let time = 60;
let timer = "";
let mistakes = 0;

// display random quotes
const renderNewQuote = async () => {
    // Fecth contents from url
    const response = await fetch(quoteApiUrl);

    // Store response
    let data = await response.json();

    // Access quote
    quote = data.content;

    // Array of characters in the quote
    let arr = quote.split("").map(value => {
        // wrap the characters in span tag
        return "<span class='quote-chars'>"+ value +"</span>";
    });
    // join array for displaying
    quoteSection.innerHTML += arr.join("");
};

// Logic for comparing input words with quote
userInput.addEventListener("input", () => {
    let quoteChars = document.querySelectorAll(".quote-chars");
    // Create an array from recdived span tags
    quoteChars = Array.from(quoteChars);

    // array of user input characters
    let userInputChars = userInput.value.split("");

    // loop through each charakter in quote
    quoteChars.forEach((char, index) => {
        if(char.innerText == userInputChars[index]){
            char.classList.add("success");
        }else if(userInputChars[index] == null){
            // remove class if any
            if(char.classList.contains("success")){
                char.classList.remove("success");
            }else{
                char.classList.remove("fail");
            }
        }
        // if user enter wrong character
        else{
            if(!char.classList.contains("fail")){
                mistakes += 1;
                char.classList.add("fail");
            }
            document.getElementById("mistakes").innerText = mistakes;
        }
        let check = quoteChars.every(element=>{
            return element.classList.contains("success");
        });
        if (check){
            displayResult();
        }
    });
});

// set timer
const timeReduce = () =>{
    time = 60;
    timer = setInterval(updateTimer, 1000);
};

// Update timer on screen
function updateTimer(){
    if(time == 0){
        displayResult();
    }else {
        document.getElementById("timer").innerText = --time + "s";
    }
}

// end test
const displayResult = () => {
    document.querySelector(".result").style.display = "block";
    clearInterval(timer);
    document.getElementById("stop-test").style.display = "none";
    userInput.disabled = true;
    let timeTaken = 1;
    if(time != 0){
        timeTaken = (60 - time) / 100;
    }
    document.getElementById("wpm").innerText = (userInput.value.length / 5 / timeTaken).toFixed(2) + "wpm";
    document.getElementById("accuracy").innerText = Math.round(((userInput.value.length - mistakes) / userInput.value.length) * 100) + "%";
};

// Start Test
const startTest = () => {
    mistakes = 0;
    timer = "";
    userInput.disabled = false;
    timeReduce();
    document.getElementById("start-test").style.display = "none";
    document.getElementById("stop-test").style.display = "block";
    userInput.focus();
};

window.onload = () => {
    userInput.value = "";
    document.getElementById("start-test").style.display = "block";
    document.getElementById("stop-test").style.display = "none";
    userInput.disabled = true;
    renderNewQuote();
}
