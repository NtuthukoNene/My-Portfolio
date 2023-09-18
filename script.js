var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    /**
     * Switches between tabs in a web page.
     * 
     * Removes the "active-link" and "active-tab" classes from all tab links and tab contents,
     * and then adds the "active-link" class to the clicked tab link and the "active-tab" class
     * to the corresponding tab content.
     * 
     * @param {string} tabname - The id of the tab content to be opened.
     * @returns {void}
     */

    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


var sidemeu = document.getElementById("sidemenu");

function openmenu() {
    sidemeu.style.right = "0";
}

function closemenu() {
    sidemeu.style.right = "-200px";
}