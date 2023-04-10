function jsonify() {
    let c = {};
    let f = document.querySelector('form').querySelectorAll('.wrap');
    for (let i = 0; i < f.length; i++) {

        let m = f[i].querySelectorAll('input');

        if(m.length > 1) {
            let arr = [], nm = m[0].getAttribute('c');
            if(m[0].type == 'radio') arr= null;
            for (let i2 = 0; i2 < m.length; i2++) {
                let j = m[i2];
                if(j.getAttribute('c')) {
                    let n = j.getAttribute('c');
                    if(j.type == 'checkbox') {
                        if(j.checked) {arr.push(j.value)}
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
        console.log(c);
        validate(c);
        }
    }
}


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
              if(1==0) return false;
              }
  
              
              //else {alert(lsm)}
              
              //if(i == 0) {console.log(aj); if(aj.t.length < 1 && aj.c[0] != null) {alert (`Please select an option`)}}
          }

          if(i==0 && lsm < 1) {

            try{delete c.rating_type;}catch(ex){}
            try{c.first_name = c.first_name.proper(1)}catch(ex){}
            try{c.last_name = c.last_name.proper(1)}catch(ex){}
            try{c.username = (c.first_name+c.last_name).replace(/\S/g,'').toLowerCase()}catch(ex){}

            register(c).then(function(res) {

             if(!res.error) saveData('Signups', c)

             else alert('Registration failed')
            
          })
    
          
          }
          
      }


      
      


        }

    }
    

    


}





function toggleFields(f) {
  let hg = document.querySelectorAll(`[name=${f.name}]`)
  for (let i = 0; i < hg.length; i++) {
   try{
    let p = hg[i].getAttribute('toggle').split('/');
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
}


window.onload = ()=> {
  document.querySelector('input[c]').focus();
 
  try{
    let sin = JSON.parse(localStorage.getItem(ladderId.ls+'formInput'));
    let sins = Object.keys(sin);

    for (let i = 0; i < sins.length; i++) {
      let val = sin[sins[i]];
      let svn = document.querySelector(`input[c=${sins[i]}]`);
      if(svn.type == 'radio') {
          if(typeof val == 'number') {
            [...svn.closest(".wrap").querySelectorAll(`input[c=${sins[i]}]`)][val].checked = 'true';
          }
      }
      else svn.value = val
    }
  } catch(ex){
    console.log(ex);
  }

  setTimeout(function(){
    let jh = document.querySelectorAll('input[toggle]');
  //console.log(jh);
  for (let i = 0; i < jh.length; i++) {
    if(jh[i].checked) {
      console.log(jh[i]);
      toggleFields(jh[i])}
  }
  },10)
}


window.addEventListener('beforeunload', e => {
 try{
   if(location.href.indexOf('&save') > -1 || location.href.indexOf('?save') > -1) {
     let sn = document.querySelectorAll('input[c]'), kaim = {}

     for (let i = 0; i < sn.length; i++) {
      let ah = sn[i].getAttribute('c');
      if(sn[i].type == 'radio') {
        if(sn[i].checked) kaim[ah] = [...sn[i].closest(".wrap").querySelectorAll(`input[c=${ah}]`)].indexOf(sn[i])}
      else {kaim[ah] = sn[i].value}

      if(i == sn.length-1) {
        kaim = JSON.stringify(kaim)
        localStorage.setItem(ladderId.ls+'formInput', kaim)
      }
     }
  }
}
catch(ex) { }

    e.preventDefault()
    return e.returnValue = "Are you sure you want to exit? Changes will not be saved";
  });



window.addEventListener('keydown', (e) => {
  if(e.metaKey && e.which == 13) {jsonify()}
})

function ischeckable(c){try{return"radio"==c.type||"checkbox"==c.type}catch(c){return!1}}







async function register(a) {
    //if(a.trim().length<1) {alert('Invalid Name'); return false;}
    //if(!validateEmail(b)) {alert('Invalid Email'); return false;}
    //if(c.length<6) {alert('Password must be at least 6 characters'); return false;}
      //try{if (b.length<1||c.length<1||d.length<1) {byId('auth_state').innerHTML = 'Error: Missing required input.'; byId('auth_state').style.color = cc(false,0); return false}}catch(ex){}
        const { data, error } = await sb.client.auth.signUp({
            email: a.email,
            password: a.secret_key,
            options: {
                data: a
              }
          })


        /*  if (error) {
            alert(error.message)
            //byId('auth_state').innerHTML = error.status+' Error: '+error.message+'.'; byId('auth_state').style.color = cc(false,0);
          }
  
          else {
            console.log(data);
            alert('Success')
            //byId('auth_state').innerHTML = 'Success!'; byId('auth_state').style.color = cc(false,100);
          }*/

          return {data: data, error: error}
          
          
    }
  
  
    async function login(a,b) {
     try{ if (a.length<1||b.length<1) {byId('auth_state2').innerHTML = 'Error: Missing required input.'; byId('auth_state2').style.color = cc(false,0); return false} } catch(ex){}
        const { data, error } = await sb.client.auth.signInWithPassword({
            email: a,
            password: b,
          })
  
          if (error) {
          alert(error.message)  
          }
  
          else {
            gbstr.user_data = data;
            location.replace('dashboard.html')
          try {
              localStorage.setItem(ladderId.ls+'user_credentials',JSON.stringify({u:LZString.compress(a), p:LZString.compress(b)}));          
             } 
          catch (ex) {
              
            }
          }
          
        }
  
        async function forgotPassword(em, rdr) {
          if(!validateEmail(em)) {alert('Please enter your email address correctly'); return false}
          const { data, error } = await sb.client.auth.resetPasswordForEmail(em, {
            redirectTo: rdr,
          })
          
        }
  
        async function updatePassword(pass) {
          if(pass.length<6) {alert('Password must be at least 6 characters long'); return false}
          const { data, error } = await sb.client.auth.updateUser({password: pass})
          if(error) alert(error);
          else location.replace('login.html')
        }
  
        async function signout() {
          
          let cfrm = confirm('Are you sure?')
  
          if(!cfrm) return false
  
          const { data, error } = await sb.client.auth.signOut()
  
          if(error) {alert(error)}
  
          else {location.replace('login.html')}
  
        }
    
  
        function showpskey(be) {
          let map = {text: ['🙈', 'password'], password: ['👁️', 'text']}
          be.previousElementSibling.type = map[be.previousElementSibling.type][1];
          be.innerHTML = map[be.previousElementSibling.type][0];
          }