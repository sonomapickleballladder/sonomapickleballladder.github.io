function jsonify() {
    let c = {};
    let f = document.querySelector('form').querySelectorAll('.wrap');
    for (let i = 0; i < f.length; i++) {

        let m = f[i].querySelectorAll('input');

        if(m.length > 1) {
            let arr = null, nm = m[0].getAttribute('c');
            for (let i2 = 0; i2 < m.length; i2++) {
                let j = m[i2];
                if(j.getAttribute('c')) {
                    let n = j.getAttribute('c');
                    if(j.type == 'checkbox') {
                        if(j.checked) {
                          if(arr == null) {arr = []}
                          arr.push(j.value)
                        }
                    }
                    else if (j.type == 'radio') {
                        if(j.checked) {arr = j.value}
                    }
                    else if(j.value.trim()) {arr = j.value.trim()}
                }
           }
          if(arr != null) c[nm] = arr;
        }

        else {
            let j = m[0];
                if(j.getAttribute('c')) {
                    let n = j.getAttribute('c');
                    if(j.type == 'checkbox') {
                        if(j.checked) {c[n] = j.value}
                        else {c[n] = j.checked}
                    }
                    else if (j.type == 'radio') {
                        if(j.checked) {c[n] = j.value}
                    }
                    else if(j.value.trim()) {c[n] = j.value.trim()}
                }
        }
        
        if(i == f.length-1) {
        //console.log(c);
        validate(c);
        }
    }
}

let count1 = 0;

function validate(c) {
    const required = {first_name: 0, last_name: 0, email: 0, secret_key:0, prefer: 0, have_read: 0, ladder: 0, payment_method: 0, rating_type: 0}
    const not_required = ['phone']
    let flds = document.querySelectorAll(`input[c]`)
    for (let ir = 0; ir < flds.length; ir++) {
      let anc1 = flds[ir].closest(".wrap");
      if(!anc1.classList.contains('h') && not_required.includes(flds[ir].getAttribute('c')) == false) {
        required[flds[ir].getAttribute('c')] = 0;
      }
     if(ir == flds.length-1) {
            
      // console.log(required);
      let ks = Object.keys(c);
      let matchks = Object.keys(required)
      let aj = {t: [], c: []}, lsm = 0;
      for (let i = matchks.length - 1; i > -1; i--) {
          if(!ks.includes(matchks[i])) {
              lsm ++;
              //console.log(matchks[i]);
              let qs = document.querySelectorAll(`[c=${matchks[i]}]`);
              for (let ib = 0; ib < qs.length; ib++) {
              let anc = qs[ib].closest(".wrap");
              //console.log(anc);
              let atrs = {placeholder: qs[ib].placeholder}
              anc.classList.add('awaiting'); qs[ib].placeholder = 'Required';
              qs[ib].addEventListener('input', () => {anc.classList.remove('awaiting'); if(qs[ib].getAttribute('dplaceholder')) {qs[ib].placeholder = qs[ib].getAttribute('dplaceholder')} else {qs[ib].placeholder = ''}})
              qs[ib].focus()
              }
  
              
              //else {alert(lsm)}
              
              //if(i == 0) {console.log(aj); if(aj.t.length < 1 && aj.c[0] != null) {alert (`Please select an option`)}}
          }

          if(i==0) {
            let sjen = byId('int_confirm_yes')
            let sjenp = sjen.closest(".wrap");
            if(!sjenp.classList.contains('h') && !sjen.checked) {sjenp.classList.add('awaiting'); sjen.focus(); return false}
            else {sjenp.classList.remove('awaiting')}
          }
          if(i==0 && lsm < 1) {

            try{delete c.rating_type;}catch(ex){}
            try{c.first_name = c.first_name.proper(1)}catch(ex){}
            try{c.last_name = c.last_name.proper(1)}catch(ex){}
            try{if(byId('display_name').value.trim()){c.display_name=byId('display_name').value.trim()} else{c.display_name = `${c.first_name} ${c.last_name}`}}catch(ex){}
            try{c.email = c.email.toLowerCase()}catch(ex){}
            /*try{c.emuser = c.email.split('@')[0]}catch(ex){}
            try{c.emdomain = c.email.split('@')[1]}catch(ex){}*/
            try{c.emailx = emailx(c.email)}catch(ex){}
            try{c.username = (c.first_name+c.last_name).replace(/\s/g,'').toLowerCase()}catch(ex){}
            try{if(document.querySelector('input[c=fallback_ladder]').closest('.wrap').classList.contains('h')){delete c.fallback_ladder}}catch(ex){}
            try{c.darktheme = ([...document.body.classList].indexOf('dark_theme')>-1)}catch(ex){}
            try{if(c.partner_name){let vd = []; vd.push(c.display_name); vd.push(c.partner_name); vd = vd.sort((a,b)=>a.localeCompare(b)).join(' & '); c.team_name = vd}}catch(ex){}
            console.log(c);
            if(!document.querySelector('form').checkValidity()) return false
            if(!confirm('Do you wish to proceed? You will not be able to go back and edit your responses once submitted (although you can ask me [the administrator] to change them).')) {
             unpulse() 
            return false ; }

            try{if(count1>2){alert('Too many requests'); return false}}catch(ex){}

            try{saveFormInput()}catch(ex){}

            document.body.classList.add('pulse')
            byId('submit_signup').disabled = true
            
            register(c).then(function(res) {
              console.log(res);
              try{ count1 = count1+1; }catch(ex){console.error(ex);};
              try{var viewportmeta = document.querySelector('meta[name="viewport"]');
              if (viewportmeta) {
              viewportmeta.setAttribute('content', 'width=device-width, maximum-scale=1.0, initial-scale=1.0');
              }
              byId('submit_signup').blur()
          }catch(ex){}

             if(!res.error) {
              try{c.secret_key = LZString.compressToBase64(c.secret_key)}catch(ex){}
              saveData('Signups', c)
              .then(function(response) {
               // console.log(response);

               for (let ise = 0; ise < c.ladder.length; ise++) {
                let lder = c.ladder[ise];
                try{
                  let aivx = c.display_name; if(!byId('vbconsent').checked){aivx='anonymous'}
                  let avol = {name: aivx, full_name: `${c.first_name} ${c.last_name}`, ladder: lder, nameladder: `${c.username},${lder}`, rating: `${c.DUPR}`, partner_name: c.partner_name, team_name: c.team_name}; 
                  //alert(JSON.stringify(avol))
                  saveData('viewable_Signups', avol)
                 }catch(ex){console.error(ex);}
               }
               

               unpulse()
                if(!response.error) {
                try{snEm({email:['SPLinfo+newsignup@riseup.net'], subject: 'New Signup', bod: `Hi there,%0AJust wanted to let you know that ${c.first_name} ${c.last_name} just signed up for ${c.ladder}%0AHave a nice day!%0ABot`})}catch(ex){console.error(ex);}
                localStorage.setItem(brick('$_hasRegistered'+ladderSeason), true); 
                document.body.innerHTML = `Successfully submitted! You should receive a confirmation email shortly. <a href="javascript:void(0)" onclick="noConfirmationEmail()">Didn't get one?</a> Once you have confirmed your email, you are all set for now. I will send out more information ${JSON.parse(getRound())>0?"before the start of the next round":"in the week leading up to the first round. In the meantime, please encourage your friends to sign up as well if you are able to. The more players are involved, the better the experience will be for everyone."}<br><br><a href='signup.html#register'>&larr; Back to Signup Page</a>`;
                document.title = 'Success'
              }
                else {
                 document.body.innerHTML = `An error occurred. This may be the result of you trying to sign up twice, or you may have used a name or email address which was already taken. Click <a href='mailto:SPLwebsitebugs@riseup.net?subject=Bug Report&body=${sendBug(response.error)}'>here</a> to submit a bug report.`;
                 document.title = 'Error'
                }
              })
          }

             else {unpulse(); alert('Registration failed. Please make sure you have provided a valid email address, and a password that is at least 6 characters long.')}
            
          })
    
          
          }
          
      }


      
      


        }

    }
    

    


}


function toggleFallback(f) {
 try{ let c = f.getAttribute('c')
  let cls = document.querySelectorAll(`input[c=${c}]`);
  let sme = { yes: [], maybe: []}
  for (let i = 0; i < cls.length; i++) {
    if(cls[i].nextElementSibling.innerHTML.indexOf('*')>-1) {
      sme.maybe.push(cls[i].checked)
    }
    else {sme.yes.push(cls[i].checked)}

    if (i==cls.length-1) {
      //console.log(sme);
      let p = {wrap: 'fallback_field', for: 'fallback_ladder'}
      if(!sme.yes.includes(true) && sme.maybe.includes(true)) {
            byId(p.wrap).classList.remove('h');
            //document.querySelector(`input[c=${p.for}]`).focus()
      }
      else {byId(p.wrap).classList.add('h');}
    }

  }

 } catch(ex){}

 try{byId('prefer_team').checked?byId('partner_field').classList.remove('h'):byId('partner_field').classList.add('h')}catch(ex){console.log(ex);}

}


function toggleIntConfirm(f) {
 try{ let c = f.getAttribute('c')
  let cls = document.querySelectorAll(`input[c=${c}]`);
  let sme = { yes: [], maybe: []}
  for (let i = 0; i < cls.length; i++) {
    if(cls[i].nextElementSibling.innerHTML.indexOf('*')>-1) {
      sme.maybe.push(cls[i].checked)
    }
    else {sme.yes.push(cls[i].checked)}

    if (i==cls.length-1) {
      //console.log(sme);
      let p = {wrap: 'confirm_intention_field', for: 'int_confirm_yes'}
      if(sme.maybe.includes(true)) {
            byId(p.wrap).classList.remove('h');
            //document.querySelector(`input[id=${p.for}]`).focus()
      }
      else {byId(p.wrap).classList.add('h');}
    }

  }

} catch(ex){}

}

function toggleFields(f, tg) {
 try{ let hg = document.querySelectorAll(`[name=${f.name}]`)
  for (let i = 0; i < hg.length; i++) {
   try{
    let p;
    if(tg) {p = tg.split('/')}
    else p = hg[i].getAttribute('toggle').split('/');
    p = {wrap: p[0], for: p[1]}
    //console.log(p);
    if(hg[i].checked) {
      byId(p.wrap).classList.remove('h');
      document.querySelector(`input[c=${p.for}]`).focus()
    }
    else {
      byId(p.wrap).classList.add('h')
    }
   }
   catch(ex) {}
  }
} catch(ex){}
}

function unpulse() {
  try{const viewportmeta = document.querySelector('meta[name=viewport]'); viewportmeta.setAttribute('content', "initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"); }
  catch(ex){console.log(ex)}
  try{document.body.classList.remove('pulse')
  byId('submit_signup').disabled = false}
  catch(ex){}
}


window.onload = ()=> {

  try{getsignups()}catch(ex){console.error(ex);}

  try{document.documentElement.style.overflowX = 'hidden';}catch(ex){}
  try{byId('passct').style.width = `calc(100% + ${getComputedStyle(byId('vbtoggle')).width})`; window.addEventListener('resize',function(){ try{byId('passct').style.width = `calc(100% + ${getComputedStyle(byId('vbtoggle')).width})`}catch(ex){}}) }catch(ex){console.error(ex);}
  
  try{document.querySelector('input[c]').focus();}catch(ex){}

  try{
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if(isSafari) {let cb = document.querySelectorAll('input[type="checkbox"],input[type="radio"]')
     for (let i = 0; i < cb.length; i++) {
      cb[i].classList.add('safari-input')
     }
  }
  }
  catch(ex){}

  try{
    let hasreg = localStorage.getItem(brick('$_hasRegistered'+ladderSeason))
    let lgdin = lsdciph(localStorage.getItem(brick('$_authenticated_user'+ladderSeason)))
    let svdin = lsdciph(localStorage.getItem(brick('$_signupFormInput'+ladderSeason)))
    console.log(svdin);
    if(hasreg) {
      if(location.hash.indexOf('view-responses')<0 && location.href.indexOf('invite=')<0) {
        document.body.innerHTML = 'You have already signed up. Click <a href="?reload=1#view-responses">here</a> to view your responses.';
      }
      else if(location.href.indexOf('invite=')<0) {
        if(!svdin) {
          document.body.innerHTML = 'Something went wrong ☹️';
        }
      //document.body.innerHTML = `You have already registered. Click <a href='javascript: void(0)'>here</a> to see your reponses.`
      let dhn = document.querySelectorAll('input');
      let sbmt = document.querySelector('input[type=submit]');
      sbmt.parentNode.removeChild(sbmt);
      for (let i = 0; i < dhn.length; i++) {
        dhn[i].setAttribute('disabled', 'true')
      }
     }
    }
  }
  catch(ex){}
 
  try{
    let sin = lsdciph(localStorage.getItem(brick('$_signupFormInput'+ladderSeason)));
    let sins = Object.keys(sin);

    for (let i = 0; i < sins.length; i++) {
      let val = sin[sins[i]];
      let svn = document.querySelector(`input[c=${sins[i]}]`);
      if(svn.type == 'radio') {
          if(typeof val == 'number') {
            [...svn.closest(".wrap").querySelectorAll(`input[c=${sins[i]}]`)][val].checked = 'true';
          }
      }
      else if(svn.type == 'checkbox') {
          let sune = document.querySelectorAll(`input[c=${sins[i]}]`)
          for (let ix = 0; ix < sune.length; ix++) {
            let sej =  [...sune[ix].closest(".wrap").querySelectorAll(`input[c=${sins[i]}]`)].indexOf(sune[ix]);
          if(sej > -1) {
            if(val[sej] == true) {sune[ix].checked = true}
          }    
          }
        
      }
      else svn.value = val
    }
  } catch(ex){
  }

  setTimeout(function(){
    let jh = document.querySelectorAll('input[toggle]');
  //console.log(jh);
  for (let i = 0; i < jh.length; i++) {
    if(jh[i].checked) {
      //console.log(jh[i]);
      toggleFields(jh[i])}
  }
  },10)

  setTimeout(function(){
    let jh = document.querySelector('input[c=ladder]');
    toggleFallback(jh)
  },10)

  setTimeout(function(){
    let jh = document.querySelector('input[c=ladder]');
    toggleIntConfirm(jh)
  },10)

  try {
    let zminput = document.querySelectorAll('input')
    for (let i = 0; i < zminput.length; i++) {
      zminput[i].addEventListener('blur', function() {
        var viewportmeta = document.querySelector('meta[name="viewport"]');
        if (viewportmeta) {
        viewportmeta.setAttribute('content', 'width=device-width, maximum-scale=1.0, initial-scale=1.0');
        }
      })
      zminput[i].addEventListener('focus', function() {
        var viewportmeta = document.querySelector('meta[name="viewport"]');
        if (viewportmeta) {
        viewportmeta.setAttribute('content', 'width=device-width, maximum-scale=1.0, initial-scale=1.0');
        }
      })
    }
  
  } catch (ex) {
    console.error(ex);
  }
}

function saveFormInput() {
  try{
    if(location.href.indexOf('&save=no') < 0 || location.href.indexOf('?save=no') < 0) {
      let sn = document.querySelectorAll('input[c]'), kaim = {}
 
      for (let i = 0; i < sn.length; i++) {
       let ah = sn[i].getAttribute('c');
       if(sn[i].type == 'radio') {
         if(sn[i].checked) kaim[ah] = [...sn[i].closest(".wrap").querySelectorAll(`input[c=${ah}]`)].indexOf(sn[i])}
       else if(sn[i].type == 'checkbox') {
         let  snei = document.querySelectorAll(`input[c=${sn[i].getAttribute('c')}]`)
         let checkArr = Array.from(snei, node => node.checked);
         kaim[ah] = checkArr;
       }
       else {kaim[ah] = sn[i].value}
 
       if(i == sn.length-1 && location.hash.indexOf('view-responses')<0) {
         kaim = JSON.stringify(kaim)
         localStorage.setItem(brick('$_signupFormInput'+ladderSeason), lsciph(kaim))
       }
      }
   }
 }
 catch(ex) {}
}

window.onbeforeunload = function() {
  // return "Are you sure you want to leave. Changes may not be saved?";
};
window.onunload = function() {
  saveFormInput()
};


function viewSignups(l) {
  document.activeElement.style.cursor = 'progress'
   ptc('viewable_Signups', '*', 'ladder', l).then(res=>{
     //console.log(res);
     if(res.error){alert(res.error.message);return false}
     !res.error && (res=res.data)
     let pepl = '', aox, aslc = {true:'s',false:''}
     if(res.length>0) {
      aox = `${res.length} signup${aslc[res.length>1]} so far:`
      pepl = res.map(a=>`<small><i>${a.name}</i></small><br>`)
      pepl = `<div style=''>${pepl.join('\n')}</div>`
     }
     else {aox = 'No signups yet...'; pepl=''}
     let child = window.open("about:blank",rdString(10));
      child.document.write(`<html>
      <head><title>Signups => ${l} Ladder</title><style>html,body{font-size:1.25rem}</style></head>
      <body style='background:${getComputedStyle(document.body).background};color:${getComputedStyle(document.body).color};'><h2 style='font-family:cursive;text-decoration:underline'>${l} Ladder</h2><p>${aox}</p>${pepl}</body>
      </html>`);
      document.activeElement.style.cursor = '';
   })
}


const signupsObject = {}

function getsignups() {
    ptc('viewable_Signups', '*', 'awx', '1').then(res=>{
        if(res.error){console.error(res.error); return false}
        else {res=res.data}
        let ldo = Object.keys(laddersOffered)
        for (let i = 0; i < ldo.length; i++) {
            signupsObject[ldo[i]] = res.filter(e=>e.ladder==ldo[i])
        }
    })
}

function showSignups(l) {
    document.activeElement.style.cursor = 'progress'
       let res = signupsObject[l]
       let pepl = '', aox, aslc = {true:'s',false:''}
       if(res.length>0) {
        aox = `${res.length} signup${aslc[res.length>1]} so far:`
        pepl = res.map(a=>`<small><i>${a.name}</i></small><br>`)
        pepl = `<div style=''>${pepl.join('\n')}</div>`
       }
       else {aox = 'No signups yet...'; pepl=''}
       let child = window.open("about:blank",rdString(10));
        child.document.write(`<html>
        <head><title>Signups => ${l} Ladder</title><style>html,body{font-size:1.25rem}</style></head>
        <body style='background:${getComputedStyle(document.body).background};color:${getComputedStyle(document.body).color};'><h2 style='font-family:cursive;text-decoration:underline'>${l} Ladder</h2><p>${aox}</p>${pepl}</body>
        </html>`);
        document.activeElement.style.cursor = '';
    
  }

  function suggestPartner(inp) {
     try {
      let bya = `${document.querySelector('input[c=first_name]').value}${document.querySelector('input[c=last_name]').value}`.replace(/\s/g,'').toLowerCase();
      let nhcx = signupsObject.Team.filter(a=>a.partner_name.replace(/\s/g,'').toLowerCase()==bya);
      let datl = byId('partner_list'); datl.innerHTML = '';
      for (let i = 0; i < nhcx.length; i++) {
        let vae = document.createElement('option');
        vae.value = nhcx[i].name;
        datl.appendChild(vae)
      }
     } catch (ex) {
      console.log(ex);
     }
  }

window.addEventListener('keydown', (e) => {
 //if(e.metaKey && e.which == 13) {jsonify()}
})

function ischeckable(c){try{return"radio"==c.type||"checkbox"==c.type}catch(c){return!1}}







async function register(a) {
 let test = document.createElement('a'); test.href = 'authorize.html'
        const { data, error } = await sb.client.auth.signUp({
            email: emailx(a.email),
            password: a.secret_key,
            options: {
                data: a
              }
          })

          return {data: data, error: error}
          
          
    }
  

    function noConfirmationEmail() {
      alert(`Please check both your inbox and spam folders just in case. If there's nothing there, it's possible your email provider can't receive automated emails in this context. Don't worry if this is the case. I will be able to see that you didn't receive it, and will send you another [non-automated] one ${JSON.parse(getRound())>0?"as soon as possible":"after the initial registration deadline"}`)
    }


    