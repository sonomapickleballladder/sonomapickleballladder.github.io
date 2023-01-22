window.onload = function() {
    lsWarning();
    

    try{let mbt = JSON.parse(localStorage.getItem('niwmeMIennc3p')); byId('name').value = mbt.name; byId('skey').value=mbt.key; checkid();}catch(ex){}

    getrankings();
}

function getrankings() {
  setTimeout(getrankings,60000)
    ptc('rankings', '*').then(function(res){
        for (let i = 0; i < res.length; i++) {
            bnsuawe.push(res[i].mwbn);
            wnieai.push(parseInt(res[i].id));
        }
        awMisen = res.filter(obj => {
            return obj.id === Math.min(...wnieai)
          });


        wbicewom = res.filter(obj => {
            return obj.id === Math.max(...wnieai)
          });
       awMisen=awMisen[0];
       wbicewom=wbicewom[0]

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
      if(indchange>maxmove) return false;
      element.parentNode.insertBefore(element, element.previousElementSibling);
      colorcodeorder();
      
    }
  }
function moveDown(element,p1,p0) {
    if(element.nextElementSibling) {
        let vert = Array.from(element.parentNode.children).indexOf(element) - p0 +2;
        let indchange =  Math.abs(vert);
      if(indchange>maxmove) return false;
      element.parentNode.insertBefore(element.nextElementSibling, element);
      colorcodeorder();
      /*let newind =  Array.from(element.parentNode.children).indexOf(element)+1;
      if(!p1 || !p0) return false;
      let diff = newind-p0+maxmove
      let namespan = element.getElementsByTagName('span')[0];
      console.log(vert);
      if(vert<0) namespan.style.backgroundColor = clrsup[indchange];
      if(vert>0) namespan.style.backgroundColor = clrsdown[indchange];
      if(vert==0) namespan.style.backgroundColor = "";*/
    }
      
  }


  let clrsup = ["auto","#ffc285", "#ffbb7e", "#ffb478", "#ffad71", "#ffa56a", "#ff9e64", "#ff975d", "#ff9056", "#ff8950", "#ff8249", "#ff7a42", "#ff733c", "#ff6c35", "#ff652f", "#ff5e28", "#ff5721", "#ff501b", "#ff4814", "#ff410d", "#ff3a07","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300"]
  let clrsdown = ["auto","#ccccff","#c9c4ff","#c7bdff","#c4b5ff","#c2adff","#bfa6ff","#bd9eff","#ba96ff","#b88fff","#b587ff","#b280ff","#b078ff","#ad70ff","#ab69ff","#a861ff","#a659ff","#a352ff","#a14aff","#9e42ff","#9c3bff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff"]


  let maxmove = 20;

let wbicewom, awMisen, bnsuawe = [], wnieai = [];

async function ptc(t,s,e,m,x,z,thenfunction){
    const { data, error } = await sb.client
    .from(t)
    .select(s)
  
  
  if(error&&debug) console.log(error);
  
  try{executeFunctionByName(thenfunction, window, data);}catch(ex){return data}
  
    
  }


  function checkid() {
    document.activeElement.blur();
    let mseno = `ᣣ塋¸઀أ〹䁓ᒱĹᬠⱰӠ瘨怨恇ะ碾䨤⚦㡒ȹ灬〮摮३㨃Ĩဣ交-ਨ⢦⒄儀ᖡ䉠䑬䒸Äٔ煥煡㍁ᓬ٣Ȩ㗠硠䁴⤴䋪ᴤ࠸ᚲ㹪䒀ㄈ㲔ᠼᴮ⍡۠㨐墁璨Ὣ☺༢ؠ杠⇢෨弈汍㌹तᶣۧ≩ࡢ撹ᙣ㸬∾䖱͡ㅚ僢洪兼ᒖٝ఩ͅ䯓Ʃ䂽簤߃剶⸃䪡Ⴁ䞰㍔ᐶ⢢ᴮޭ䅀䆙熡ᇂ㨰㋍牖┦⛤⃨ᷨ攁ੱᤢĩዐ呶خঘ᝘Ꭱ⇡堶ҩ⢕渶థ刐ഹ䤥⊩≗ั䅡䂕Ҁ掀‶กɩ⪑唁̡〪㴣ː擐๫ֱ≪ఄ䈤啈ᬤ╰䡕ᐂ懘䦐䅠䆝墌दA㹂䅋䕡Ř㭩扡汣෎推ᐨ¬Ī䠫⾯㫐帶஭毸撤ᠥ⡉ℊ⒢䕵㠪ƻቌ嬰̅¦悔֮烬㺀᜾✹扤ఠ䡠␺Ĥ။ૈ䥦ɩ❤䘤灲皩㻠㨫殁ٜ⥷斛ᣥ㣡≰ᎄ䈑も䐬喂∧ӻ煔懢⾳ે塴⋷㔬㈃䆧䈓⨔昇ⴱ枈ዧ㞲罘຃Ȁⴀɍ❠࠼⍷Ε᥮典徵䅫ܿ磀篈ॳ炠焕ଶ䁕䬓佤ၨథ熅૮䅆㡠昞⊬兿ᩂÑᴨᖄᨫæ᤬ㅃェ冠呁熉㊢䓒ᠦǈᤩჸⶤ炻⃮䁨ᰢ丐⦨ᠰ帥ࣸ採Ǽ㘥ӭ㗢≸С㴤灭㤗ⶥ㥖ዋ䶪㳍禅ᮌ倵ଫ䥜㠩৊㱄ೡ㏋ծڢ擩⑬ዴḡᕢ⴬凴ᔫ炰╧ᄝࠩ塬ᕯ㄰ध↑↥ᵂኁ䥖׫勰ᕫ䒮ᴹ塈㓢⏦ራ⣡৮⢑ק㇔ေ粻㚣燸ᯭ焈҄慸ണ䣩┮͍ㅯ≉⫪祄ᰤࡒ㊠䑭㬬ͷଦঀФㄐͨ傴ⶨ㦚嶳Š㍊ူ惢⃸樴⒀ޥ◩᧭⇊᳴ഴᜠ扂ᙩ璮ᚠ䃖⸦㊍〹ᶪ⋣ㅤת࢚皬偘㶩ᇣᕡೖ〪Ćᯫ獨䌤ᐁఱ䢪⽣扜Ⰸ奝ᚎ䃼⃁䆰␹疠⒥怱⧠䈮ࢣ⁉⋎⦽ว䣁⡮᲌ᦡ拮ңとڣᤧ⸵䠨઎H嶶灐磢昀␩Ҕۇ䄀͠䲙摩䂤ᵿ◩Ⰲ㠰䍈ⴼჃ䧞⢡╄᜵社ொ䃛͹℥Ⴌ簨⹋ড়ᢎ䵸Ὢ㣔Ⱜʢ᧊㲗҂६⵺䲤㩚→敡㓎㋇⬔ᓾ ᗪᅱ᯦慎䤼撵ڣㇴ㎀ु噊冊∡偼䧮櫷˞⧀ဿ⏈⶧䥜ㅫᮒC⃙޲ㆌᯪᔟ࢈┐ⵣธ〱呢ⷡ䆴∎ʃㆣႫদ砭垪沤搨਎⎨ガầ䥎柭◦ⶡ䏣⑥⡏㼄⧦⽗⎤ศ㴣摝燳ᴿ喰夦Ѥ〳ॾ᰸䔱坱ೆ侧嶰Įసᎇ况࣪\x94Ꮧ䠦⎤⑉ㆄᕅ灁䕐ㄺ烛Ļᬡ楐㲁㉳抺⎯䂊૩橯烸䙓䀰㄄ɇ硖枀淍䡂ⲑἰ塶ਠ懞Ў㭁䱧ł燢≪ர૱ᆽॡ幀成ᶴᨪX祤ီब䪫䕜᧳⤳㈉✤䍖͒ᰡ墁ܩ㐹威߉థ焹㋅搵°∣ဴ䟠箱ƪன塄䊪༄壴ł屯㛙ܐ౫燨c尰㎘⽓ሠ䇠穭⡑⃣䨰妵ೃ၀䥋Ⲧ汄ޱ䅨䠻੉ᘲ㈌䩅丶磀ង㢜嚀緍呧ഡ峴祥Īႄ䄼ᧄ౗Æ⎫ҁ䠽⼵屃˲煏熃ᅢ吾㓬⊬⺩ⷨᰣⷙҩ⤷捀ඡ䍒䤬፩䂵揵ဤ㖄 簥炴⊰刬͐⻡墆Ρ䘸၉嵡簦ዀ⋧劊Ҿᶨ⑇ຑा䴆c攢䗺Aഴ⑴並⑬ȁ䲰塛䛂卛懰涢吩ʈ㧍ᣁ挼ۨѱǧ噶←⤢⚆ǀ⻣儐䜠呁ר䶈摁ウ〠ᱯȲᝪ䲜ρ仾0岑㹗䄕⬅ₕրਠऔ஑ጱဤ࡫༢嫀⟡౷䗘䊈㳽ࡄ帮आ࣐瓑ᬕ㼥♹Ǥ㚼ェ䗘牋夓ᐉ櫜\x8C༵ᄱ卄ᓭ摦ୡ筲൰ǡ熓ㆸῦ犟䁨ᝠ棢ࢠ䆥෩២ᑎ❈␧纘Ⅵ䉼䄊ΰ㤨烡ᨠ䟀㩘ᜡtʹ燆梕⬘缤⒑ᕵ㨱Ƨ☠⬷地╪圇ع攮嗧৩婀䯱⹥ᄥキ㿫劔儀汢䕁嵔じࢸ⼕扝͞⊴㢆┄晢榤ᥛ㰤㊝࿐䛕ݘᬣႂᬡ慚偾චŞ橐睒س↰ొ㰷ա㯶⒂Ųึ愠䢀㡣㌞ᨪ䂐ु簠䂸ᦢ㤷慔㎇ф捦搡命⎡嗲たැ䱀⊱㩕䁟䟈䶦笍⠨Ṽ䡦䝡⡉灰㭂焑惴庹洔ૡ㬺儰ߔ夼䄘㟠䩙࠘管汔ു睾䗦䌫䑌⎴⤲砦◀㐎䰨䑠χ঵ᒡ䥜ǭ㷗Ķ☣勱焆ᑅᔰⒺἂ栢埝ش⡶؆⻥磿Ƴ⦿䀯偰㳇棒௠㸥⍈氲⃕⎀ड愊㠫ڌ丸㮵㈊䄜䏣恼ຸ㳥瀸ᗢ弼ቄⲥ溎䟣䒌Ⴕǵ⢢秭⁥⅕㭀凰硷矐ᝩ棘㮑㵛惭 ๊ኸ㢀ᰫசẅ䐠䏀᧻䪢ತ䈮䄴ׄ૜⢹㷫₰㴡烏ੇ䳄睌Ᏸẁ⦊䍽㌩砮а᪱恃㘒᱒窚ᬳ助΂ᆢ⊎㜤ૼ㠯ԭ㈣੃Ѥᙟ୰䢆♽涐਽㳯䕐昡祢㌉ҟ⯂ը䁱ᢙ暢⧀ᾓ〿䈘佑写⃜砮惖ౠᠪ烚䧪栣ǻׁ⁡⏚ࢪ㳮䁉᰺熟㦰ᆾ䅔㨇津∂ഥ絘ĸ憨⁦味䡙憿↢倳Ř₹⁸䈖䉗ਈ亃䢢婸∧؁恴ᱰ‽Ψ漬⪙䏙䜹碕ṋ灤ϔ㲚碿࢑媂楄ô㱮獠⠠㡌㝘佨〪ƈㄿ㧿䝀⥜熢₷环ᐸ吠ࡤ˄Ṯ〱䘾∣䃉⚸⡮䊤愨ࣺಐ⊢₄ᔑ桤↿Ⱟ嬐ᔇ溨㵽⹐㽙氞ཀ夳䩮∥䵽䱘㱶窥䝤䔬粝಩ీ∈卥᷊之守䚩㸸䈬᧡噂थᣃ濳拵朼䨪㳵ৠㄮ塣ഁส䪪Ⴣ⋭䋸笉❡䫚㌡ۈ㈣栮廇罱篆䕘倥拷व砪䄬券ᩘ珐㟠尫漫副う䛸ⲭ愗ೇ恟ū΁ᩄ⪯垦儗ঈ⺒ತ䀵䩟慲⣒㚚⍥Ꭱ恭䑱傆䧞玖儈叢ὀ䛾㗺緤倧慓א埥≝䂀൨瑄⠤ぎ䅬㡠ब擞ీ拦ɅȂà⹤循㘏Ԩ书‷⣊捐଴㠦憽஠呀䛋䓩̸ᕅ㞻ヘ䦰㻰Ȼ擧ⷄ绂僉㈁ཬ佢р္旸ԥ䑑䅌΀俣㴦Ƣڠ䫗玢僣ذ嵃䈫恗拄㾢ⵘĢİ≥春ᣣ஠簥∫絖ŀ伢すǭ䨰䡓ㄷᠨ׶㭣వ礲ਚ塡硒僷慠† `
    let anw = LZString.decompressFromUTF16(mseno);
    let hadme  = anw.split(',');
    let v = byId('name').value.replace(/(\s)/g,"").toLowerCase();
   let sk = byId('skey').value;
   let gme = v+sk;
   let aawe = sha256(gme);
   let efnuw = hadme.indexOf(aawe)>-1;
   if(efnuw) {try{localStorage.setItem('niwmeMIennc3p',JSON.stringify({name:byId('name').value, key: sk}))}catch(ex){}; byId('login').innerHTML = 'Signed in ✅'; /*byId('login').innerHTML =   byId('login').innerHTML.replace(/✅/g,'')+' ✅'*/}
   else {alert('Sign-in failed. Invalid credentials it would seem.'); }
   //try{renderorder(wbicewom, wbicewom.order.split(','));}catch(ex){}
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

  }


  function colorcodeorder() {
    let amk = byId('order').children;
    let orord = awMisen.order.split(',');

    for (let i = 0; i < amk.length; i++) {
        let element = amk[i];
        let nm = element.getElementsByTagName('span')[0].innerHTML;
        if(byId('name').value.toLowerCase().trim()==nm.toLowerCase().trim()) {byId('name').value=nm}
        let lzmn = LZString.compressToUTF16(nm);
        if(bnsuawe.indexOf(lzmn)>-1 || (byId('name').value.toLowerCase().trim()==nm.toLowerCase().trim() && checkid()[1])) {
        let p0 = orord.indexOf(nm);
        let vert = Array.from(element.parentNode.children).indexOf(element) - p0;
        let indchange =  Math.abs(vert);
        if(vert>0) {indchange = Math.abs(vert+2)}
        let namespan = element.getElementsByTagName('span')[0];
        if(vert<0) namespan.style.backgroundColor = clrsup[indchange];
        if(vert>0) namespan.style.backgroundColor = clrsdown[indchange];
        if(vert==0) namespan.style.backgroundColor = "";
        }
    }

  }
