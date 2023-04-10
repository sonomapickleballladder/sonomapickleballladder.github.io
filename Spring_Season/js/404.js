document.addEventListener('DOMContentLoaded', function(){
    let path = (location.origin+location.pathname).split('/')
    let pf = path[path.length - 2]
    let mapurls = Object.keys(laddersOffered).map(a => laddersOffered[a].url)
    if(mapurls.includes(pf)) {
        let oj = laddersOffered.filter(obj => {
            return obj.url == pf
          })
          document.write(`<!DOCTYPE html><pre style="font-size: larger; word-wrap: break-word; white-space: pre-wrap;">
          The website for the ${oj} Ladder does not exist yet. It will be created if enough players sign up by the registration deadline.</pre>`)
    }
})