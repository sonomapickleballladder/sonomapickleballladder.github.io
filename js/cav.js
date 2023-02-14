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
          let emes = `mailto:SPLconfirmations@riseup.net?subject=Yes for ${byId('round').value}&body=Confirming that I (${JSON.parse(localStorage.getItem('logged_in_user')).name}) am available for ${byId('round').value}.`;
          if(k==false) {emes = `mailto:SPLconfirmations@riseup.net?subject=No for ${byId('round').value}&body=I (${JSON.parse(localStorage.getItem('logged_in_user')).name}) am no longer available for ${byId('round').value}.`;}
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
    let angm = 'serviceWorkers';
    let bw = localStorage.getItem('logged_in_user');
    bw = JSON.parse(bw);
    let wname = bw.name.replace(/(\s)/g,'').toLowerCase();
    let rnd = parseInt(byId('round').value.split(' ').pop().trim());
    let cky = cipher(LZString.decompress(bw.expires));
    let gso = cky(`${rnd}/${wname}`);
    let cgso = cky(`${rnd}/${wname}/${tmd}`);
    //console.log(cgso);
    let injson = {round: rnd, name: bw.name, smvig: bw.token, encoding: gso, encoding3: cgso, is_available: tmd}

    let kf = confirm(`By clicking okay, you are confirming that you (${bw.name}) are available for ${byId("round").value}.\r\n \r\nIf you are not, please hit cancel.`)
    
    if(!kf) {return false}


    setTimeout(function(){saveData('availability2.0', injson).then(function(dn) {
        if(!dn) {
            checkstatus();
        //showstatus(true);
        //cfstatus = true;
        }
        else {calert(0,'Server Error', 'Could not proccess your request. Please confirm by email instead.')}
    })},500);

}


function checkstatus() {
    setTimeout(checkstatus, 86400000)
    let kp = JSON.parse(localStorage.getItem('logged_in_user'));
    ptc('availability2.0', 'encoding3', 'smvig', kp.token).then(function(res){
        if(res && res.length>0) {
            //console.log(res);
            //console.log(res);
            let rsje;
            try{rsje = parseInt(byId('round').value.split(' ')[1])}catch(ex){rsje = getRound()+1}
            //console.log(rsje);
            function filter_byround(event) {
                return event.round == getRound();
            }
            
           let dcip = decipher(LZString.decompress(kp.expires));
           for (let i = 0; i < res.length; i++) {
            let fa = dcip(res[i].encoding3);
            //console.log(parseInt(fa.split('/')[0].trim())===getRound()+1);
            //console.log(fa);
            if(parseInt(fa.split('/')[0].trim())===rsje){ acwom = res[i].encoding3; showstatus(fa); return false};
            if(i==res.length-1) {showstatus('blablabla/giberish/false'); return false;}
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
    let angm = 'serviceWorkers';
    let bw = localStorage.getItem('logged_in_user');
    bw = JSON.parse(bw);
    let wname = bw.name.replace(/(\s)/g,'').toLowerCase();
    let rnd = parseInt(byId('round').value.split(' ').pop().trim());
    let cky = cipher(LZString.decompress(bw.expires));
    //let gso = cky(`${rnd}/${wname}`);
    let cgso = cky(`${rnd}/${wname}/${tmd}`);
    //console.log(cgso);
    let injson = {encoding3: cgso, is_available: tmd}
    
    let mgea = `By clicking okay, you are confirming that you (${bw.name}) are available for ${byId("round").value}.\r\n \r\nIf you are not, please hit cancel.`;
    if(!tmd) {mgea = `By clicking okay, you (${bw.name}) are withdrawing your availability for ${byId("round").value}.\r\n \r\nIf you do not wish to proceed, please hit cancel.`;}
    let kf = confirm(mgea);
    
    if(!kf) {return false}

    //console.log(injson);

    try{byId('confirmationstatus').innerHTML = 'pending...';byId('confirmationstatus').style.backgroundColor=''}catch(ex){}

    setTimeout(function(){declareData('availability2.0', injson, 'encoding3', acwom).then(function(dn) {
      //console.log(dn);
      if(!dn) {
        checkstatus();
          //  showstatus(tmd)
          //  cfstatus = tmd;
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
}
    else{
        byId('dates').innerHTML='';
    }
}
catch(ex){}
}

document.addEventListener("DOMContentLoaded",function () {
   try{
    lgifnolg();

    try{byId('wkcalc').value = `Round ${getRound()+1}`;
    byId('wkcalc').innerHTML = `Round ${getRound()+1}`;}catch(ex){}

    try{checkstatus();}catch(ex){}

    try{localStorage.removeItem('niwmeMIennc3p')}catch(ex){}

    try{dateRound(byId('round'))}catch(ex){}

   } catch(ex) {
    alert("Fatal Error. This Page is not working properly.")
   }
    
}
)

let map = {status: {'true': ['Successfully Confirmed','#46b264'], 'false': ['Not Confirmed','red']}, webconfirm: {'true': ['Withdraw Confirmation', 'red'], 'false': ['Confirm via Website (preferable)', '']}, emailconfirm: {'true': ['Withdraw Confirmation via Email', 'red', false], 'false':['Confirm via Email', '', true]}}
let cfstatus;