
function characterInfo(arrayObjects){
    arrayObjects.forEach(character => {
        const newDiv = document.createElement("article")
        newDiv.setAttribute("class", "content-block")
        newDiv.innerHTML = `
            <h2>${character.name}</h2>
            <article> Height: ${character.height}
            <div>
            Mass: ${character.mass}
            </div>
            <div>
            Hair Color: ${character.hair_color}
            </div>
            <div>
            Skin Color: ${character.skin_color}
            </div>
            <div>
            Eye Color: ${character.eye_color}
            </div>
            <div>
            Birth Year: ${character.birth_year}
            </div>
            <div>
            Gemder: ${character.gender}
            </div>
            </article>
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