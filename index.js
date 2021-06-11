// look at html.index and plan what the page looks like when it loads
//switch between html and js as you work

//things to do!!!!!!!! in order!
//add a display info btn and a hide info btn into the header of each character name and also have a hide character info button
//set event listeners for the buttons make sure the functionality is there
//next would be to properly pull the data and apply it to the website
//then i should make it dynamic so when the event listener is trigered the data populates or hides



//write a function that will handle the data i get back from res.results write a function that creates a div and appends
//display 7 key:values from results with a for each statement
//use hiden function for the hide display button with if statements to hide old message
//i need to iterate through the objects and have it displayed on the html rather than writing html out right

function characterInfo(arrayObjects){
    arrayObjects.forEach(character => {
        console.log(character.name)
        //create a div element and save it as an element
        //set that div elements innerhtml  => interpolate the data
        //appened it to the container div

    });
}


const newDiv = document.querySelector('character-name')
// The user will have a button that shows additional information about each character from the API
//define the api

const api = "https://swapi.dev/api/people/"

function fetchApi(){
    fetch("https://swapi.dev/api/people/")
    .then(resp => resp.json())
    .then(resp => characterInfo(resp.results))
}   
fetchApi()
const forceButton = document.querySelector("force-button")









//event listener 1: when the user clicks a button on the page additional information is showed
//When the character info is shown there is a hide button
//event listener 2: when the user clicks a button the information is hidden 
//the user will be able to click a like button on each characters profile
//event listener 3: when the user clicks a button there is an active response on the page
//stretch goal: add a comments section for users to leave anonomyus comments