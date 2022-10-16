const inquirer = require("inquirer")
const fs = require("fs")
const Manager = require("./lib/Manager")
// please import Engineer and Intern libraries

const generateHTML = require("./src/generateHTML")
const manageCard = require("./src/managerHtml")
//import engineer and intern cards same as manager card above

// you must create engineer and intern questions separately

const employeeArray = []
const managerQuestions = [
    {
        type: "input",
        message: "What is the manager's name?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is the manager's id?",
        name: "managerId"
    },
    {
        type: "input",
        message: "What is the manager's email?",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "What is the manager's Office number?",
        name: "managerOfficeNumber"
    },
]

const engineerQuestions = [
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "engineerName"
    },
    {
        type: "input",
        message: "What is the engineer's id?",
        name: "engineerId"
    },
    {
        type: "input",
        message: "What is the engineer's email?",
        name: "engineerEmail"
    },
    {
        type: "input",
        message: "What is the engineer's github?",
        name: "engineerrOfficeNumber"
    },
]

function init() {

    inquirer
        .prompt(managerQuestions)
        .then(response => {
            const manager = new Manager(response.managerName,
                response.managerId,
                response.managerEmail,
                response.managerOfficeNumber
            )

            employeeArray.push(manager)

            confirmNext()
        })
}

function confirmNext() {
    inquirer.prompt([{
        type: "confirm",
        message: "Do you want to add more employee?",
        name: "addMore"
    }])
        .then(response => {
            if (response.addMore === true) {
                addEmployee()
            }
            else {
                createHTML()
            }
        })
}
function addEmployee() {
    inquirer.prompt([{
        type: "list",
        message: "Do you add Engineer or Intern?",
        choices: ["Engineer", "Intern"],
        name: "selection"
    }])
        .then(response => {
            if (response.selection === "Engineer") {
                addEngineer()
            }
            else {
                addIntern()
            }
        })
}

function addEngineer() {
    //ask questions about engineer using inquirer
    inquirer.prompt(engineerQuestions)
        .then(response => {
            // create new instance engineer and add it to the employeeArray using push

            confirmNext()

        })
}

function addIntern() {
    //ask questions about intern using inquirer
    // create new instance intern and add it to the employeeArray using push

    confirmNext()
}

function createHTML() {
    console.log(employeeArray)

    let cards = ""

    for (let i = 0; i < employeeArray.length; i++) {
        if (employeeArray[i].getRole() === "Manager") {
            cards = cards + manageCard(employeeArray[i])
        }
        else if (employeeArray[i].getRole() === "Engineer") {
            //same as manager card but for Enineer card
        } else {
            //same as manager card but for  intern card
        }
    }
    fs.writeFileSync("./dist/team.html", generateHTML(cards))

}

init()