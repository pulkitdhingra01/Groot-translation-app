var btnTranslate = document.querySelector("#btn-space");
var inputTxt = document.querySelector("#txt-space");
var outputTxt = document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/groot.json"

function getTranslationURL(text){
    return serverURL + "?" + "text" + text
}

function errorHandler(error){
    console.log("An error occured",error)
    alert("Something is wrong!! Please try again later")
}

function clickHandler(){
    var inputText = inputTxt.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json =>{
        var translatedText = json.constents.translated;
        outputTxt.innerText=translatedText;
        })
    .catch(errorHandler)

};

btnTranslate.addEventListener("click",clickHandler)