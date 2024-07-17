document.addEventListener('DOMContentLoaded', () => {
    const quizData = {
        easy: [
            {
                question: "Which of the following is the correct way to declare a JavaScript variable?",
                answer: "var myVariable;",
                options: ["var myVariable;", "variable myVariable;", "v myVariable;", "declare myVariable;"]
            },
            {
                question: "Which built-in method combines the text of two strings and returns a new string?",
                answer: "concat()",
                options: ["append()", "concat()", "attach()", "combine()"]
            },
            {
                question: "How can you add a comment in JavaScript?",
                answer: "// This is a comment",
                options: [" <?--This is a comment-->" ,  "# This is a comment", "// This is a comment", "* This is a comment *"]
            },
            {
                question: "Which of the following methods is used to find the length of a string in JavaScript?",
                answer: "length",
                options: ["lengthOf()", "size()", "len()", "length"]
            },
            {
                question: "What will the following code output: console.log(typeof 42);",
                answer: "number",
                options: ["string", "number", "boolean", "object"]
            }
        ],
        medium: [
            {
                question: "Which of the following is a valid way to create an array in JavaScript?",
                answer: "var myArray = [];",
                options: ["var myArray = {};", "var myArray = [];", "var myArray = ();", "var myArray = <>;"]
            },
            {
                question: "How do you write a conditional statement in JavaScript for executing some code if 'i' is equal to 5?",
                answer: "if (i == 5)",
                options: ["if i = 5", "if i == 5 then", "if (i == 5)", "if (i = 5)"]
            },
            {
                question: "Which of the following is used to declare a constant in JavaScript?",
                answer: "const",
                options: ["var", "let", "constant", "const"]
            },
            {
                question: "What is the correct way to create a function in JavaScript?",
                answer: "function myFunction()",
                options: ["function myFunction[]", "function:myFunction()", "function myFunction()", "function = myFunction()"]
            },
            {
                question: "Which of the following methods adds a new element to the end of an array?",
                answer: "push()",
                options: ["push()", "pop()", "shift()", "unshift()"]
            }
        ],
        hard: [
            {
                question: "Which of the following methods removes the last element from an array?",
                answer: "pop()",
                options: ["pop()", "push()", "shift()", "unshift()"]
            },
            {
                question: "How do you declare a JavaScript object?",
                answer: "var obj = {};",
                options: ["var obj = [];", "var obj = ();", "var obj = {};", "var obj = <>;"]
            },
            {
                question: "What is the output of: console.log(1 + '1');",
                answer: "11",
                options: ["2", "11", "NaN", "Error"]
            },
            {
                question: "Which event occurs when the user clicks on an HTML element?",
                answer: "onclick",
                options: ["onchange", "onclick", "onmouseover", "onmouseclick"]
            },
            {
                question: "How do you create a new element in the DOM?",
                answer: "document.createElement()",
                options: ["document.create()", "document.newElement()", "document.createElement()", "document.appendChild()"]
            }
        ]
    };
    localStorage.setItem('quizData', JSON.stringify(quizData));
    // console.log("Data stored successfully in local storage");
});
