function vrfrd(m,k) {
    let nrd = getRound()+1;
    let g = byId('round').value;
    let tx = g.replace(/[0-9]/g,'');
    let prd = parseInt(g.replace(tx,''));
    if(isNaN(nrd)) {
        event.preventDefault(); calert(false,'Hang on!', 'Confirming availability is currently disabled as this Ladder season is not yet active (or has finished). It will be enabled '+Math.abs(frstC)+' days before the first round starts.','notice',0,0,0,0,'1.5em'); return false;
    }
    if(prd<nrd) {
        event.preventDefault(); calert(false,'Error', 'You cannot confirm availability for a current or previous round.',0, 0,0,0,0,'1.5em'); return false;
    }
    if(prd>nrd) {
        event.preventDefault(); calert(false,'Error', 'You may only confirm availability for the next round. Please wait until '+byId('round').children[byId('round').selectedIndex-1].value+' to confirm for '+byId('round').value+'.',0, 0,0,0,0,'1.5em'); return false;
    }

    if(m) {
        try{
            try{if(!byId('agree1').checked){calert(0, '<span style="font-size: x-large">Hang on!</span>', `<span style="font-size: large">You must <a onclick="remvel('.modal__overlay')" href="#attention">understand</a></span>`, 0, 0, '50%',0,0,'0.75em'); return false}}catch(ex){}
          let emes = `mailto:SPLconfirmations@riseup.net?subject=${thisLadder} Ladder | Yes for ${byId('round').value}&body=Confirming that I (${lsdciph(localStorage.getItem(ladderId.ls+'logged_in_user')).name}) am available for ${byId('round').value}.`;
          if(k==false) {emes = `mailto:SPLconfirmations@riseup.net?subject=${thisLadder} Ladder | No for ${byId('round').value}&body=I (${lsdciph(localStorage.getItem(ladderId.ls+'logged_in_user')).name}) am no longer available for ${byId('round').value}.`;}
          byId('emailconfirmlink').href=emes;
        }
        catch(ex) {
            calert(false,'Ah Shucks!','Unknown error.','error')
        }
    }
    
    return true;

}



function vrfid(tmd) {
    if(!Boolean(tmd)){tmd=true}
    document.activeElement.blur();
    let vf = vrfrd();
    if(!vf) return false;
    try{if(!byId('agree1').checked && tmd){calert(0, '<span style="font-size: x-large">Hang on!</span>', `<span style="font-size: large">You must <a onclick="remvel('.modal__overlay')" href="#attention">understand</a></span>`, 0, 0, '50%',0,0,'0.75em'); return false}}catch(ex){}
    let angm = 'serviceWorkers';
    let bw = lsdciph(localStorage.getItem(ladderId.ls+'logged_in_user'));
    let wname = bw.name.replace(/(\s)/g,'').toLowerCase();
    let rnd = parseInt(byId('round').value.split(' ').pop().trim());
    let cky = cipher(LZString.decompressFromEncodedURIComponent(bw.expires));
    let gso = cky(`${rnd}/${wname}`);
    let cgso = cky(`${rnd}/${wname}/${tmd}`);
    //console.log(cgso);
    let injson = {round: rnd, name: bw.name, smvig: bw.token, encoding: gso, encoding3: cgso, is_available: tmd}

    let kf = confirm(`By clicking okay, you are confirming that you (${bw.name}) are available (as defined above) for ${byId("round").value}.\r\n \r\nIf you are not, please hit cancel.`)
    
    if(!kf) {return false}


    setTimeout(function(){saveData('availability2.0', injson).then(function(dn) {

        if(!dn.error) {
            checkstatus();
        //showstatus(true);
        //cfstatus = true;
        let usrt = lsdciph(localStorage.getItem(brick('$_authenticated_user'+ladderSeason)))
        try{usrt = JSON.parse(usrt)}catch(ex){}
        try {
            let nyj = {true: {n:'Womens', ur: '@Womens/'}, false: {n:'Open',ur: '../'}}
            if( (usrt.ladder.includes('Open') && usrt.ladder.includes('Womens')) ) {
                let nf = nyj[thisLadder == 'Open']
                calert(0, `<span style="font-size: large">Successfully confirmed</span>`, `<span style="font-size: larger">Click <a href="${nf.ur}confirm_availability${protoMap[location.protocol]}">here</a> if you wish to also confirm your availability for the ${nf.n} Ladder.</span>`,'notice',0,0,0,0,'1.5em')
            }
        } catch (ex) {}
        }
        else {calert(0,'Server Error', 'Could not proccess your request. Please confirm by email instead.')}
    })},500);

}


function checkstatus() {
    setTimeout(checkstatus, 86400000)
    let kp = lsdciph(localStorage.getItem(ladderId.ls+'logged_in_user'));
    ptc('availability2.0', 'encoding3', 'smvig', kp.token).then(function(res){
        res = res.data
        if(res && res.length>0) {
            //console.log(res);
            //console.log(res);
            let rsje;
            try{rsje = parseInt(byId('round').value.split(' ')[1])}catch(ex){rsje = getRound()+1}
            //console.log(rsje);
            function filter_byround(event) {
                return event.round == getRound();
            }
            
           let dcip = decipher(LZString.decompressFromEncodedURIComponent(kp.expires));
           for (let i = 0; i < res.length; i++) {
            try{let fa = dcip(res[i].encoding3);
            //console.log(parseInt(fa.split('/')[0].trim())===getRound()+1);
            //console.log(fa);
            if(parseInt(fa.split('/')[0].trim())===rsje){ acwom = res[i].encoding3; showstatus(fa); return false};
            if(i==res.length-1) {showstatus('blablabla/giberish/false'); return false;}}catch(ex){}
           }
        }

        else {
           showstatus('blablabla/giberish/false'); return false;
        }
    })
}
let acwom;

function showstatus(h) {
    if(typeof h != "boolean"){h = h.split('/')[2]}
    else{h = JSON.stringify(h)}
    //console.log(h);
    // console.log(map[h.split('/')[2]]);
    byId('confirmationstatus').innerHTML = map.status[h][0];
    byId('confirmationstatus').style.backgroundColor = map.status[h][1];

    byId('webconfirm').innerHTML = map.webconfirm[h][0];
    byId('webconfirm').style.backgroundColor = map.webconfirm[h][1];

    byId('emailconfirmlink').innerHTML = map.emailconfirm[h][0];
    byId('emailconfirmlink').parentNode.style.backgroundColor = map.emailconfirm[h][1];
    byId('emailconfirmlink').parentNode.setAttribute('onclick', `vrfrd('email', ${map.emailconfirm[h][2]})`);

    try{cfstatus = JSON.parse(h);}catch(ex){}


    if(acwom)  {byId('webconfirm').setAttribute('onclick', 'unvrfid()')}
}




function unvrfid(tmd) {
    if(!cfstatus) {cfstatus=false}
    if(!Boolean(tmd)){tmd=!cfstatus}
    document.activeElement.blur();
    let vf = vrfrd();
    if(!vf) return false;
    try{if(!byId('agree1').checked && tmd){calert(0, '<span style="font-size: x-large">Hang on!</span>', `<span style="font-size: large">You must <a onclick="remvel('.modal__overlay')" href="#attention">understand</a></span>`, 0, 0, '50%',0,0,'0.75em'); return false}}catch(ex){}
    let angm = 'serviceWorkers';
    let bw = lsdciph(localStorage.getItem(ladderId.ls+'logged_in_user'));
    let wname = bw.name.replace(/(\s)/g,'').toLowerCase();
    let rnd = parseInt(byId('round').value.split(' ').pop().trim());
    let cky = cipher(LZString.decompressFromEncodedURIComponent(bw.expires));
    //let gso = cky(`${rnd}/${wname}`);
    let cgso = cky(`${rnd}/${wname}/${tmd}`);
    //console.log(cgso);
    let injson = {encoding3: cgso, is_available: tmd}
    
    let mgea = `By clicking okay, you are confirming that you (${bw.name}) are available (as defined above) for ${byId("round").value}.\r\n \r\nIf you are not, please hit cancel.`;
    if(!tmd) {mgea = `By clicking okay, you (${bw.name}) are withdrawing your availability for ${byId("round").value}.\r\n \r\nIf you do not wish to proceed, please hit cancel.`;}
    let kf = confirm(mgea);
    
    if(!kf) {return false}

    //console.log(injson);

    try{byId('confirmationstatus').innerHTML = 'pending...';byId('confirmationstatus').style.backgroundColor=''}catch(ex){}

    setTimeout(function(){declareData('availability2.0', injson, 'encoding3', acwom).then(function(dn) {
      if(!dn.error) {
        checkstatus();
          //  showstatus(tmd)
          //  cfstatus = tmd;
          let usrt = lsdciph(localStorage.getItem(brick('$_authenticated_user'+ladderSeason)))
        try{usrt = JSON.parse(usrt)}catch(ex){}
        try {
            let nyj = {true: {n:'Womens', ur: '@Womens/', tp: 'confirm'}, false: {n:'Open',ur: '../', tp: 'withdraw'}}
            if( (usrt.ladder.includes('Open') && usrt.ladder.includes('Womens')) ) {
                let nf = nyj[thisLadder == 'Open']
               // console.log(`Successfully updated`, `Click <a href="${nf.ur}confirm_availability${protoMap[location.protocol]}">here</a> if you wish to also update you availability for the ${nf.n} Ladder.`)
            
                calert(0, `<span style="font-size: large">Successfully updated</span>`, `<span style="font-size: larger">Click <a href="${nf.ur}confirm_availability${protoMap[location.protocol]}">here</a> if you wish to also update your availability for the ${nf.n} Ladder.</span>`,'notice',0,0,0,0,'1.5em')
            }
        } catch (ex) {}
        }
        else {calert(0,'Server Error', 'Could not proccess your request. Please confirm by email instead.')}
        
        
    })},500);

}


function dateRound(r) {
   try{
    //console.log(parseInt(r.value.split(' ')[1]), getRound()+1);
    if (parseInt(r.value.split(' ')[1]) == getRound()+1) {
        let nyh = rdLs.slice(0,parseInt((r.value.split(' ')[1]-1))).reduce((a, b) => a + b, 0)*diW;
        let fyh = rdLs.slice(0,parseInt((r.value.split(' ')[1]))).reduce((a, b) => a + b, 0)*diW - 1;
        //console.log(nyh,fyh);
       // byId('dates').innerHTML=`&nbsp;${offsetDate(parseInt((r.value.split(' ')[1]-1)*rdL))[1]} – ${offsetDate(parseInt((r.value.split(' ')[1]*rdL)-1))[1]}`;
        byId('dates').innerHTML=`&nbsp;${offsetDate(nyh)[1]} – ${offsetDate(fyh)[1]}`;
        let amef = '';
        //if(rdLs[parseInt(r.value.split(' ')[1])-1] == 1) amef = `&nbsp;<small><i>[Subject to change based on the weather]</i></small>`;
        byId('rdlength').innerHTML = `&nbsp;<b>(${rdLs[parseInt(r.value.split(' ')[1])-1]}-Week Round${amef})</b>`;
}
    else{
        byId('dates').innerHTML='';
        byId('rdlength').innerHTML = '';
    }
}
catch(ex){}
}

document.addEventListener("DOMContentLoaded",function () {
   try{
    lgifnolg();

    try{byId('wkcalc').value = `Round ${JSON.parse(getRound())+1}`;
    byId('wkcalc').innerHTML = `Round ${JSON.parse(getRound())+1}`;}catch(ex){}

    try{
        let sja = {
            //1: `By confirming below, you are attesting that you will be present (not traveling or otherwise unavailable) for the <b><i>entirety of the round</i></b>, and that you will be able to offer <b><i>a number of possible time-windows</i></b> in which to play.`,
            1: 'By confirming below, you are attesting that you will be able to offer <b><i>a number of possible time-windows</i></b> in which to play, and that you will <b>not</b> be absent (traveling or otherwise unavailable) for <b><i>any significant chunk of the round</i></b>.',
            2: 'By confirming below, you are attesting that you will be able to offer <b><i>a number of possible time-windows</i></b> in which to play, and that you will <b>not</b> be absent (traveling or otherwise unavailable) for <b><i>any significant chunk of the round</i></b>.'     
        }
        if(sja[rdLs[getRound()]]) {byId('atmsg').innerHTML = sja[rdLs[getRound()]]}
        else {byId('atmsg').innerHTML = sja[1]}
        
    } catch(ex){}

    try{paywall()}catch(ex){console.error(ex);}

    try{checkstatus();}catch(ex){console.error(ex);}

    try{localStorage.removeItem('niwmeMIennc3p')}catch(ex){}

    try{dateRound(byId('round'))}catch(ex){}

   } catch(ex) {
    alert("Fatal Error. This Page is not working properly.")
   }
    
}
)

let map = {status: {'true': ['Successfully Confirmed','#46b264'], 'false': ['Not Confirmed','red']}, webconfirm: {'true': ['Withdraw Confirmation', 'red'], 'false': ['Confirm via Website (preferable)', '']}, emailconfirm: {'true': ['Withdraw Confirmation via Email', 'red', false], 'false':['Confirm via Email', '', true]}}
let cfstatus;



function paywall(nosh, nopy) {
    let bw = lsdciph(localStorage.getItem(ladderId.ls+'logged_in_user'));
    let johm = bw.name.replace(/(\s)/g,'').toLowerCase();
    let gr = cipher('limit');
   //console.log(johm);
    let sai = gr(johm);
    //console.log(sai);
    ptc('pard', '*', 'afaf', sai).then(function(res){
        !res.error && (res=res.data)
        if(res.length>0) {bag(res,nosh, nopy, bw.name)}
    })
}

function bag(r,nosh, nopy, nam) {
    r = r[0];
    if(r.bool == false && !nopy) {
        let dif = 86400000;
        if(!Boolean(localStorage.getItem(ladderId.ls+'payalert')) || Date.now() - localStorage.getItem(ladderId.ls+'payalert') > dif) {
        localStorage.setItem(ladderId.ls+'payalert', Date.now())
        calert(0, '<span style="font-size: large">Payment Alert</span>', 
    `<span style="font-size: large">Hi ${lsdciph(localStorage.getItem(ladderId.ls+'logged_in_user')).name.split(' ')[0]}. According to our records, it looks like you still need to pay your <a style="color: palevioletred" target="_blank" href="signup${protoMap[location.protocol]}#price">administrative fees</a> for the ${thisLadder} Ladder. If you have already paid, please let us know by <a style="color: palevioletred" target="_blank" href="mailto:SPLInfo+payment@riseup.net?subject=Fall Season | ${thisLadder} Ladder Payment&body=I%20(${nam})%20paid%20[person%20you%20paid]%20[amount%20you%20paid]%20on%20[date%20you%20paid]%20via%20[payment method]">email</a> (including when and who you paid, plus the amount). If not, please visit <a style="color: palevioletred" target="_blank" href="pay_options${protoMap[location.protocol]}">the payment options page</a>, which includes an up to date list of times you can pay in person.</span>`, 'error', 0, '50%', 'black', 'rgb(231, 247, 16)', '1em')
        }
    }
    
    let nj = document.getElementsByClassName('modal__window').length;
    
    if(r.ineg) {let jm = r.ineg.split(',');
    for (let i = 0; i < jm.length; i++) {
        if(parseInt(jm[i])==getRound()+1 && !nosh) {
            if(nj<1) {palert()}
            else {
                window.addEventListener('keydown', function(e) {
                if(e.which == 27) {palert()}
                }, {once: true});
                window.addEventListener('click', function(e) {
                    setTimeout(function(){if(document.getElementsByClassName('modal__window').length<1){palert()}}, 500)
                    }, {once: true});
            
        }
        }
        
        function palert() {calert(0, '<span style="font-size: large">Ineligibility Alert</span>', `<span style="font-size: large">Hi ${lsdciph(localStorage.getItem(ladderId.ls+'logged_in_user')).name.split(' ')[0]}. Unfortunately you may not play for Round ${getRound()+1} because you have reportedly <a style="color: palevioletred" target="_blank" href="how_it_works${protoMap[location.protocol]}?r=p&t=1cbfaaa387e84e01f80fb5e333911ba69b7b16033a59ede4310e5cc002dec49e&bg=darkorange">failed to show up</a> for your match in Round ${getRound()}. Please wait until Round ${getRound()+2}, and do not forget about your matches in the future.</span>`, 'error', 0, '50%', 'black', 'rgb(231, 247, 16)', '1em')}
    }
  }
  
    }
    