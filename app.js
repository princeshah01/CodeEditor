let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.querySelector("#dark_theme");

function enableDarkmode() {
    document.body.classList.add("toggledark");
    localStorage.setItem("darkmode", "active");
}

function disableDarkMode() {
    document.body.classList.remove("toggledark");
    localStorage.setItem("darkmode", "not");
}

if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode");
    darkmode !== "active" ? enableDarkmode() : disableDarkMode();
});

let output = document.querySelector("#output"); 
let Editor = document.querySelectorAll(".codeEditor textarea");

let Html = localStorage.getItem("html") || "";  
let css = localStorage.getItem("css") || "";
let js = localStorage.getItem("js") || "";

function updateOutput() {
    output.contentDocument.body.innerHTML = Html;
    
    let styleTag = output.contentDocument.createElement("style");
    styleTag.innerHTML = css;
    output.contentDocument.head.innerHTML = "";  
    output.contentDocument.head.appendChild(styleTag);

    output.contentWindow.eval(js);
}

Editor[0].value = Html; 
Editor[1].value = css; 
Editor[2].value = js;   
updateOutput();         

Editor.forEach((el, idx) => {
    el.addEventListener("keyup", () => {
        if (idx === 0) {
            Html = el.value;
            localStorage.setItem("html", Html);
        }
        if (idx === 1) {
            css = el.value;
            localStorage.setItem("css", css);
        }
        if (idx === 2) {
            js = el.value;
            localStorage.setItem("js", js);
        }
        
        updateOutput(); 
    });
});

const toggleButton = document.querySelector("#toggle-min");
const container = document.querySelector(".container");

toggleButton.addEventListener("click", () => {
    container.classList.toggle("expanded");
});
// const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
    if (toggleButton.classList.contains('done')) {
        toggleButton.classList.remove ("done") // Remove the id
    } else {
        toggleButton.classList.add  ('done'); // Add the id
    }
});
