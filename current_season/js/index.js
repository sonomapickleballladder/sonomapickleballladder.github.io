document.addEventListener('DOMContentLoaded',()=>{
  const currentSeason = 'spring_season';
  const page = location.pathname.split("/").pop();
  location.replace(`../${currentSeason}/${page}`)
})
