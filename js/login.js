function attemptLogin(name,key) {
if(byId('message').innerHTML.toLowerCase().indexOf('success')>-1) {return false}
byId('message').innerHTML='Verifying...'
if(name.length<1){byId('message').innerHTML='Name is required'; return false}
if(key.length<1){byId('message').innerHTML='Secret Key is required'; return false}
let test;
ptc('rdbusrs', '*', 'id', 1).then(function(res){
    test = res;
    let nm = name.replace(/(\s)/g,'').toLowerCase();
    let st = nm+key;
    let nve = 2;
    let hsa = sha256x(st,nve);
    test = test[0].list
    let isvl = 0;
    for (let i = 0; i < test.length; i++) {
        if(test[i]==hsa) {isvl=1}
    }
    if(isvl){
        byId('message').innerHTML=`Successfully logged in as ${name}`;
        let lm = {name: name, token: sha256x(st,1), expires: LZString.compress(key)};
        localStorage.setItem('logged_in_user', JSON.stringify(lm));
        localStorage.setItem('session6', reverseString(decipher(JSON.stringify(new Date().getFullYear()))('735079644d33456a646748')))
        localStorage.removeItem('payalert')
        if(location.search.indexOf('return_to=')>-1){location.replace(location.search.split('return_to=')[1].split('&')[0])}
    }
    else {
        byId('message').innerHTML='Login failed. Invalid Credentials'
    }
})

}


function sha256x(s,x) {
    for (let i = 0; i < x; i++) {
      s = sha256(s);
    }
    return s;
}

window.addEventListener('keydown', function(e) {
    if(e.key=='Enter') {
        if(byId('name') == this.document.activeElement) {byId('key').focus()}
        if(byId('key') == this.document.activeElement) {attemptLogin(byId('name').value, byId('key').value)}
    }
})


function showpskey(be) {
let map = {text: ['🙈', 'password'], password: ['👁️', 'text']}
be.previousElementSibling.type = map[be.previousElementSibling.type][1];
be.innerHTML = map[be.previousElementSibling.type][0];
}

document.addEventListener("DOMContentLoaded",function() {
    try {
        try{
            if(location.search.indexOf('name=')>-1){byId('name').value=decodeURI(location.search.split('name=')[1].split('&')[0])}
            if(location.search.indexOf('key=')>-1){byId('key').value=decodeURI(location.search.split('key=')[1].split('&')[0])}
            if(location.search.indexOf('autologin')>-1){attemptLogin(byId('name').value, byId('key').value)}
        }catch(ex){}
        if(ismobile() || isiPad()){byId('vbtoggle').style.transform = 'translate(-150%, 0%)'}
        else if(navigator.userAgent.indexOf('Beaker')>-1){byId('vbtoggle').style.transform = 'translate(-150%, 0%)'}
    } catch (ex) {
        
    }
})