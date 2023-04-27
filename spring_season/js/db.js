document.addEventListener("DOMContentLoaded",function() {
    if(nifnok()){unfade(document.documentElement,5)}
    try{showLadders()}catch(ex){}
    try{showActions()}catch(ex){}
    document.documentElement.style.opacity = 0;
})

function showLadders() {
   let j = lsdciph(localStorage.getItem(brick('$_authenticated_user'+ladderSeason)))
   let ladders;
   try{ladders = JSON.parse(j.ladder)} catch(ex){ladders = j.ladder}
   // byId('my_ladders').innerHTML += `<a class="nav" target="_blank" style="opacity: 0.75;" href="/">Ladder Homepage &#8599;</a>`
   if(ladders.indexOf('Open')<0) {
     // byId('my_ladders').innerHTML += `<a class="nav" target="_blank" style="background-color: rgba(200,200,200,0.75)" href="./">Spring Ladder Season Homepage &#8599;</a>`
   }
   for (let i = 0; i < ladders.length; i++) {
      let s = ''
      if((laddersOffered[ladders[i]].min == null || laddersOffered[ladders[i]].min >0) && ladders[i] !='Womens') s= '*'
      let trgt = ''
      if(laddersOffered[ladders[i]].url.length>3) {trgt = 'target=_blank'}
    if(s!='*') byId('my_ladders').innerHTML += `<a class="nav" ${trgt} href="${laddersOffered[ladders[i]].url}">${ladders[i]} Ladder${s} &#8599;</a>`
    else byId('my_ladders').innerHTML += `<a class="nav" style="opacity: 0.75; text-decoration:line-through;" ${trgt}>${ladders[i]} Ladder${s} &#8599;</a>`
   }
}


function showActions() {
  let j = lsdciph(localStorage.getItem(brick('$_authenticated_user'+ladderSeason)))
  try{j.ladder = JSON.parse(j.ladder)} catch(ex){} 
  byId('actions').innerHTML += `<p><span style='color: gray'>Signed in as <i>${j.first_name} ${j.last_name}</i></span></p>`
  byId('actions').innerHTML += `<button class="warn" onclick='lgot()'>Sign out</button>`
  //byId('notifications').innerHTML += `<p>You have no new messages.</p>`
  let test = document.createElement('a'); test.href = `login${protoMap[location.protocol]}`
//  let clr = window.getComputedStyle(document.body).color;
  byId('notifications').innerHTML += `<details><summary>Your Login Link</summary>
  <p>Hi ${j.first_name},<br>You can use this link: <span id='loginlink' class='copy' onclick='copy(this)'>${test.href}?spl=${lsciph('email='+encodeURI(j.email)+'&key='+encodeURI(j.secret_key))}</span> to login.
  <br>Theo<br><br><small>P.S. Please keep track of your secret key! Consider bookmarking or <a href='mailto:${j.email}?subject=Pickleball%20Ladder%20|%20Login%20Link&body=I%20can%20use%20this%20link:%20${test}?spl=${lsciph('email='+encodeURI(j.email)+'%26key='+encodeURI(j.secret_key))}%20to%20login.'>emailing yourself</a> your login link if you think you might forget it.</small></p></details>`;

  let emst = '', star = ''

 try{ if(j.ladder.toString().toLowerCase().split(',').includes('open')) {
   emst = 'Other '
   if (j.payment_method.toLowerCase() == 'paypal') {
   byId('notifications').innerHTML += `
   <details>
   <summary>Open Ladder Payment</summary>
   <p>Hi ${j.first_name},<br>If you haven't done so already, please pay at least $40 to <span class='copy' onclick='copy("SPLdeposits@riseup.net", 0, this)'>SPLdeposits@riseup.net</span> via <a rel="noreferrer" target="_blank" href="https://paypal.me/vq90lhInA1pD/40">PayPal</a> to complete your registration.<br>Thanks,<br>Theo</small></p>
   </details>`
   }
   else {
      byId('notifications').innerHTML += `
   <details>
   <summary>Open Ladder Payment</summary>
   <p>Hi ${j.first_name},<br>If you haven't done so already, please pay me or my dad (Adam) at least $40 in cash or check to complete your registration. (Click <a target="_blank" href="pay_options${protoMap[location.protocol]}">here</a> for times we will be at the courts). If you pay my dad, please <a href="mailto:SPLinfo+payment@riseup.net?subject=Spring Ladder Payment&body=Hi Theo,%0AI paid your dad $amount via cash/check.%0AYour name">email me</a> so that I know.<br>Thanks,<br>Theo</small></p>
   </details>`
      emst = 'Starred '
      star = '*'
   }
  }
} catch(ex){console.log(ex);}

try{ if(j.ladder.toString().toLowerCase().split(',').includes('womens')) {
   byId('notifications').innerHTML += `
   <details>
   <summary>Women's Ladder is on!</summary>
   <p>The Women's Ladder has gotten enough signups to be implemented. I am currently working on creating the website and spreadsheets for it. Since it is happening, the final registration deadline is extended through next Tuesday. So if you know of anyone else who might like to join, please let them know that it's not too late.</p>
   </details>`
   emst = 'Other '
   if (j.payment_method.toLowerCase() == 'paypal') {
   byId('notifications').innerHTML += `
   <details>
   <summary>Women's Ladder Payment</summary>
   <p>Hi ${j.first_name},<br>If you haven't done so already, please pay at least $40 to <span class='copy' onclick='copy("SPLdeposits@riseup.net", 0, this)'>SPLdeposits@riseup.net</span> via <a rel="noreferrer" target="_blank" href="https://paypal.me/vq90lhInA1pD/40">PayPal</a> to complete your registration.<br>Thanks,<br>Theo</small></p>
   </details>`
   }
   else {
      byId('notifications').innerHTML += `
   <details>
   <summary>Women's Ladder Payment</summary>
   <p>Hi ${j.first_name},<br>If you haven't done so already, please pay me or my dad (Adam) at least $40 in cash or check to complete your registration. (Click <a target="_blank" href="pay_options${protoMap[location.protocol]}">here</a> for times we will be at the courts). If you pay my dad, please <a href="mailto:SPLinfo+payment@riseup.net?subject=Spring Ladder Payment&body=Hi Theo,%0AI paid your dad $amount via cash/check.%0AYour name">email me</a> so that I know.<br>Thanks,<br>Theo</small></p>
   </details>`
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
  if(hk.indexOf('Womens')>-1) hk.splice(hk.indexOf('Womens'),1)
 // console.log(hk);
  let pmap = {'': 'it', 's': 'they'}, pmap2 = {'': "doesn't", 's': "don't"}

  if(hk.length>0) {
   
   byId('notifications').innerHTML += `
   <details>
   <summary>Ladder Statuses</summary>
   <p>Hi ${j.first_name},<br>Certain ladders which you signed up for (those which are <s>struck through</s> in the <a href="#my_ladders">navigation bar</a>) did not get enough signups to go ahead.
   If you signed up for any others which ARE going ahead (either the Open or the Women's), you will still be in those. And if you indicated that you wanted to be transferred to the Open Ladder if none of the ladders you selected materialized, that has been done.
   <br>The ladders you are currently in (if any) are shown not crossed out in the <a href="#my_ladders">navigation bar</a>. You are welcome to email me before the initial registration deadline of Tuesday April 25th if you would like to switch, add, or remove a ladder.
   <br>Theo</small></p>
   </details>`
  }

  if(hk.length == 1 && j.fallback_ladder == 'Yes' && star !='*') {
   
  /*  byId('notifications').innerHTML += `
   <details>
   <summary>${hk[0]} Ladder Payment</summary>
   <p>Hi ${j.first_name},<br>Please pay at least $40 to <span class='copy' onclick='copy("SPLdeposits@riseup.net", 0, this)'>SPLdeposits@riseup.net</span> via <a rel="noreferrer" target="_blank" href="https://paypal.me/vq90lhInA1pD/40">PayPal</a> If you haven't done so already to complete your registration. (If the ${hk[0]} Ladder doesn't end up materializing, your payment and registration will be transferred to the Open Ladder).<br>Thanks,<br>Theo</small></p>
   </details>` */
  }

 else if(hk.length>0 && star !='*') {
 /*  byId('notifications').innerHTML += `
   <details>
   <summary>${emst}Ladder${star} Payment${plur}</summary>
   <p>Hi ${j.first_name},<br>Please wait to pay for the ${emst.toLowerCase()}Ladder${plur}${star} so that I don't have to refund you if ${pmap[plur]} ${pmap2[plur]} end up happening.<br>Thanks,<br>Theo</small></p>
   </details>` */
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
   
   for (let i = 0; i < Object.keys(laddersOffered).length; i++) {
      let jld = laddersOffered[Object.keys(laddersOffered)[i]]
      localStorage.removeItem(jld.ls+'logged_in_user')
      localStorage.removeItem(jld.ls+'ArprO_lA3RZxD5z')
      localStorage.removeItem(jld.ls+'session6')
   }
   location.replace(`login${protoMap[location.protocol]}`)
}

function toggleDarkMode(t) {
   if(t) {document.body.classList.remove('light_theme');document.body.classList.add('dark_theme');}
   else {document.body.classList.remove('dark_theme');document.body.classList.add('light_theme');}
   localStorage.setItem(brick('$_darkMode'), t)
   let map = {true: 1, false:0}
   try{byId('loginlink').innerHTML=byId('loginlink').innerText.replace(/(darkmode=1)/g,'').replace(/(darkmode=0)/g,'')+`&darkmode=${map[t]}`; byId('loginlink').innerHTML = byId('loginlink').innerText.replace(/&+/g,'&')}catch(ex){}
}