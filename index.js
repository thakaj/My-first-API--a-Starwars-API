
function characterInfo(arrayObjects){
    let counter = 0;
    arrayObjects.forEach(character => {
        const newDiv = document.createElement("article")
        newDiv.setAttribute("class", "content-block")
        newDiv.innerHTML = `
            <h2>${character.name}</h2>
            <div id = "${counter}">
            <article> Height: ${character.height}
            <div>
            Mass: ${character.mass}
            </div>
            <div>
            Hair Color: ${character.hair_color}
            </div>
            <div>
            Hair Color: ${character.skin_color}
            </div>
            <div>
            Hair Color: ${character.eye_color}
            </div>
            <div>
            Hair Color: ${character.bith_year}
            </div>
            <div>
            Hair Color: ${character.gender}
            </div>
            <div>
            </div>
            </article>
            </div>
            `
        document.getElementById("character").appendChild(newDiv)
    });
}

const hideBtn = document.getElementById("hide-btn")
hideBtn.addEventListener('click',function infoDisplay(click){
    let divs = document.getElementsByClassName("content-block");
    for (var i = 0; i < divs.length; i++) {
        divs.item(i).style.display = "none";
    }
})

const showBtn = document.getElementById("show-btn")
showBtn.addEventListener('click',function infoDisplay(click){
    let divs = document.getElementsByClassName("content-block");
    for (var i = 0; i < divs.length; i++) {
        divs.item(i).style.display = "";
    }
})

const submitBtn = document.getElementById("submitButton")
submitBtn.addEventListener('click',function submitText(){
    let value = document.getElementById("text-box").value;
    let commentDiv = document.getElementById("comments")
    commentDiv.innerHTML += value + " -Anonymous<br>"
})




function fetchApi(){
    fetch("https://swapi.dev/api/people/")
    .then(resp => resp.json())
    .then(resp => characterInfo(resp.results))
}   
fetchApi()









//event listener 1: when the user clicks a button on the page additional information is showed
//When the character info is shown there is a hide button
//event listener 2: when the user clicks a button the information is hidden 
//the user will be able to click a like button on each characters profile
//event listener 3: when the user clicks a button there is an active response on the page
//stretch goal: add a comments section for users to leave anonomyus comments