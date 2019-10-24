var div = $("#quiz");
var timer;
//setup foreal

$(document).on("click", "#begin", function () {
    game.begin();
});

var game = {
    //set up 
    right: 0,
    wrong: 0,
    timeLeft: 40,

    countdown: function () {
        game.timeLeft--;
        $("#timeLeft-number").html(game.timeLeft);
        if (game.timeLeft === 0) {
            console.log("TIME UP");
            game.finished();
        }
    },

    begin: function () {
        timer = setInterval(game.countdown, 1000);

        $("#div2").prepend(
            "<h2>You have <span id='timeLeft-number'>4O</span> seconds left!</h2>"
        );

        $("#begin").remove();

        for (var i = 0; i < questions.length; i++) {
            div.append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].response.length; j++) {
                div.append("<input type='radio' name='question-" + i +
                    "' value='" + questions[i].response[j] + "''>" + questions[i].response[j]);
            }
        }

        div.append("<button id='finished'>Finish</button>");
        div.append("<button id='answers'>answers</button>");
    },
    // answers: function () {
    //     div.append("<h2>answers</h2>");
    // },
    finished: function () {
        var inputs = div.children("input:checked");
        for (var i = 0; i < inputs.length; i++) {
            if ($(inputs[i]).val() === questions[i].answer) {
                game.right++;
            } else {
                game.wrong++;
            }
        }
        this.result();
    },

    result: function () {
        clearInterval(timer); $("#div2 h2").remove(); div.html("<h2>All finished!</h2>");
        div.append("<h3>you got  " + this.right + " correct</h3>");
        div.append("<h3>you got " + this.wrong + " wrong</h3>");
        if(this.right === 5){
            div.append("<h3>Perfect! You got them all correct.</h3>");
        }else if(this.wrong === 5){
            div.append("<h3>How did you get them all wrong ? you don't know 2+2 ?</h3>");
        }
    }
};
$(document).on("click", "#answers", function () {
    console.log('hello');
    for (var i = 0; i < questions.length; i++) {
        div.append("<h2>" + questions[i].question + " = " + questions[i].answer + "</h2>");
 
    }
});

$(document).on("click", "#finished", function () {
    game.finished();
});

// questions
var questions = [
    {
        question: "what is 2+2",
        response: ["4", "fore", "phor", "for"],
        answer: "4"
    },
    {
        question: "what is they + are",
        response: ["there", "theyre", "their"],
        answer: "theyre"
    },
    {
        question: "what is red + blue",
        response: ["orange", "pink", "purple"],
        answer: "purple"
    },
    {
        question: "what is house + car",
        response: ["garage", "living room", "back yard"],
        answer: "garage"
    },
    {
        question: "what is espresso + milk",
        response: ["americano", "tea", "latte"],
        answer: "latte"
    },
];




