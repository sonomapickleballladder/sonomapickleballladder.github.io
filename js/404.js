document.addEventListener('DOMContentLoaded', function(){
    const lso = {'Open': {ls: '_73605625073234973904_', min: 0, sb: '', url: './'}, 'Womens': {ls: '_04914861211241326984_', url: '@Womens/'}, 'Mens': {ls: '_41598763447389514591_', url: '@Mens/'}, 'Singles': {ls: '_51600555464256341585_', url: '@Singles/'}, 'Miny-Singles': {ls: '_95391847196677445687_', url: '@Miny-Singles/'}, '2-Week': {ls: '_86749060568300090027_', url: '@2-week/'}}
    let path = (location.origin+location.pathname).split('/')
    let pf = path[path.length - 2]+'/';
   // let mapurls = Object.keys(lso).map(a => lso[a].url)
   let kys = Object.keys(lso)
   for (let i = 0; i < kys.length; i++) {
    let k = kys[i]
    if(pf == lso[k].url) { 
        document.write(`<!DOCTYPE html><pre style="font-size: larger; word-wrap: break-word; white-space: pre-wrap;">The website for the ${k} Ladder does not exist yet. It will be created if enough players sign up by the registration deadline.</pre>`);
        i = kys.length-1}
   }
    
})