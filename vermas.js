const personajeDiv = document.getElementById("personaje");

function getQueryParam(key) {
  var urlSearchParams = new URLSearchParams(window.location.search);
  return urlSearchParams.get(key);
}

function goToHome() {
  window.location.href = "index.html";
}

function getCharacter() {
  const characterId = getQueryParam("id") || 1;
  fetch("https://rickandmortyapi.com/api/character/" + characterId)
    .then((data) => data.json())
    .then((data) => {
      mostrarData(data);
    });
}

function mostrarData(character) {
  personajeDiv.innerHTML = `<div>
                                      <div>
                                          <div>
                                            <img src=${character.image}>
                                          </div>
                                          <div>
                                          <p>Nombre: ${character.name}</p>
                                          <p>Genero: ${character.gender}</p>
                                          <p>Species: ${character.species}</p>
                                          <p>Status: ${character.status}</p>
                                          <p>Origin: ${character.origin.name}</p>
                                          <p>Location ${character.location.name}</p>
                                          <p>Episodes: ${character.episode.length}</p>
                                          
                                          </div>  
                                      </div>
                                  </div>`;
}

getCharacter();
