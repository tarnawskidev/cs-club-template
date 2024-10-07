/*
    This Javascript code has one simple purpose; detect whether the user's system is in light or dark
    mode, and change the color palette of your site accordingly. 
*/ 

//this function checks the users dark mode settings and modifies site styles accordingly
function setDarkMode() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches) {

        /*
            We can grab the HTML elements using querySelector, and then store 
            them in variables for easy access. 
        */

        let myHeader = document.querySelector("header");
        let myBody = document.querySelector("body");
        let myFooter = document.querySelector("footer");
        
        console.log(myHeader);

        /*
            We can then call the variables to modify the objects stored within those
            variables. 
        */

        //change header styles
        myHeader.style.backgroundColor = "#383154";
        myHeader.style.color = "#e2e1e6";

        //change body styles
        myBody.style.backgroundColor = "#4e5080";
        myBody.style.color = "#e2e1e6";

        //change footer styles
        myFooter.style.backgroundColor = "#edad37";
        myFooter.style.color ="#e2e1e6";
    }
}

//call the setDarkMode function
setDarkMode();