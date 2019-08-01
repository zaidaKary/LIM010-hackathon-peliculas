const objMovies=['Captain America: The First Avenger','Iron Man','The Incredible Hulk','Iron Man 2','Thor','The Avengers','Iron Man 3',
'Thor: The Dark World','Captain America: The Winter Soldier','Guardians of the Galaxy',
'Avengers: Age of Ultron','Ant-Man','Captain America: Civil War','Spider-Man: Homecoming','Doctor Strange',
'Black Panther','Guardians of the Galaxy Vol. 2','Thor: Ragnarok','Avengers: Infinity War',
'Ant-Man and the Wasp','Captain Marvel','Avengers: Endgame','Spider-Man: Far from Home'];
const url = 'http://www.omdbapi.com/?t=';
let movie; 
//for(let i =0; i<objMovies.length;i++){
  movie = url+encodeURI(objMovies[0])+'&apikey=1aca2bd9' 
  fetch (movie) 
  .then(response => response.json())
      .then(data => {
        localStorage.setItem('data', JSON.stringify(data))
        console.log(data);
      }) 
      .catch(err => (err))
//}


let inputSearch=document.getElementById("search");
let containerOutput=document.getElementById("container display");
const btnSearch = document.getElementById('button-search');
