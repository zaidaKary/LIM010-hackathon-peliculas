//Valor del input buscar
const search = document.getElementById('search');

const allMovies = document.getElementById('home-view');
const sliderView = document.getElementById('slider-view');
const phase1 = document.getElementById('phase-1');
const phase2 = document.getElementById('phase-2');
const phase3 = document.getElementById('phase-3');

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

// Cerrar sesion 
signOff.addEventListener('click', () => {
  sliderView.classList.remove('hide');
});

// Funcionalidad del Boton Ingresar
let contador = 3;
getIn.addEventListener('click', () => {
  if (password.value === '' && user.value === '') {
    passwordError.innerHTML = '<strong>Por favor, ingrese su usuario y contraseña.</strong>';
  } else if (password.value === '') {
    passwordError.innerHTML = '<strong>Por favor, ingrese su contraseña.</strong>';
    user.value = '';
  } else if (user.value === '') {
    passwordError.innerHTML = '<strong>Por favor, ingrese su usuario.</strong>';
    password.value = '';
  } else if (user.value === 'LABORATORIA' && password.value === 'LABORATORIA') {
    sliderView.classList.add('hide');
    homeView.classList.remove('hide');
    siteHeader.classList.remove('hide');
  } else {
    if (contador === 0) {
      user.value = '';
      password.value = '';
      user.disabled=true;
      password.disabled=true;
      passwordError.innerHTML = '<strong>No te quedan más intento(s).</strong>';
    } else {
      passwordError.innerHTML = '<strong>Datos incorrectos, le quedan ' + contador + ' intento(s).</strong>';
      user.value = '';
      password.value = '';
      contador--;
    }
  }
});