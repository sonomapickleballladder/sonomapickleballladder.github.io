function vrfrd(m) {
    let nrd = getRound()+1;
    let g = byId('round').value;
    let tx = g.replace(/[0-9]/g,'');
    let prd = parseInt(g.replace(tx,''));
    if(isNaN(nrd)) {
        event.preventDefault(); calert(false,'Hang on!', 'Confirming availability is currently disabled as this Ladder season is not yet active (or has finished). It will be enabled '+Math.abs(frstC)+' days before the first round starts.','notice',0,0,0,0,'1.5em'); return false;
    }
    if(prd<nrd) {
        event.preventDefault(); calert(false,'Error', 'You cannot confirm availability for a current or previous round.','error', 0,0,0,0,'1.5em'); return false;
    }
    if(prd>nrd) {
        event.preventDefault(); calert(false,'Error', 'You may only confirm availability for the next round. Please wait until '+byId('round').children[byId('round').selectedIndex-1].value+' to confirm for '+byId('round').value+'.','error', 0,0,0,0,'1.5em'); return false;
    }

    if(m) {
        try{
          byId('emailconfirmlink').href='mailto:SPLconfirmations@riseup.net?subject=Yes&body=Confirming that I am available for '+byId('round').value+'.';
        }
        catch(ex) {
            calert(false,'Ah Shucks!','Unknown error.','error')
        }
    }
    
    return true;

}



function vrfid() {
    let vf = vrfrd();
    if(!vf) return false;
    let angm = 'serviceWorkers';
    let ussr = '';
    //event.preventDefault();
    let b = localStorage.getItem(angm);
    let nm = LZString.decompress(b);
    let scrt = LZString.decompress(b);
    nm && (nm = JSON.parse(nm).name)
    scrt && (scrt = JSON.parse(scrt).secret)
    nm || (nm = prompt(`Your First and Last Name (ie. ${createPersonName()})`));
    if(!nm) return false;
    scrt || (scrt =  prompt(`Your Secret Key (as you provided when signing up for the Ladder)`));
    if(!scrt) return false;
    let rnd = parseInt(byId('round').value.split(' ').pop().trim());
    let injson = {name: nm, secret: scrt, round: rnd};
    localStorage.setItem(angm, LZString.compress(JSON.stringify(injson)));
    //console.log(injson);
    if(disallow(nm)) {calert(0,'Error', `You are not authorized ${nm}.`, 'error'); return false}
    let kf = confirm(`By clicking okay, you are confirming that your name (${nm}) and secret (${scrt}) are correct, and that you are available for ${byId("round").value}.\r\n \r\nIf any of this information is not correct, or you do not wish to proceed, please hit cancel and then click the \'${byId("webconfirm").innerHTML}\' button again.`)
    if(!kf) {
    let erd = confirm('Click okay to delete the information on record. Or click cancel to retain it.');
    if(erd) {localStorage.removeItem(angm);}
    return false;
    }

    setTimeout(function(){saveData('availability', injson).then(function(dn) {
        if(!dn) {document.write('Successfully submitted!');}
        else {calert(0,'Server Error', 'Could not proccess your request. Please confirm by email instead.')}
    })},500);

    

    //console.log('working');
    try {ussr=localStorage.getItem('aeloMidneufdaNiNaN').tags.swoma9hsofeK.ussr}
    catch(ex) {
    //calert(false,'error','aw98ng98ee')
    }
}