let terminal;
let content;

function on_load() {
    terminal = document.getElementById("Terminal")
    content = document.getElementById("Content")
    terminal.getElementsByTagName("form")[0].onsubmit = function () {
        command_handler(terminal.getElementsByTagName("input")[0].value)
        terminal.getElementsByTagName("input")[0].value = ""
        return false;
    };
}

projects = {
    "This portfolio": "https://saurabhkurve.github.io/portfolio/",
    "Chat Room Using Python.<br>For conversation between multiple clients ": "https://github.com/saurabhkurve/Simple-Chat-Room-in-Python",
    "Music Store Data Analysis<br>Using PostgreSQL": "https://github.com/saurabhkurve/Music-Store-Data-Analysis",
    "Vrinda Store Data Analysis.<br>Using Microsoft Excel": "https://github.com/saurabhkurve/Vrinda-Store-Data-Analysis"
}

links = {
    "Linkedln": "https://www.linkedin.com/in/saurabhkurve/",
    "Github": "https://github.com/saurabhkurve",
    // "Email": "saurabhkurve100@gmail.com"
}

function command_handler(command)
{
    content.innerHTML += "<br>$ " + command + "<br>"
    switch (command.toLowerCase()){
        case "help":
            help(content)
            break
        case "clear":
            clear(content)
            break
        case "links": 
            for (let e in links) {
                content.innerHTML += `<a href="${links[e]}">${e}</a><br>`
            }
            break
        case "projects":
            for (let e in projects) {
                content.innerHTML += `<a href="${projects[e]}">${e}</a><br>`
            }
            break
        default:
            content.innerHTML += "Error: Unknown command. try help<br>"
    }
    terminal.scroll(0, terminal.scrollHeight);
}

function clear(console)
{
    console.innerHTML = "";
}

function help(console)
{
    console.innerHTML += "<br>List of commands<br><br>Help - Prints this message<br>Projects - list out my projects<br>Links - Links to contact me or see things I have done<br>Clear - clear the screen<br>"
}

function Hide() {
    if (!terminal.classList.contains("hidden")) {
        terminal.className += " hidden"
    } else {
        terminal.classList.remove("hidden")
    }
}
