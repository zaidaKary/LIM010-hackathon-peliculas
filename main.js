//Valor del input buscar
const search = document.getElementById('search');

const inicio = document.getElementById('inicio');
const allMovies = document.getElementById('home-view');
const selectAnoEstreno = document.getElementById('select-ano');
const sliderView = document.getElementById('slider-view');
const phase1 = document.getElementById('phase-1');
const phase2 = document.getElementById('phase-2');
const phase3 = document.getElementById('phase-3');
const capAmerica = document.getElementById('cap-america');
const ironMan = document.getElementById('iron-man');
const theAvenger = document.getElementById('the-avenger');
const thor = document.getElementById('thor');
const guardians = document.getElementById('guardians');
const spider = document.getElementById('spider');

const signOff = document.getElementById('sign-off');

const getIn = document.getElementById('get-in');
const user = document.getElementById('user');
const password = document.getElementById('password');
const passwordError = document.getElementById('password-error');
const homeView = document.getElementById('home-view');
const siteHeader = document.getElementById('site-header');

/*Array donde guardo mis peluculas  */
const objMovies = ['Captain America: The First Avenger', 'Iron Man', 'The Incredible Hulk', 'Iron Man 2', 'Thor', 'The Avengers', 'Iron Man 3',
  'Thor: The Dark World', 'Captain America: The Winter Soldier', 'Guardians of the Galaxy',
  'Avengers: Age of Ultron', 'Ant-Man', 'Captain America: Civil War', 'Spider-Man: Homecoming', 'Doctor Strange',
  'Black Panther', 'Guardians of the Galaxy Vol. 2', 'Thor: Ragnarok', 'Avengers: Infinity War',
  'Ant-Man and the Wasp', 'Captain Marvel', 'Avengers: Endgame', 'Spider-Man: Far from Home'];
/*Variables del fetch */
let aux = [];
let movie;
for (let i = 0; i < objMovies.length; i++) {
  movie = `https://www.omdbapi.com/?t=${encodeURI(objMovies[i])}&apikey=1aca2bd9`;
  fetch(movie)
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('data', JSON.stringify(data))
      aux.push(data);
      allMovies.innerHTML = showMovies(aux);
      /*inicio.addEventListener('click', () =>{
        allMovies.innerHTML = showMovies(aux);
      });*/
     
      //Funciónes para filtar por Fase
      phase1.addEventListener('click', () => {
        allMovies.innerHTML = showMovies(filterForPhase1(aux));
      });
      phase2.addEventListener('click', () => {
        allMovies.innerHTML = showMovies(filterForPhase2(aux));
      });
      phase3.addEventListener('click', () => {
        allMovies.innerHTML = showMovies(filterForPhase3(aux));
      });
      //Funciones para filtrar por saga
      capAmerica.addEventListener('click', () => {
        allMovies.innerHTML = showMovies(filterForSaga(aux,'Captain America'));
      });
      ironMan.addEventListener('click', () => {
        allMovies.innerHTML = showMovies(filterForSaga(aux,'Iron Man'));
      });
      theAvenger.addEventListener('click', () => {
        allMovies.innerHTML = showMovies(filterForSaga(aux,'The Avengers'));
      });
      thor.addEventListener('click', () => {
        allMovies.innerHTML = showMovies(filterForSaga(aux,'Thor'));
      });
      guardians.addEventListener('click', () => {
        allMovies.innerHTML = showMovies(filterForSaga(aux,'Guardians of the Galaxy'));
      });
      spider.addEventListener('click', () => {
        allMovies.innerHTML = showMovies(filterForSaga(aux,'Spider-Man'));
      });
      // Funcion para mostrar los tipos
     const anoEstreno=paintAno(aux);
     paintListAno(anoEstreno, selectAnoEstreno);
     // Funcion de prueba para botones de año
     const selectMenuAge=document.getElementById("select-age");
     selectMenuAge.addEventListener('click', () => {
      paintListAno(anoEstreno, allMovies);
     });
    })
    .catch(err => (err))
    
};

// Función para mostrar todas las peliculas.
const showMovies = (aux) => {
  let viewMovie = '';
  for (let i in aux) {
     viewMovie = viewMovie + `
     <div id="printMovies" class="col-md-3">
      <div class="card well text-center">
        <img src="${aux[i].Poster}" class="card-img-top size" alt="${aux[i].Title}">
        <div class="card-body">
          <h5 id="product-name" class="card-title"> ${aux[i].Title}</h5>
          <h6 id="product-name">(${aux[i].Year})</h6>
          <h6 id="product-name"><small class="text-muted">${aux[i].Genre}</small></h6>
        </div>
      </div>
     </div>
     `
  };
  return (viewMovie);
};

console.log(showMovies(aux));

const searchMoviesByName = (dataAllMovies, letter) => {
    return dataAllMovies.filter(objeto => objeto.Title.toLowerCase().startsWith(letter));
  };
  search.addEventListener('input', event => {
    const movieSought = searchMoviesByName(aux, event.target.value.toLowerCase());
    allMovies.innerHTML = showMovies(movieSought);
  });
// Funcion para pintar  los años
const paintAno = (listMovie) => {
  let newData = [];
  for (let i = 0; i < listMovie.length; i++) {
      newData[i] = listMovie[i].Year;
  }
  const listType = [... new Set(newData)];
  const listAgeShort=listType.sort();
  return listAgeShort;
};


// Funcion para pintar los años en el combobox
const paintListAno = (data, container) => {
  let template = '';
  for (let i = 0; i < data.length; i++) { 
    template += `<div class="button"><button style="margin-left: 11px;" class="btn btn-info" type="sumit" onclick="anio(${data[i]})" id="${data[i]}" value="${data[i]}"> ${data[i].toUpperCase()}</button><div>`;    
  }
  container.innerHTML = template;
};


// Función de filtrar por tipo
const filterAge = (allListMovie, ageEstren) => {
  let arrayMovie = [];
  for (let i = 0; i < allListMovie.length; i++) {
      if (allListMovie[i].Year == ageEstren) {
        arrayMovie.push(allListMovie[i]);  
      } 
  }
  return arrayMovie;
};

// Funcion para mostrar el filtro del año
function anio(id){
  let resultFilterAge = filterAge(aux, id);
  allMovies.innerHTML = showMovies(resultFilterAge)
};
