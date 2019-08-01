<<<<<<< HEAD
/* variables de manejo del DOM */
=======
//Valor del input buscar
const search = document.getElementById('search');

>>>>>>> 1c3a70c9cb6674db0dad1593ba03abe73ec924e6
const allMovies = document.getElementById('home-view');
const phase1 = document.getElementById('phase-1');
const phase2 = document.getElementById('phase-2');
const phase3 = document.getElementById('phase-3');

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
  movie = `http://www.omdbapi.com/?t=${encodeURI(objMovies[i])}&apikey=1aca2bd9`;
  fetch(movie)
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('data', JSON.stringify(data))
      aux.push(data);
      allMovies.innerHTML = showMovies(aux);
      //Funciónes para filtar por Fase
      phase3.addEventListener('click', () => {
        allMovies.innerHTML = showMovies(filterForPhase3(aux));
      });
      phase1.addEventListener('click', () => {
        allMovies.innerHTML = showMovies(filterForPhase1(aux));
      });
      phase2.addEventListener('click', () => {
        allMovies.innerHTML = showMovies(filterForPhase2(aux));
      });



    })
    .catch(err => (err))
};

// Función para mostrar todas las peliculas.
const showMovies = (aux) => {
  let viewMovie = '';
  for (let i in aux) {
<<<<<<< HEAD
    viewMovie = viewMovie + `
     <div id="printMovies" class="card col-lg-3 col-md-6 col-sm-12">
      <div class="card-body bd-dark style="width = 20rem;">
        <img src="${aux[i].Poster}" class="card-img-top" alt="${aux[i].Title}">
        <div class="card-body">
        <h5 id="product-name" >Title: ${aux[i].Title}</h5>
        <h6 id="product-name" >Genre: ${aux[i].Genre}</h6>
        <h6 id="product-name" >Year: ${aux[i].Year}</h6>
=======
     viewMovie = viewMovie + `
     <div id="printMovies" class="col-md-3">
      <div class="card well text-center">
        <img src="${aux[i].Poster}" class="card-img-top" alt="${aux[i].Title}">
        <div class="card-body">
          <h5 id="product-name" class="card-title"> ${aux[i].Title}</h5>
          <h6 id="product-name">(${aux[i].Year})</h6>
          <h6 id="product-name"><small class="text-muted">${aux[i].Genre}</small></h6>
>>>>>>> 1c3a70c9cb6674db0dad1593ba03abe73ec924e6
        </div>
      </div>
     </div>
     `
  };
  return (viewMovie);
};

<<<<<<< HEAD
=======
console.log(showMovies(aux));

const searchMoviesByName = (dataAllMovies, letter) => {
    return dataAllMovies.filter(objeto => objeto.Title.toLowerCase().startsWith(letter));
  };
  search.addEventListener('input', event => {
    const movieSought = searchMoviesByName(aux, event.target.value.toLowerCase());
    allMovies.innerHTML = showMovies(movieSought);
  });
>>>>>>> 1c3a70c9cb6674db0dad1593ba03abe73ec924e6
