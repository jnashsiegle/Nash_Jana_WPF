/**
 * Jana Nash-Siegle
 * 9/17/2014
 * WPF
 * Conditionals: Assignment - Industry Specific
 *
 * **/


//alert("testing")

alert("Welcome to ABC Web Development.  A series of prompts will follow this notice, simply answer yes or no if it" +
    " is a service you would like us to offer you.  An estimate will follow.");

var cDomainName = 0;
var cHostSite = 0;
var cWebPDM = 0;


var domainName = prompt("Would you like to register a domain name?"); // ask if service they want, 10.00 charge
    while(domainName === "") {
        domainName = prompt("You forgot to input something!");  // checking for empty string, re-running prompt
    }
        if(domainName.toLowerCase()  === "yes" || domainName.toLowerCase() === "y") {
            console.log("You would like us to register a domain name for you. ");
            cDomainName = 10;
        } else {
            console.log("Let's move on to something else.")
}
var hostSite = prompt("Are you interested in hosting services?"); // 50.00 year if yes to hosting
    while(hostSite === "") {
        hostSite = prompt("You forgot to input something!");  // checking for empty string, re-running prompt
    }
        if (hostSite.toLowerCase() === "yes" || hostSite.toLowerCase() === "y") {
            console.log("You would like us to host a site for you. ");
            cHostSite = 50;
        } else {
            console.log("Let's move on to something else.")
}
var webPDM = prompt("Would you like us to design, develop and maintain a website for you?"); // $500 a year if yes
    while(webPDM === "") {
        webPDM = prompt("You forgot to input something!");  // checking for empty string, re-running prompt
    }
        if (webPDM.toLowerCase() === "yes" || webPDM.toLowerCase() === "y") {
            console.log("You would like us to design, develop and maintain a website for you.  Great! ");
            cWebPDM = 500
        } else {
            console.log("Let's move on to something else.")
        }
        console.log("Your total fee for services would come to " + (sum = cDomainName + cHostSite + cWebPDM) +
            " dollars.");
