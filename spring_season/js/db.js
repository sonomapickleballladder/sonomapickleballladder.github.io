document.addEventListener("DOMContentLoaded",function() {
    nifnok()
    try{showLadders()}catch(ex){}
    try{showActions()}catch(ex){}
    document.documentElement.style.opacity = 0;
    unfade(document.documentElement,5)
})

function showLadders() {
   let j = lsdciph(localStorage.getItem(brick('$_authenticated_user'+ladderSeason)))
   let ladders = j.ladder
   for (let i = 0; i < ladders.length; i++) {
      let s = ''
      if(laddersOffered[ladders[i]].min == null || laddersOffered[ladders[i]].min >0) s= '*'
      let trgt = ''
      if(laddersOffered[ladders[i]].url.length>3) {trgt = 'target=_blank'}
    byId('my_ladders').innerHTML += `<a class="nav" ${trgt} href="${laddersOffered[ladders[i]].url}">${ladders[i]} Ladder${s} &#8599;</a>`
   }
}


function showActions() {
  let j = lsdciph(localStorage.getItem(brick('$_authenticated_user'+ladderSeason)))
  byId('actions').innerHTML += `<p><span style='color: gray'>Signed in as <i>${j.first_name} ${j.last_name}</i></span></p>`
  byId('actions').innerHTML += `<button class="warn" onclick='lgot()'>Sign out</button>`
  //byId('notifications').innerHTML += `<p>You have no new messages.</p>`
  let test = document.createElement('a'); test.href = 'login.html'
//  let clr = window.getComputedStyle(document.body).color;
  byId('notifications').innerHTML += `<details><summary>Your Login Credentials</summary><p>Hi ${j.first_name},<br>Your secret key is: <span class='copy' onclick='copy(this)'>${j.secret_key}</span><br>You can use this link: <span id='loginlink' class='copy' onclick='copy(this)'>${test.href}?email=${encodeURI(j.email)}&key=${encodeURI(j.secret_key)}</span> to login.<br>Theo<br><br><small>P.S. Please keep track of your secret key! Consider bookmarking your Login Link or <a href='mailto:${j.email}?subject=Pickleball%20Ladder%20|%20Login%20Credentials&body=Hi%20${j.first_name},%20%20%20%20%20%20%20%20%20%20%20%20%0AYour%20secret%20key%20is:%20${j.secret_key}%20%20%20%20%20%20%20%20%20%20%20%20%0AYou%20can%20use%20this%20link:%20${test}?email=${encodeURI(j.email)}%26key=${encodeURI(j.secret_key)}%26autologin%20to%20login.'>emailing yourself this message</a> if you think you might forget it.</small></p></details>`;

  let emst = '', star = ''

 try{ if(j.ladder.toString().toLowerCase().split(',').includes('open')) {
   emst = 'Other '
   if (j.payment_method.toLowerCase() == 'paypal') {
   byId('notifications').innerHTML += `
   <details>
   <summary>Open Ladder Payment</summary>
   <p>Hi ${j.first_name},<br>Please pay at least $40 to <span class='copy' onclick='copy("SPLdeposits@riseup.net", 0, this)'>SPLdeposits@riseup.net</span> via <a rel="noreferrer" target="_blank" href="https://paypal.me/vq90lhInA1pD/40">PayPal</a> if you haven't already to complete your registration.<br>Thanks,<br>Theo</small></p>
   </details>`
   }
   else {
      emst = 'Starred '
      star = '*'
   }
  }
} catch(ex){console.log(ex);}

  let plur = ''
  let hk = j.ladder;
  //console.log(hk);
  if(hk.length>1) plur = 's'
  if(hk.indexOf('Open')>-1) hk.splice(hk.indexOf('Open'),1)
 // console.log(hk);
  let pmap = {'': 'it', 's': 'they'}, pmap2 = {'': "doesn't", 's': "don't"}

  if(hk.length == 1 && j.fallback_ladder == 'Yes') {
   byId('notifications').innerHTML += `
   <details>
   <summary>${hk[0]} Ladder Payment</summary>
   <p>Hi ${j.first_name},<br>Please pay at least $40 to <span class='copy' onclick='copy("SPLdeposits@riseup.net", 0, this)'>SPLdeposits@riseup.net</span> via <a rel="noreferrer" target="_blank" href="https://paypal.me/vq90lhInA1pD/40">PayPal</a> if you haven't already to complete your registration. (If the ${hk[0]} Ladder doesn't end up materializing, your payment and registration will be transferred to the Open Ladder).<br>Thanks,<br>Theo</small></p>
   </details>`
  }

 else if(hk.length>0) {
   byId('notifications').innerHTML += `
   <details>
   <summary>${emst}Ladder${star} Payment${plur}</summary>
   <p>Hi ${j.first_name},<br>Please wait to pay for the ${emst}Ladder${plur}${star} so that I don't have to refund you if ${pmap[plur]} ${pmap2[plur]} end up happening.<br>Thanks,<br>Theo</small></p>
   </details>`
  }

  let nmb = byId('notifications').querySelectorAll('details').length

  //console.log(nmb);

  byId('notifications').querySelector('.under').innerHTML += ` (${nmb})`
  //let map = {true: 1, false:0}
 // try{let t = get_darkmode(); byId('loginlink').innerHTML=byId('loginlink').innerText.replace(/(darkmode=1)/g,'').replace(/(darkmode=0)/g,'')+`&darkmode=${map[t]}`; byId('loginlink').innerHTML = byId('loginlink').innerText.replace(/&+/g,'&')}catch(ex){console.log(ex);}

  
}


function lgot() {
   if(!confirm('Are you sure?')){return false}
   localStorage.removeItem(brick('$_authenticated_user'+ladderSeason))
   localStorage.removeItem(ladderId.ls+'logged_in_user')
   localStorage.removeItem(ladderId.ls+'ArprO_lA3RZxD5z')
   location.replace('login.html')
}

function toggleDarkMode(t) {
   if(t) {document.body.classList.remove('light_theme');document.body.classList.add('dark_theme');}
   else {document.body.classList.remove('dark_theme');document.body.classList.add('light_theme');}
   localStorage.setItem(brick('$_darkMode'), t)
   let map = {true: 1, false:0}
   try{byId('loginlink').innerHTML=byId('loginlink').innerText.replace(/(darkmode=1)/g,'').replace(/(darkmode=0)/g,'')+`&darkmode=${map[t]}`; byId('loginlink').innerHTML = byId('loginlink').innerText.replace(/&+/g,'&')}catch(ex){}
}