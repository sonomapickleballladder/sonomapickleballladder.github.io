document.addEventListener('DOMContentLoaded',()=>{
  const currentSeason = 'summer_season';
  const page = location.pathname.split("/").pop();
  location.replace(`../${currentSeason}/${page}`)
})
