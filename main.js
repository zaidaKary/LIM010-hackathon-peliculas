const allMovies = document.getElementById('home-view');
const selectAnoEstreno = document.getElementById('select-ano');
const objMovies=['Captain America: The First Avenger','Iron Man','The Incredible Hulk','Iron Man 2','Thor','The Avengers','Iron Man 3',
'Thor: The Dark World','Captain America: The Winter Soldier','Guardians of the Galaxy',
'Avengers: Age of Ultron','Ant-Man','Captain America: Civil War','Spider-Man: Homecoming','Doctor Strange',
'Black Panther','Guardians of the Galaxy Vol. 2','Thor: Ragnarok','Avengers: Infinity War',
'Ant-Man and the Wasp','Captain Marvel','Avengers: Endgame','Spider-Man: Far from Home'];
const url = 'http://www.omdbapi.com/?t=';
let aux =[];
let movie; 
for(let i =0; i<objMovies.length;i++){
  movie = url+encodeURI(objMovies[i])+'&apikey=1aca2bd9' 
  fetch (movie) 
  .then(response => response.json())
      .then(data => {
        localStorage.setItem('data', JSON.stringify(data))
        aux.push(data);
        allMovies.innerHTML = showMovies(aux);
        
        // Funcion para mostrar los tipos
        const anoEstreno=paintAno(aux);
        paintListAno(anoEstreno, selectAnoEstreno);
 
        // Funcion de prueba para botones de año
        const selectMenuAge=document.getElementById("select-age");
        selectMenuAge.addEventListener('click', () => {
        let newListMovie =  paintListAno(anoEstreno, allMovies);
    });
      }) 
      .catch(err => (err))
}

const showMovies = (aux) => {
  let viewMovie = '';
  for (let i in aux) {
     viewMovie = viewMovie + `
     <div id="printMovies" class="card col-lg-3 col-md-6 col-sm-12">
      <div class="card-body bd-dark style="width = 20rem;">
        <img src="${aux[i].Poster}" class="card-img-top" alt="${aux[i].Title}">
        <div class="card-body">
        <h5 id="product-name" class="card-title d-flex justify-content-center">Title: ${aux[i].Title}</h5>
        <h6 id="product-name" class="card-title d-flex justify-content-center">Genre: ${aux[i].Genre}</h6>
        <h6 id="product-name" class="card-title d-flex justify-content-center">Year: ${aux[i].Year}</h6>
        </div>
      </div>
     </div>
     </div>
     `
    }
 
  return viewMovie;
  
};



// Funcion para pintar  los años
const paintAno = (listMovie) => {
  let newData = [];
  for (let i = 0; i < listMovie.length; i++) {
      newData[i] = listMovie[i].Year;
  }
  const listType = [... new Set(newData)];
  const listAgeShort=listType.sort();
  return listAgeShort;
 
}


// Funcion para pintar los años en el combobox
const paintListAno = (data, container) => {
  let template = '';
  for (let i = 0; i < data.length; i++) { 
    template += `<button type="sumit" onclick="anio(${data[i]})" id="${data[i]}" value="${data[i]}"> ${data[i].toUpperCase()}</button>`;    
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
}

 


      

   


