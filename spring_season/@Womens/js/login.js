function attemptLogin(name,key,jm) {
/*if(byId('message').innerHTML.toLowerCase().indexOf('success')>-1) {return false}
//byId('message').innerHTML='Verifying...'
if(name.length<1){byId('message').innerHTML='Email is required'; return false}
if(key.length<1){byId('message').innerHTML='Secret Key is required'; return false}*/
console.log(jm);
let test;
ptc('rdbusrs', '*', 'id', 1).then(function(res){
    document.querySelector('.modal.login').classList.remove('pulse')
    byId('submit').removeAttribute('disabled')
    test = res;
    let nm = name.replace(/(\s)/g,'').toLowerCase();
    let st = nm+key;
    let nve = 2;
    let hsa = sha256x(st,nve);
    test = test[0].list
    let isvl = 0;
    for (let i = 0; i < test.length; i++) {
        if(test[i]==hsa) {isvl=1; test.length=i+1}
    }
    if(isvl){
        //byId('message').innerHTML=`Successfully logged in as ${name}`;
        let lm = {name: name, token: sha256x(st,1), expires: LZString.compress(key)};
        localStorage.setItem(ladderId.ls+'logged_in_user', lsciph(lm));
        localStorage.setItem(ladderId.ls+'session6', lsciph(reverseString(decipher(JSON.stringify(new Date().getFullYear()))('735079644d33456a646748'))))
        localStorage.removeItem('payalert')
        if(location.search.indexOf('return_to=')>-1){
            let tr = location.search.split('return_to=')[1].split('&')[0];
            if(tr.indexOf('initial_order')>-1) {localStorage.setItem(ladderId.ls+'ArprO_lA3RZxD5z', lsciph({name: nm, key: key}))}
            location.replace(tr)
        }
        else {
            location.replace(`dashboard${protoMap[location.protocol]}`)
        }
    }
    else {
        //byId('message').innerHTML='&nbsp;'
        if(location.search.indexOf('return_to=')>-1){
        setTimeout(function(){
            alert('Login was successful, but the page you are trying to visit will not be accessible until after the Initial Registration Deadline')
            location.replace(`dashboard${protoMap[location.protocol]}`)
    },10)   
    
        }
        else{setTimeout(function(){location.replace(`dashboard${protoMap[location.protocol]}`)},20)}
        
        //byId('message').innerHTML='Login failed. Invalid Credentials'
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
        if(byId('email') == this.document.activeElement) {byId('key').focus()}
        if(byId('key') == this.document.activeElement) {authorize({email: byId('email').value, key: byId('key').value})}
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
            let srch = location.search;
            if(location.search.indexOf('spl=')>-1) {srch = lsdciph(location.search.split('spl=')[1].split('&')[0].split('?')[0])}
            if(srch.indexOf('email=')>-1){byId('email').value=decodeURI(srch.split('email=')[1].split('&')[0])}
            if(srch.indexOf('key=')>-1){byId('key').value=decodeURI(srch.split('key=')[1].split('&auto')[0].split('&return')[0])}
            if(srch.indexOf('autologin')>-1){authorize({email: byId('email').value, key: byId('key').value})}
            else {hide(0)}
        }catch(ex){hide(0)}
        if(ismobile() || isiPad()){byId('vbtoggle').style.transform = 'translate(-150%, 0%)'}
        else if(navigator.userAgent.indexOf('Beaker')>-1){byId('vbtoggle').style.transform = 'translate(-150%, 0%)'}
    } catch (ex) {
        hide(0)
    }
})




function authorize(d) {
    try{var viewportmeta = document.querySelector('meta[name="viewport"]');
              if (viewportmeta) {
              viewportmeta.setAttribute('content', 'width=device-width, maximum-scale=1.0, initial-scale=1.0');
              }
              byId('submit').blur()
            }catch(ex){}

    try{if(d.email.length<1){byId('message').innerHTML='Email Adress is required'; return false}
    if(d.key.length<1){byId('message').innerHTML='Secret Key is required'; return false}}catch(ex){}

  signIn({email: d.email, key: d.key})
  .then((r)=>{
        if(r.error) {
            {try{hide(0)}catch(ex){}}
            document.querySelector('.modal.login').classList.remove('pulse')
            byId('submit').removeAttribute('disabled')
            calert(0, '<span style="font-size: large;">Login Failed</span>', `<span style="font-size: medium;">${r.error.message}</span>`,'error','100%', '100%',0,0,'2em', 'full', 'padding: 0.5em')}
        else{
            //calert(0, 'Sign in was Successful', 'Yay!',0, 0,0,0,0,'1em','full', 'padding: 1em')
            let mejs = JSON.parse(localStorage.getItem(sb.client.storageKey)).user.user_metadata;
            vhptc('Signups').then(gvf=>{
                try{
                    if(gvf.data.length>0) {
                    localStorage.setItem(brick('$_authenticated_user'+ladderSeason), lsciph(gvf.data[0]))
                    mejs = gvf.data[0]
                    }
                    else {
                        localStorage.setItem(brick('$_authenticated_user'+ladderSeason), lsciph(mejs))
                      //  alert('Something went wrong :('); return false
                    }
                } catch(ex) {console.log(ex);}
                sb.client.auth.signOut();
                let name = `${mejs.first_name} ${mejs.last_name}`;
            
              attemptLogin(name, d.key, mejs)
            })
            
            
        }
  })
}

async function vhptc(t,jl){
    if(!jl) t = init.f_e+ladderId.sb+t
    else t = init.f_e+ladderId.sb+t
    //alert(t)
    const { data, error } = await sb.client
    .from(t)
    .select()
  if(error&&debug) console.log(error);
  return {data: data, error: error}
  }


async function signIn(a) {
    document.querySelector('.modal.login').classList.add('pulse')
    byId('submit').disabled = true
    const { data, error } = await sb.client.auth.signInWithPassword({
           email: a.email,
           password: a.key,
         })
 

         return {data: data, error: error}
 
         /*else {
           location.replace(`dashboard${protoMap[location.protocol]}`)
         try {
             localStorage.setItem('user_credentials',JSON.stringify({u:LZString.compress(a), p:LZString.compress(b)}));          
            } 
         catch (ex) {
             
           }
         }*/
         
       }