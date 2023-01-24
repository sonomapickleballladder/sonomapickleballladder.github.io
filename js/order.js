window.onload = function() {
    lsWarning();
    

    try{let mbt = JSON.parse(localStorage.getItem('niwmeMIennc3p')); byId('name').value = mbt.name; byId('skey').value=mbt.key; checkid();}catch(ex){}

    getrankings();
}

function getrankings() {
  //console.log('refreshing...');
  clearTimeout(getrankings);
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
        if(name.toLowerCase().replace(/(\s)/g,"")==ord[i].toLowerCase().replace(/(\s)/g,"") && checkid()[1]) {controls= `&nbsp;<button id="goup" onclick="moveUp(this.parentNode,${i+1},${orind+1})">Up &uarr;</button>&nbsp;<button id="godown" onclick="moveDown(this.parentNode,${i+1},${orind+1})">Down &darr;</button>`;}
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
      

  let maxmove = 28;

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
      alert ('editing the page is no longer enabled');
      return false;
    document.activeElement.blur();
    let mseno = '';
    let anw = mseno.toString();
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
        //let rel = document.createElement('i');
       // rel.innerHTML = Array.from(element.parentNode.children).indexOf(element) -  orord.indexOf(nm);
       // element.after(rel)
       let p0 = orord.indexOf(nm);
        let vert = Array.from(element.parentNode.children).indexOf(element) - p0;
        let namespan = element.getElementsByTagName('span')[0];

        if(bnsuawe.indexOf(lzmn)>-1 || (byId('name').value.toLowerCase().trim()==nm.toLowerCase().trim() && checkid()[1])) {
        let indchange =  Math.abs(vert);
        if(vert>0) {indchange = Math.abs(vert+2)}
        let inp = document.createElement('input');
        //console.log(vert);
        if(vert<0) namespan.style.backgroundColor = clrsup[indchange];
        if(vert>0) namespan.style.backgroundColor = clrsdown[indchange];
        if(vert==0) namespan.style.backgroundColor = "";

        }

        let tg = 'small';

        clearel(element, tg)

        let newNode = document.createElement(tg);
        let invrt = JSON.stringify(-vert);
        if(parseInt(vert)==0) {invrt = ""};
        if(invrt.indexOf('-')>-1) {invrt=invrt.replace(/-/g,'')+'⇓'}
        else if(invrt.length>0) {invrt=invrt+'⇑'}
        newNode.innerHTML= ` ${invrt} `;

        namespan.parentNode.insertBefore(newNode, namespan.nextSibling);

    }

  }



  function clearel(pr, el) {
    var list = pr.getElementsByTagName(el);
    for (var k = list.length - 1; k >= 0; k--) {
      var item = list[k];
      item.parentNode.removeChild(item);
    }
  }
