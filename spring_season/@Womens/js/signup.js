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
                    else if(j.value) {arr = j.value}
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
                    else if(j.value) {c[n] = j.value}
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
            try{c.email = c.email.toLowerCase()}catch(ex){}
            try{c.username = (c.first_name+c.last_name).replace(/\s/g,'').toLowerCase()}catch(ex){}
            try{if(document.querySelector('input[c=fallback_ladder]').closest('.wrap').classList.contains('h')){delete c.fallback_ladder}}catch(ex){}
            //console.log(c);
            if(!document.querySelector('form').checkValidity()) return false
            if(!confirm('Do you wish to proceed? You will not be able to go back and edit your responses once submitted.')) {
             unpulse() 
            return false ; }

            try{if(count1>2){alert('Too many requests'); return false}}catch(ex){}

            try{saveFormInput()}catch(ex){}

            document.body.classList.add('pulse')
            byId('submit_signup').disabled = true
            
            register(c).then(function(res) {
              //console.log(res);
              try{ count1 = count1+1; }catch(ex){console.log(ex);};
              try{var viewportmeta = document.querySelector('meta[name="viewport"]');
              if (viewportmeta) {
              viewportmeta.setAttribute('content', 'width=device-width, maximum-scale=1.0, initial-scale=1.0');
              }
              byId('submit_signup').blur()
          }catch(ex){}

             if(!res.error) {
              saveData('Signups', c)
              .then(function(response) {
               // console.log(response);
               unpulse()
                if(!response.error) {
                localStorage.setItem(brick('$_hasRegistered'+ladderSeason), true); 
                document.write('<pre class="abs-center" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: larger; word-wrap: break-word; white-space: pre-wrap;">Successfully submitted. You should receive a link to confirm your email address shortly. Please check both your inbox and spam folders.</pre>'); 
                document.title = 'Success'
              }
                else {
                 document.write(`<pre class="abs-center" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: larger; word-wrap: break-word; white-space: pre-wrap;">An error occurred. Click <a href='mailto:SPLwebsitebugs@riseup.net?subject=Bug Report&body=${sendBug(response.error)}'>here</a> to submit a bug report.</pre>`);
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
            document.querySelector(`input[c=${p.for}]`).focus()
      }
      else {byId(p.wrap).classList.add('h');}
    }

  }

 } catch(ex){}

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
            document.querySelector(`input[id=${p.for}]`).focus()
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
  try{document.body.classList.remove('pulse')
  byId('submit_signup').disabled = false}
  catch(ex){}
}


window.onload = ()=> {
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
        document.write('<pre class="abs-center" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: larger; word-wrap: break-word; white-space: pre-wrap;">You have already signed up. Click <a href="?reload=1#view-responses">here</a> to view your responses.</pre>');
      }
      else if(location.href.indexOf('invite=')<0) {
        if(!svdin) {
          document.write('<pre class="abs-center" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: larger; word-wrap: break-word; white-space: pre-wrap;">Something went wrong ☹️</pre>');
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
    console.log(ex);
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
  return "Are you sure you want to leave. Changes may not be saved?";
};
window.onunload = function() {
  saveFormInput()
};





window.addEventListener('keydown', (e) => {
 //if(e.metaKey && e.which == 13) {jsonify()}
})

function ischeckable(c){try{return"radio"==c.type||"checkbox"==c.type}catch(c){return!1}}







async function register(a) {
 let test = document.createElement('a'); test.href = 'authorize.html'
        const { data, error } = await sb.client.auth.signUp({
            email: a.email,
            password: a.secret_key,
            options: {
                data: a
              }
          })

          return {data: data, error: error}
          
          
    }
  
  

  

    