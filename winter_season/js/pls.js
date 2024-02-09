let isal = true;
try {if(localStorage.getItem(brick('$_enableAnalytics'))) {isal = localStorage.getItem(brick('$_enableAnalytics'))}} catch(ex) {}
if(location.href.indexOf('al=false')>-1) {isal = false; try{localStorage.setItem(brick('$_enableAnalytics'),false)} catch(ex){}}
if(location.hostname == 'localhost') {isal = false}
if(navigator.doNotTrack) {isal = false}
//console.log(isal);
if(isal) {
    let lnk = document.getElementsByTagName('a');
    for (let i = 0; i < lnk.length; i++) {
        try {if(lnk[i].getAttribute('href').indexOf('://')<0 && location.protocol.indexOf('https')>-1) {lnk[i].removeAttribute('rel'); lnk[i].href=lnk[i].href.replace(/(.html)/g,'')}} catch (ex) {     
        }
    }

    let al = document.createElement('script');
     al.src = 'https://plausible.io/js/script.js';
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

window.addEventListener('keydown', e=> {
    if(document.hasFocus() && (e.key == 'µ' || (e.altKey && e.shiftKey && e.key == 'M')) && document.activeElement.tagName.toLowerCase() != 'input' && document.activeElement.tagName.toLowerCase() != 'textarea') {
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


function styleMobile() {
    try {
        if(ismobile()){
            try{
                let scr = document.getElementsByClassName('vbtoggle');
                for (let i = 0; i < scr.length; i++) {
                   if(isSafari()) {scr[i].classList.add('safari')}
                   else {scr[i].classList.add('mobile')}
                }
            }catch(ex){}
        }
    } catch (ex) {
        
    }
}

styleMobile()


function signupReminder() {
    let fnm = location.href.split('?')[0].split('#')[0].split('/').pop().split('.')[0]
    let act = ['', 'how_it_works', 'faq', 'more']
    if(!act.includes(fnm)) {return false}
    if(localStorage.getItem('dontshowsignupreminderagain')){return false}
    let swa = (document.referrer.indexOf('signup_form')>-1 || localStorage.getItem(brick('$_hasRegistered'+ladderSeason)) || lsdciph(localStorage.getItem(brick('$_authenticated_user'+ladderSeason))))
    console.log(swa);
    if(swa) {return false}
    let ewb = document.createElement('div')
    ewb.innerHTML = `<div class="se_modal">
    <div>
      <span onclick="document.querySelector('.se_modal').classList.add('h')" style="position: absolute; top: 0.5em; left: 0.5em; cursor: pointer; height: 1em; width: 1em; line-height: 1;">✕</span>
      <h1 style="text-align: center;">Reminder!</h1>
      <p>Today is the last day to sign up for the Winter Season if you want to be able to start in round 1.</p>
    </div>
    <div>
      <p>
        <button style="width: calc(50% - 0.5em); border-radius: 1em; border-width: 1px; font-size: medium; background-color: darkred;" class="cool_button" onclick="document.querySelector('.se_modal').classList.add('h'); localStorage.setItem('dontshowsignupreminderagain','true')">Dismiss</button>
        <button style="width: calc(50% - 0.5em); border-radius: 1em; border-width: 1px; float: right; font-size: medium; background-color: #9807ee;" class="cool_button" onclick="window.open('signup_form.html')">Signup</button>
      </p>
    </div>
  </div>`;

  document.body.appendChild(ewb);

}

// try{if(`${new Date().getFullYear()} ${new Date().getMonth()+1} ${new Date().getDate()}`=="2023 6 29"){signupReminder()}}catch(ex){}



