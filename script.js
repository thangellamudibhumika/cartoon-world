/* =====================================================
   CHANNEL DROPDOWN
===================================================== */


const channelBtn =
    document.getElementById("channelBtn");


const channelDropdown =
    document.getElementById("channelDropdown");



/*
    Open / Close Channels dropdown
*/

channelBtn.addEventListener("click", function(event) {

    event.stopPropagation();

    channelDropdown.classList.toggle("show");

});



/*
    Close dropdown when clicking
    outside Channels
*/

document.addEventListener("click", function(event) {

    if (!event.target.closest(".channel-menu")) {

        channelDropdown.classList.remove("show");

    }

});



/*
    Close dropdown after selecting
    a channel
*/

const channelLinks =
    document.querySelectorAll(".dropdown-menu a");


channelLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        channelDropdown.classList.remove("show");

    });

});



/* =====================================================
   BACK TO TOP
===================================================== */


const backToTop =
    document.getElementById("backToTop");


backToTop.addEventListener("click", function(event) {

    event.preventDefault();


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});