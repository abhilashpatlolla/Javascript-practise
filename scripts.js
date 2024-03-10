// // create a new div element
// const newDiv = document.createElement("div");

// // and give it some content
// const newContent = document.createTextNode("Hi there and greetings!");

// // add the text node to the newly created div
// newDiv.appendChild(newContent);

// // add the newly created element and its content into the DOM
// const currentDiv = document.getElementById("first");
// document.body.insertBefore(newDiv, currentDiv);

// var isBlue = false;
// let callback = () => {
//     console.log("Button click karaa rey!! Abb dekh poora color badlega");
//     if(!isBlue){
//         document.body.style.backgroundColor = "Blue";
//         isBlue = true;
//     }
//     else{
//         document.body.style.backgroundColor = "White";
//         isBlue = false;
//     } 
// }

// document.querySelector("#button").addEventListener("click",callback);

// callback functions
// function one(arg1, arg2){
//     console.log("printing first argument in one - ",arg1);
//     arg2();
// }

// function two(){
//     console.log("I am two");
// }

// one("1",two);
// This is just a simple use case where arguments are not involved in the passing function, 
// How about a function that has arguments, In that case do we need to pass the necessary arguments as well along with the function?

// This function loads a url and then executes the code of the callback function
function loadScript(url, callback){
    let script = document.createElement('script');
    script.src = url;
    script.onload = () => {
        callback(null,url);
    }

    script.onerror = () => {
        callback(new Error(),url);
    }
    document.body.appendChild(script);
}

function hello(error, url){
    if(error != null){
        console.log(error);
    }else console.log("Hello there, Well done - ",url);
}

loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',hello);