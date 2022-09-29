console.log("This script was loaded from an external JS file")

// this is an alert
//alert("This is an alert!")

var name = window.prompt("Enter your name:  ")
alert(`Hello ${name}!`)

//use document.getElementById()
document.getElementById("name").innerText = "Hello " + name + "!"