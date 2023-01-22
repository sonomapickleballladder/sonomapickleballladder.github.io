window.onload = function() {
    lsWarning();
    

    try{let mbt = JSON.parse(localStorage.getItem('niwmeMIennc3p')); byId('name').value = mbt.name; byId('skey').value=mbt.key; checkid();}catch(ex){}

    getrankings();
}

function getrankings() {
  setTimeout(getrankings,60000)
    ptc('rankings', '*').then(function(res){
        //console.log(res);
        //console.log(res[res.length-1])
        

        for (let i = 0; i < res.length; i++) {
            bnsuawe.push(res[i].mwbn);
            wnieai.push(parseInt(res[i].id));
        }

        //
      //console.log(Math.min(...wnieai));
        awMisen = res.filter(obj => {
            return obj.id === Math.min(...wnieai)
          });

          //console.log(awMisen);

        wbicewom = res.filter(obj => {
            return obj.id === Math.max(...wnieai)
          });
       awMisen=awMisen[0];
       wbicewom=wbicewom[0]
          //console.log(wbicewom);

          let plr = wbicewom.order.split(',');

        renderorder(wbicewom, plr);

    

        
    })
}

function renderorder(al, ord) {
    byId('order').innerHTML = '';
    try{byId('goup').removeAttribute('id');byId('godown').removeAttribute('id');}catch(ex){}
    let orord = awMisen.order.split(',');
    let name = byId('name').value;
    for (let i = 0; i < ord.length; i++) {
        let orind = orord.indexOf(ord[i]);
        let controls = "";
        if(name.toLowerCase().trim()==ord[i].toLowerCase().trim() && checkid()[1]) {controls= `&nbsp;<button id="goup" onclick="moveUp(this.parentNode,${i+1},${orind+1})">Up &uarr;</button>&nbsp;<button id="godown" onclick="moveDown(this.parentNode,${i+1},${orind+1})">Down &darr;</button>`;}
        byId('order').innerHTML+=`<li><span style="cursor:pointer" onclick="if(byId('login').innerHTML.indexOf('✅')<0){byId('name').value=this.innerHTML}">${ord[i]}</span>${controls}</li>`;
     }

    colorcodeorder(); 
    
}

window.addEventListener('keydown', function keydownup(event){
    if(event.which ==40 || event.which ==39) {try{event.preventDefault(); byId('godown').click()}catch(ex){}}
    if(event.which ==37 || event.which ==38) {try{event.preventDefault(); byId('goup').click()}catch(ex){}}

 })



function moveUp(element,p1,p0) {
    if(element.previousElementSibling) {
        let vert = Array.from(element.parentNode.children).indexOf(element) - p0;
      let indchange =  Math.abs(vert);
      if(-maxmove>vert) return false;
      element.parentNode.insertBefore(element, element.previousElementSibling);
      colorcodeorder();

      
    }
  }
function moveDown(element,p1,p0) {
    if(element.nextElementSibling) {
        let vert = Array.from(element.parentNode.children).indexOf(element) - p0 +2;
        let indchange =  Math.abs(vert);
      if(vert>maxmove) return false;
      element.parentNode.insertBefore(element.nextElementSibling, element);
      colorcodeorder();
    }
      
  }


  let clrsup = ["auto","#ffc285", "#ffbb7e", "#ffb478", "#ffad71", "#ffa56a", "#ff9e64", "#ff975d", "#ff9056", "#ff8950", "#ff8249", "#ff7a42", "#ff733c", "#ff6c35", "#ff652f", "#ff5e28", "#ff5721", "#ff501b", "#ff4814", "#ff410d", "#ff3a07","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300"]
  let clrsdown = ["auto","#ccccff","#c9c4ff","#c7bdff","#c4b5ff","#c2adff","#bfa6ff","#bd9eff","#ba96ff","#b88fff","#b587ff","#b280ff","#b078ff","#ad70ff","#ab69ff","#a861ff","#a659ff","#a352ff","#a14aff","#9e42ff","#9c3bff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff"]
  //let clrs = ['orange', 'orange','orange','orange', 'orange','inherit','purple','purple','purple','purple','purple']
      

  let maxmove = 20;

let wbicewom, awMisen, bnsuawe = [], wnieai = [];

async function ptc(t,s,e,m,x,z,thenfunction){
    const { data, error } = await sb.client
    .from(t)
    .select(s)
  
  
  if(error&&debug) console.log(error);
  
  try{executeFunctionByName(thenfunction, window, data);}catch(ex){return data}
  
  
  //return data
  
    
  }


  function checkid() {
    document.activeElement.blur();
    let mseno = "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";
    let anw = LZString.decompressFromBase64(mseno);
    let hadme  = anw.split(',');
    let v = byId('name').value.replace(/(\s)/g,"").toLowerCase();
   let sk = byId('skey').value;
   let gme = v+sk;
   let aawe = sha256(gme);
   let efnuw = hadme.indexOf(aawe)>-1;
   if(efnuw) {try{localStorage.setItem('niwmeMIennc3p',JSON.stringify({name:byId('name').value, key: sk}))}catch(ex){}; byId('login').innerHTML = 'Signed in ✅'; /*byId('login').innerHTML =   byId('login').innerHTML.replace(/✅/g,'')+' ✅'*/}
   else {alert('Sign-in failed. Invalid credentials it would seem.'); }
   return [{error: 502}, efnuw, {kwm:aawe}];
  }



  function savethisorder() {
    let nord = byId('order').children, narr = [];
    for (let i = 0; i < nord.length; i++) {
        let kj = nord[i].getElementsByTagName('span')[0].innerHTML;
        narr.push(kj);
    }
    let norder = narr.toString();

    if(norder == wbicewom.order) {calert(0,'Error', 'Order has not changed', 0); return false;}

    let smogp = {order: norder, Fz_id: checkid()[2].kwm, mwbn: LZString.compressToUTF16(byId('name').value)}

    saveData('rankings',smogp).then(function(res){
        location.reload();
    })
    //console.log(narr);
    //console.log(narr.toString());
  }


  function colorcodeorder() {
    let amk = byId('order').children;
    let orord = awMisen.order.split(',');
    //console.log(orord);

    for (let i = 0; i < amk.length; i++) {
        let element = amk[i];
        let nm = element.getElementsByTagName('span')[0].innerHTML;
        if(byId('name').value.toLowerCase().trim()==nm.toLowerCase().trim()) {byId('name').value=nm}
        let lzmn = LZString.compressToUTF16(nm);
        //console.log(bnsuawe.indexOf(lzmn)>-1);
        if(bnsuawe.indexOf(lzmn)>-1 || (byId('name').value.toLowerCase().trim()==nm.toLowerCase().trim() && checkid()[1])) {
        let p0 = orord.indexOf(nm);
        let vert = Array.from(element.parentNode.children).indexOf(element) - p0;
        let indchange =  Math.abs(vert);
        if(vert>0) {indchange = Math.abs(vert+2)}
        let namespan = element.getElementsByTagName('span')[0];
        //console.log(vert);
        if(vert<0) namespan.style.backgroundColor = clrsup[indchange];
        if(vert>0) namespan.style.backgroundColor = clrsdown[indchange];
        if(vert==0) namespan.style.backgroundColor = "";
        }
    }

  }
