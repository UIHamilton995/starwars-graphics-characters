fetch('https://swapi.dev/api/people')
.then(res=>res.json())
.then(info=>{
    let characters=info.results
    // for( let character of characters){
    //     console.log(character.name)
    //     console.log(character.height)
    //     console.log(character.gender)

    //     document.getElementById('starwars').innerHTML=character.name;
    //     document.getElementById('age').innerHTML=character.gender;
    //     document.getElementById('hh').innerHTML=character.height;
      
        let data = "";

    characters.map((values) => {
        data += `<div class="cards">
        <img src="images/${values.name}.jpeg" alt="" class="stars">
        
        <button onClick="showInfo" class="button">${values.name}</button> 
        <h3 class="gender">${values.gender}</h3>
        <h4 class="height">${values.height}</h4>
     </div>`
    })
    document.getElementById('cards').innerHTML = data;

    });