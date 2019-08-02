// Funcion filtar por fase 
const filterForPhase1 = (pelis) => {
  return pelis.filter(objeto => objeto.Year <= '2012' && objeto.Year>= '2008');
};
window.filterForPhase1 = filterForPhase1;

const filterForPhase2 = (pelis) => {
  return pelis.filter(objeto => objeto.Year <= '2015' && objeto.Year>='2013');
};
window.filterForPhase2 = filterForPhase2;

const filterForPhase3 = (pelis) => {
  return pelis.filter(objeto => objeto.Year <= '2019' && objeto.Year>='2016');
};
window.filterForPhase3 = filterForPhase3;

const filterForSaga = (pelis, tiposaga) => {
  return pelis.filter(objeto => objeto.Title.search(tiposaga)>=0);
};
window.filterForSaga = filterForSaga;

// Hola
