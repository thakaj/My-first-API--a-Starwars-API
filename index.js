// look at html.index and plan what the page looks like when it loads
//switch between html and js as you work
//maybe look at some projects and deconstruct them to see how youd like your own to look


//ask Jenn about setting your btns in your header. Specifically "show info btn" "hide info btn"
// would i put it in the header? if so would i span the header and add it?


// The user will have a button that shows additional information about each character from the API
//define the api
const api = "https://swapi.dev/api/people/"
// define an async function to fetch the data display characters to dom
async function fetchAPI(){
    fetch("https://swapi.dev/api/people/")
    .then(resp => resp.json())
    .then(resp => {
        console.log(data)
    })
}   //find out what data type im using. Might get quized on it

//event listener 1: when the user clicks a button on the page additional information is showed
//When the character info is shown there is a hide button
//event listener 2: when the user clicks a button the information is hidden 
//the user will be able to click a like button on each characters profile
//event listener 3: when the user clicks a button there is an active response on the page
//stretch goal: add a comments section for users to leave anonomyus comments