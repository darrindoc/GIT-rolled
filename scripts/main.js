import { gitRolledChorus } from "./chorus.js";


//Below I allow my gitRolledChorus function to print the chorus every time it comes up
const mainContainer = document.querySelector("#container");

const renderAllHTML = () => {
    mainContainer.innerHTML = gitRolledChorus();
};

renderAllHTML();