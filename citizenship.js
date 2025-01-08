let slogan = document.querySelector(".slogan");


let question1 = document.createElement("div");
slogan.appendChild(question1);

question1.innerHTML = `
    <h1 id="q-1-h1">Who was the first President of the USA?</h1>
    <button id="q-1-1" class="q-1-but">Lincoln</button>
    <button id="q-1-2" class="q-1-but">Washington</button>
    <button id="q-1-3" class="q-1-but">Jefferson</button>
    <button id="q-1-4" class="q-1-but">Adams</button><br>
    <button id="q-1-next">Next</button>
`;

let q1Class = document.querySelectorAll(".q-1-but");
let correctAnswerSelected1 = false; 

q1Class.forEach((q1Button) => {
    q1Button.addEventListener("click", () => {
        if (q1Button.id === "q-1-2") {
            slogan.style.backgroundColor = "rgb(37, 203, 162)";
            correctAnswerSelected1 = true;
        } else {
            slogan.style.backgroundColor = "#eb4a4a";
            setTimeout(() => {
                slogan.style.backgroundColor = "rgb(43, 135, 209)";
            }, 3000);
        }
    });
});


let nextButton1 = document.querySelector("#q-1-next");

nextButton1.addEventListener("click", () => {
    if (correctAnswerSelected1) {
        question1.style.display = "none";
        slogan.style.backgroundColor = "rgb(43, 135, 209)";

        
        let question2 = document.createElement("div");
        slogan.appendChild(question2);

        question2.innerHTML = `
            <h1 id="q-2-h1">What is the supreme law of France?</h1>
            <button id="q-2-1" class="q-2-but">Constitution</button>
            <button id="q-2-2" class="q-2-but">Dictation</button>
            <button id="q-2-3" class="q-2-but">Bill of Rights</button>
            <button id="q-2-4" class="q-2-but">Royal</button><br>
            <button id="q-2-next">Next</button>
        `;

        let q2Class = document.querySelectorAll(".q-2-but");
        let correctAnswerSelected2 = false;

        q2Class.forEach((q2Button) => {
            q2Button.addEventListener("click", () => {
                if (q2Button.id === "q-2-1") {
                    slogan.style.backgroundColor = "rgb(37, 203, 162)";
                    correctAnswerSelected2 = true;
                } else {
                    slogan.style.backgroundColor = "#eb4a4a";
                    setTimeout(() => {
                        slogan.style.backgroundColor = "rgb(43, 135, 209)";
                    }, 3000);
                }
            });
        });

        let nextButton2 = document.querySelector("#q-2-next");

        nextButton2.addEventListener("click", () => {
            if (correctAnswerSelected2) {
                question2.style.display = "none";
                slogan.style.backgroundColor = "rgb(43, 135, 209)";

                // mesame
                let question3 = document.createElement("div");
                slogan.appendChild(question3);

                question3.innerHTML = `
                    <h1 id="q-3-h1">Which country is known for the Eiffel Tower?<h1>
                    <button id="q-3-1" class="q-3-but">England</button>
                    <button id="q-3-2" class="q-3-but">Georgia</button>
                    <button id="q-3-3" class="q-3-but">France</button>
                    <button id="q-3-4" class="q-3-but">Austria</button><br>
                    <button id="q-3-next">Finish Quiz</button>
                `;

                let q3Class = document.querySelectorAll(".q-3-but");
                let correctAnswerSelected3 = false;

                q3Class.forEach((q3Button) => {
                    q3Button.addEventListener("click", () => {
                        if (q3Button.id === "q-3-3") {
                            slogan.style.backgroundColor = "rgb(37, 203, 162)";
                            correctAnswerSelected3 = true;
                        } else {
                            slogan.style.backgroundColor = "#eb4a4a";
                            setTimeout(() => {
                                slogan.style.backgroundColor = "rgb(43, 135, 209)";
                            }, 3000);
                        }
                    });
                });

                let nextButton3 = document.querySelector("#q-3-next");

                nextButton3.addEventListener("click", () => {
                    if (correctAnswerSelected3) {
                        question3.style.display = "none";
                        slogan.style.backgroundColor = "rgb(43, 135, 209)";
                        alert("Quiz Completed!");
                        window.location.href = 'home.html'
                    } else {
                        alert("Get the question right first!");
                    }
                });
            } else {
                alert("Get the question right first!");
            }
        });
    } else {
        alert("Get the question right first!");
    }
});