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

function setMode(darkmode) {
    (null || undefined) == darkmode && (darkmode = get_darkmode())
    /*try {if(localStorage.getItem(brick('$_darkMode')) != null) {darkmode = JSON.parse(localStorage.getItem(brick('$_darkMode')))}} catch(ex) {console.error(ex);}
    if(location.href.indexOf('darkmode=0')>-1) {darkmode = false; try{localStorage.setItem(brick('$_darkMode'), false)} catch(ex){}}
    if(location.href.indexOf('darkmode=1')>-1) {darkmode = true; try{localStorage.setItem(brick('$_darkMode'), true)} catch(ex){}}*/
    if(darkmode) {
        document.body.classList.remove('light_theme')
        document.body.classList.add('dark_theme')
    }
    else if (darkmode == false) {
        document.body.classList.remove('dark_theme')
        document.body.classList.add('light_theme')
    }
    try{byId('darkmode').checked = darkmode}catch(ex){}
    try{localStorage.setItem(brick('$_darkMode'), darkmode)} catch(ex){}

}

setMode()

window.addEventListener('keyup', e=> {
    if(document.hasFocus() && e.key == 'µ' && document.activeElement.tagName.toLowerCase() != 'input' && document.activeElement.tagName.toLowerCase() != 'textarea') {
    event.preventDefault(); 
    setMode([...document.body.classList].indexOf('dark_theme'));
}
})

function setStyles(s) {
    (null || undefined) == s && (s = {})
    try {
        let sl = Object.keys(s)
    for (let i = 0; i < sl.length; i++) {
        console.log(sl[i],`${s[sl[i]]}!important`);
        document.body.style[sl[i]] = `${s[sl[i]]}!important`
    }
    } catch (ex) {
        
    }

}


function styleSafari() {
    try {
        if(isSafari()&&!ismobile()){
            try{
                let scr = document.getElementsByClassName('vbtoggle');
                for (let i = 0; i < scr.length; i++) {
                    scr[i].classList.add('safari')
                }
            }catch(ex){}
        }
    } catch (ex) {
        
    }
}

styleSafari()





