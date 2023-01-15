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


}



function vrfid() {
    let ussr = '';
    event.preventDefault();
    //console.log('working');
    try {ussr=localStorage.getItem('aeloMidneufdaNiNaN').tags.swoma9hsofeK.ussr}
    catch(ex) {
    //calert(false,'error','aw98ng98ee')
    }
}