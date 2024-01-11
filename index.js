const personajes = document.getElementById("personajes");
let pagina = 1;

function mostrarData(arrCharacter) {
  personajes.innerHTML = " ";
  arrCharacter.forEach((itemCharacter) => {
    personajes.innerHTML += `<div>
                                    <div>
                                        <div>
                                          <img src=${itemCharacter.image}>
                                        </div>
                                        <div>
                                        <p>Nombre: ${itemCharacter.name}</p>
                                        <p>Genero: ${itemCharacter.gender}</p>
                                        <p>Species: ${itemCharacter.species}</p>
                                        <p>Status: ${itemCharacter.status}</p>
                                        <p>Origin: ${itemCharacter.origin.name}</p>
                                        <p>Location ${itemCharacter.location.name}</p>
                                        </div>  
                                        <div>
                                            <button onclick=mostrarOtraPagina(${itemCharacter.id})>Ver mas</button>
                                        </div>
                                    </div>
                                </div>`;
  });
}

function conseguirPersonajes(pagina) {
  fetch("https://rickandmortyapi.com/api/character/?page=" + pagina)
    .then((data) => data.json())
    .then((data) => {
      mostrarData(data.results);
    });
}

function mostrarOtraPagina(id) {
  window.location.href = "vermas.html?id=" + encodeURIComponent(id);
}

conseguirPersonajes(pagina);
