/*
    variable für Uhr;
    getTime function;
    1s Timer;
*/
/* DOM ist das Document Object Model = mein HTML-Dokument */
const clockElem = document.getElementById('clock');


/* CamelCase */
function getTime() {

    let date = new Date();
    let time = date.toLocaleTimeString();
    clockElem.innerText = time;
}

setInterval(() => {
    getTime();
}, 100);


const searchElem = document.getElementById("search");
const searchFieldElem = document.getElementById("search-field");
const searchString = "https://duckduckgo.com/?q="

/* Eventlistener => suchfeld öffnen SPACEBAR*/
document.addEventListener("keydown",event => {
    if(event.key == " ") {
        searchFieldElem.value = "";
        searchElem.style.display = 'flex';
        searchFieldElem.focus();
    } else if (event.key == 'Escape')
    {
        searchFieldElem.value = "";
        searchFieldElem.blur();
        searchElem.style.display = 'none';
    }
});

searchFieldElem.addEventListener("keydown",event => {
    if(event.key == "Enter"){
        let query = searchFieldElem.value;
        window.open(searchString + query,"_self")
    }
});
/* Eventlistener => suche starten ENTER*/

/* Eventlistener => suchfeld schliessen  ESC*/

