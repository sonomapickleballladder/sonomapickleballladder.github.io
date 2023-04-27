let isal = true;
try {if(localStorage.getItem(brick('$_enableAnalytics'))) {isal = localStorage.getItem(brick('$_enableAnalytics'))}} catch(ex) {}
if(location.href.indexOf('al=false')>-1) {isal = false; try{localStorage.setItem(brick('$_enableAnalytics'),false)} catch(ex){}}
if(location.hostname == 'localhost') {isal = false}
//console.log(isal);
if(isal) {
    let lnk = document.getElementsByTagName('a');
    for (let i = 0; i < lnk.length; i++) {
        try {if(lnk[i].getAttribute('href').indexOf('://')<0 && location.protocol.indexOf('https')>-1) {lnk[i].removeAttribute('rel'); lnk[i].href=lnk[i].href.replace(/(.html)/g,'')}} catch (ex) {     
        }
    }

    let al = document.createElement('script');
     al.src = 'https://analytics.projectsegfau.lt/js/script.js';
     al.setAttribute('data-domain', 'sonomapickleballladder.github.io');
     al.setAttribute('defer', '');
     document.head.appendChild(al)
    }



let isstyled = true;
try {if(lsdciph(localStorage.getItem(ladderId.ls+'isStyled')) != null) {isstyled = lsdciph(localStorage.getItem(ladderId.ls+'isStyled'))}} catch(ex) {}
if(location.href.indexOf('style=0')>-1) {isstyled = false; try{localStorage.setItem(ladderId.ls+'isStyled', lsciph(false))} catch(ex){}}
if(location.href.indexOf('style=1')>-1) {isstyled = true; try{localStorage.setItem(ladderId.ls+'isStyled', lsciph(true))} catch(ex){}}
if(!isstyled) {
    document.querySelectorAll('[style]').forEach(el => el.removeAttribute('style'));
    document.querySelectorAll('link[rel="stylesheet"]').forEach(el => el.parentNode.removeChild(el));
    document.querySelectorAll('style').forEach(el => el.parentNode.removeChild(el));
}

let darkmode = get_darkmode()
/*try {if(localStorage.getItem(brick('$_darkMode')) != null) {darkmode = JSON.parse(localStorage.getItem(brick('$_darkMode')))}} catch(ex) {console.log(ex);}
if(location.href.indexOf('darkmode=0')>-1) {darkmode = false; try{localStorage.setItem(brick('$_darkMode'), false)} catch(ex){}}
if(location.href.indexOf('darkmode=1')>-1) {darkmode = true; try{localStorage.setItem(brick('$_darkMode'), true)} catch(ex){}}*/
if(darkmode) {
    document.body.classList.add('dark_theme')
}
else if (darkmode == false) {
    document.body.classList.add('light_theme')
}
try{byId('darkmode').checked = darkmode}catch(ex){}





