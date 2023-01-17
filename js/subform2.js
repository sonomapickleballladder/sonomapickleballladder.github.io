window.onload = function () {
  cusInp();
  rdFrstNm();

  let rnd = getRound();
  try{autofillRound(rnd,'current');
  autofillRound(rnd,'next')
  }
  catch(ex){}

}



function cusInp() {
    try {
        let cus = byAttr('prompt');

        for (let i = 0; i < cus.length; i++) {
            cus[i].addEventListener('click', function() {
                try{dgprompt(cus[i].getAttribute('prompt'),
                function (val) {
                    //console.log(val);
                    try{if(Boolean(val)&&val.trim().length>16){alert('Please use a shorter name');return false}}catch(ex){}
                    try{if(val.trim().length>0) {cus[i].innerHTML=val}}catch(ex){}
                    if(Boolean(val)&&val.trim().length>0&&Boolean(unundefine(cus[i].getAttribute('prepend')))&&cus[i].innerHTML.indexOf(cus[i].getAttribute('prepend'))<0) {cus[i].innerHTML = cus[i].getAttribute('prepend')+cus[i].innerHTML}
                    if(Boolean(val)&&val.trim().length>0&&Boolean(unundefine(cus[i].getAttribute('append')))&&cus[i].innerHTML.indexOf(cus[i].getAttribute('append'))<0) {cus[i].innerHTML += cus[i].getAttribute('append')}
    
                }
                );
                
            }
            catch(ex) {
                //console.log(ex);
                let dg = document.createElement('input');
                dg.classList.add('subinput');
                dg.value=cus[i].innerText.replace(/(\(click to edit\))/g,'');
                cus[i].replaceWith(dg);
            }
            })
            
        }
    } catch (error) {
        
    }
}

function rdFrstNm() {
    try{
        let randname = byAttr('randomname');
        for (let i = 0; i < randname.length; i++) {
            let uy = createPersonName();
            randname[i].innerHTML=uy;
          if(Boolean(randname[i].getAttribute('apnd'))) {randname[i].innerHTML+=randname[i].getAttribute('apnd')}
          try {
            if(byAttr('randomemail',randname[i].getAttribute('dataid')).length>0){
                byAttr('randomemail')[0].innerHTML=createEmail(uy);
            }
          } catch (ex) {
            console.log(ex);
          }
        }
      }catch(ex){}
}





function vrfrd(m) {
    console.log(53);
    let nrd = getRound()+1;
    let g = byId('round').value;
    let tx = g.replace(/[0-9]/g,'');
    let prd = parseInt(g.replace(tx,''));
    if(isNaN(nrd)) {
        event.preventDefault(); calert(false,'Hang on!', 'This form is currently disabled as this Ladder season is not yet active (or has finished). It will be enabled '+Math.abs(frstC+2)+' days before the first round starts.','notice',0,0,0,0,'1.5em'); return false;
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